/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as assert from 'assert';
import * as htmlLanguageService from '../wxmlLanguageService';
import { TextDocument } from '../wxmlLanguageService';



suite('HTML Highlighting', () => {


	function assertHighlights(value: string, expectedMatches: number[], elementName: string | null): void {
		const offset = value.indexOf('|');
		value = value.substr(0, offset) + value.substr(offset + 1);

		const document = TextDocument.create('test://test/test.html', 'html', 0, value);

		const position = document.positionAt(offset);
		const ls = htmlLanguageService.getLanguageService();
		const htmlDoc = ls.parseHTMLDocument(document);

		const highlights = ls.findDocumentHighlights(document, position, htmlDoc);
		assert.equal(highlights.length, expectedMatches.length);
		for (let i = 0; i < highlights.length; i++) {
			const actualStartOffset = document.offsetAt(highlights[i].range.start);
			assert.equal(actualStartOffset, expectedMatches[i]);
			const actualEndOffset = document.offsetAt(highlights[i].range.end);
			assert.equal(actualEndOffset, expectedMatches[i] + elementName!.length);

			assert.equal(document.getText().substring(actualStartOffset, actualEndOffset).toLowerCase(), elementName);
		}
	}

	test('Single', function (): any {
		assertHighlights('|<html></html>', [], null);
		assertHighlights('<|html></html>', [1, 8], 'html');
		assertHighlights('<h|tml></html>', [1, 8], 'html');
		assertHighlights('<htm|l></html>', [1, 8], 'html');
		assertHighlights('<html|></html>', [1, 8], 'html');
		assertHighlights('<html>|</html>', [], null);
		assertHighlights('<html><|/html>', [], null);
		assertHighlights('<html></|html>', [1, 8], 'html');
		assertHighlights('<html></h|tml>', [1, 8], 'html');
		assertHighlights('<html></ht|ml>', [1, 8], 'html');
		assertHighlights('<html></htm|l>', [1, 8], 'html');
		assertHighlights('<html></html|>', [1, 8], 'html');
		assertHighlights('<html></html>|', [], null);
	});

	test('Nested', function (): any {
		assertHighlights('<html>|<div></div></html>', [], null);
		assertHighlights('<html><|div></div></html>', [7, 13], 'div');
		assertHighlights('<html><div>|</div></html>', [], null);
		assertHighlights('<html><div></di|v></html>', [7, 13], 'div');
		assertHighlights('<html><div><div></div></di|v></html>', [7, 24], 'div');
		assertHighlights('<html><div><div></div|></div></html>', [12, 18], 'div');
		assertHighlights('<html><div><div|></div></div></html>', [12, 18], 'div');
		assertHighlights('<html><div><div></div></div></h|tml>', [1, 30], 'html');
		assertHighlights('<html><di|v></div><div></div></html>', [7, 13], 'div');
		assertHighlights('<html><div></div><div></d|iv></html>', [18, 24], 'div');
	});

	test('Selfclosed', function (): any {
		assertHighlights('<html><|div/></html>', [7], 'div');
		assertHighlights('<html><|br></html>', [7], 'br');
		assertHighlights('<html><div><d|iv/></div></html>', [12], 'div');
	});

	test('Case insensivity', function (): any {
		assertHighlights('<HTML><diV><Div></dIV></dI|v></html>', [7, 24], 'div');
		assertHighlights('<HTML><diV|><Div></dIV></dIv></html>', [7, 24], 'div');
	});

	test('Incomplete', function (): any {
		assertHighlights('<div><ol><li></li></ol></p></|div>', [1, 29], 'div');
	});
});