/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { TextDocument, Position, WorkspaceEdit, Range, TextEdit } from '../wxmlLanguageTypes';
import { HTMLDocument, Node } from '../parser/htmlParser';

export function doRename(
  document: TextDocument,
  position: Position,
  newName: string,
  htmlDocument: HTMLDocument
): WorkspaceEdit | null {
  const offset = document.offsetAt(position);
  const node = htmlDocument.findNodeAt(offset);

  if (!node.tag) {
    return null;
  }

  if (!isWithinTagRange(node, offset, node.tag)) {
    return null;
  }

  const edits: TextEdit[] = [];

  const startTagRange: Range = {
    start: document.positionAt(node.start + '<'.length),
    end: document.positionAt(node.start + '<'.length + node.tag.length)
  };
  edits.push({
    range: startTagRange,
    newText: newName
  });

  if (node.endTagStart) {
    const endTagRange: Range = {
      start: document.positionAt(node.endTagStart + '</'.length),
      end: document.positionAt(node.endTagStart + '</'.length + node.tag.length)
    };
    edits.push({
      range: endTagRange,
      newText: newName
    });
  }

  const changes = {
    [document.uri.toString()]: edits
  };

  return {
    changes
  };
}

function toLocString(p: Position) {
  return `(${p.line}, ${p.character})`;
}

function isWithinTagRange(node: Node, offset: number, nodeTag: string) {
  // Self-closing tag
  if (node.endTagStart) {
    if (node.endTagStart + '</'.length <= offset && offset <= node.endTagStart + '</'.length + nodeTag.length) {
      return true;
    }
  }

  return node.start + '<'.length <= offset && offset <= node.start + '<'.length + nodeTag.length;
}
