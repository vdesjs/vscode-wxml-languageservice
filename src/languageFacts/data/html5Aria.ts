/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { IAttributeData } from '../../htmlLanguageTypes';

export const ARIA_ATTRIBUTES: IAttributeData[] = [
  {
    "name": "aria-activedescendant",
    "description": "Identifies the currently active element when <abbr title=\"Document Object Model\">DOM</abbr> focus is on a <a href=\"https://www.w3.org/TR/wai-aria-1.1/#composite\" class=\"role-reference\"><code>composite</code></a> widget, <a href=\"https://www.w3.org/TR/wai-aria-1.1/#textbox\" class=\"role-reference\"><code>textbox</code></a>, <a href=\"https://www.w3.org/TR/wai-aria-1.1/#group\" class=\"role-reference\"><code>group</code></a>, or <a href=\"https://www.w3.org/TR/wai-aria-1.1/#application\" class=\"role-reference\"><code>application</code></a>."
  },
  {
    "name": "aria-atomic",
    "valueSet": "b",
    "description": "Indicates whether <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology\" class=\"internalDFN\" data-link-type=\"dfn\">assistive technologies</a> will present all, or only parts of, the changed region based on the change notifications defined by the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-relevant\" class=\"property-reference\"><code>aria-relevant</code></a> attribute."
  },
  {
    "name": "aria-autocomplete",
    "valueSet": "autocomplete",
    "description": "Indicates whether inputting text could trigger display of one or more predictions of the user&apos;s intended value for an input and specifies how predictions would be presented if they are made."
  },
  {
    "name": "aria-busy",
    "valueSet": "b",
    "description": "Indicates an element is being modified and that assistive technologies <em class=\"rfc2119\" title=\"MAY\">MAY</em> want to wait until the modifications are complete before exposing them to the user."
  },
  {
    "name": "aria-checked",
    "valueSet": "tristate",
    "description": "Indicates the current &quot;checked&quot; <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-state\" class=\"internalDFN\" data-link-type=\"dfn\">state</a> of checkboxes, radio buttons, and other <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-widget\" class=\"internalDFN\" data-link-type=\"dfn\">widgets</a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-pressed\" class=\"state-reference\"><code>aria-pressed</code></a> and <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-selected\" class=\"state-reference\"><code>aria-selected</code></a>."
  },
  {
    "name": "aria-colcount",
    "description": "Defines the total number of columns in a <a href=\"https://www.w3.org/TR/wai-aria-1.1/#table\" class=\"role-reference\"><code>table</code></a>, <a href=\"https://www.w3.org/TR/wai-aria-1.1/#grid\" class=\"role-reference\"><code>grid</code></a>, or <a href=\"https://www.w3.org/TR/wai-aria-1.1/#treegrid\" class=\"role-reference\"><code>treegrid</code></a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-colindex\" class=\"property-reference\"><code>aria-colindex</code></a>."
  },
  {
    "name": "aria-colindex",
    "description": "Defines an <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element&apos;s</a> column index or position with respect to the total number of columns within a <a href=\"https://www.w3.org/TR/wai-aria-1.1/#table\" class=\"role-reference\"><code>table</code></a>, <a href=\"https://www.w3.org/TR/wai-aria-1.1/#grid\" class=\"role-reference\"><code>grid</code></a>, or <a href=\"https://www.w3.org/TR/wai-aria-1.1/#treegrid\" class=\"role-reference\"><code>treegrid</code></a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-colcount\" class=\"property-reference\"><code>aria-colcount</code></a> and <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-colspan\" class=\"property-reference\"><code>aria-colspan</code></a>."
  },
  {
    "name": "aria-colspan",
    "description": "Defines the number of columns spanned by a cell or gridcell within a <a href=\"https://www.w3.org/TR/wai-aria-1.1/#table\" class=\"role-reference\"><code>table</code></a>, <a href=\"https://www.w3.org/TR/wai-aria-1.1/#grid\" class=\"role-reference\"><code>grid</code></a>, or <a href=\"https://www.w3.org/TR/wai-aria-1.1/#treegrid\" class=\"role-reference\"><code>treegrid</code></a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-colindex\" class=\"property-reference\"><code>aria-colindex</code></a> and <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan\" class=\"property-reference\"><code>aria-rowspan</code></a>."
  },
  {
    "name": "aria-controls",
    "description": "Identifies the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> (or elements) whose contents or presence are controlled by the current element. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-owns\" class=\"property-reference\"><code>aria-owns</code></a>."
  },
  {
    "name": "aria-current",
    "valueSet": "current",
    "description": "Indicates the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> that represents the current item within a container or set of related elements."
  },
  {
    "name": "aria-describedat"
  },
  {
    "name": "aria-describedby",
    "description": "Identifies the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> (or elements) that describes the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-object\" class=\"internalDFN\" data-link-type=\"dfn\">object</a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby\" class=\"property-reference\"><code>aria-labelledby</code></a>."
  },
  {
    "name": "aria-disabled",
    "valueSet": "b",
    "description": "Indicates that the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> is <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-perceivable\" class=\"internalDFN\" data-link-type=\"dfn\">perceivable</a> but disabled, so it is not editable or otherwise <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-operable\" class=\"internalDFN\" data-link-type=\"dfn\">operable</a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-hidden\" class=\"state-reference\"><code>aria-hidden</code></a> and <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-readonly\" class=\"property-reference\"><code>aria-readonly</code></a>."
  },
  {
    "name": "aria-dropeffect",
    "valueSet": "dropeffect",
    "description": "[Deprecated in ARIA 1.1] Indicates what functions can be performed when a dragged object is released on the drop target."
  },
  {
    "name": "aria-errormessage",
    "description": "Identifies the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> that provides an error message for the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-object\" class=\"internalDFN\" data-link-type=\"dfn\">object</a>.  See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-invalid\" class=\"state-reference\"><code>aria-invalid</code></a> and <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-describedby\" class=\"property-reference\"><code>aria-describedby</code></a>. "
  },
  {
    "name": "aria-expanded",
    "valueSet": "u",
    "description": "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed."
  },
  {
    "name": "aria-flowto",
    "description": "Identifies the next <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> (or elements) in an alternate reading order of content which, at the user&apos;s discretion, allows assistive technology to override the general default of reading in document source order."
  },
  {
    "name": "aria-grabbed",
    "valueSet": "u",
    "description": "[Deprecated in ARIA 1.1] Indicates an element&apos;s &quot;grabbed&quot; <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-state\" class=\"internalDFN\" data-link-type=\"dfn\">state</a> in a drag-and-drop operation."
  },
  {
    "name": "aria-haspopup",
    "valueSet": "b",
    "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a>."
  },
  {
    "name": "aria-hidden",
    "valueSet": "b",
    "description": "Indicates whether the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> is exposed to an accessibility <abbr title=\"Application Programing Interfaces\">API</abbr>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-disabled\" class=\"state-reference\"><code>aria-disabled</code></a>."
  },
  {
    "name": "aria-invalid",
    "valueSet": "invalid",
    "description": "Indicates the entered value does not conform to the format expected by the application. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage\" class=\"property-reference\"><code>aria-errormessage</code></a>."
  },
  {
    "name": "aria-kbdshortcuts"
  },
  {
    "name": "aria-label",
    "description": "Defines a string value that labels the current element. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby\" class=\"property-reference\"><code>aria-labelledby</code></a>."
  },
  {
    "name": "aria-labelledby",
    "description": "Identifies the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> (or elements) that labels the current element. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-describedby\" class=\"property-reference\"><code>aria-describedby</code></a>."
  },
  {
    "name": "aria-level",
    "description": "Defines the hierarchical level of an <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> within a structure."
  },
  {
    "name": "aria-live",
    "valueSet": "live",
    "description": "Indicates that an <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> will be updated, and describes the types of updates the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-user-agent\" class=\"internalDFN\" data-link-type=\"dfn\">user agents</a>, <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology\" class=\"internalDFN\" data-link-type=\"dfn\">assistive technologies</a>, and user can expect from the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-live-region\" class=\"internalDFN\" data-link-type=\"dfn\">live region</a>."
  },
  {
    "name": "aria-modal",
    "valueSet": "b",
    "description": "Indicates whether an <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> is modal when displayed."
  },
  {
    "name": "aria-multiline",
    "valueSet": "b",
    "description": "Indicates whether a text box accepts multiple lines of input or only a single line."
  },
  {
    "name": "aria-multiselectable",
    "valueSet": "b",
    "description": "Indicates that the user may select more than one item from the current selectable descendants."
  },
  {
    "name": "aria-orientation",
    "valueSet": "orientation",
    "description": "Indicates whether the element&apos;s orientation is horizontal, vertical, or unknown/ambiguous."
  },
  {
    "name": "aria-owns",
    "description": "Identifies an <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> (or elements) in order to define a visual, functional, or contextual parent/child <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-relationship\" class=\"internalDFN\" data-link-type=\"dfn\">relationship</a> between <abbr title=\"Document Object Model\">DOM</abbr> elements where the <abbr title=\"Document Object Model\">DOM</abbr> hierarchy cannot be used to represent the relationship. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-controls\" class=\"property-reference\"><code>aria-controls</code></a>."
  },
  {
    "name": "aria-placeholder",
    "description": "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format."
  },
  {
    "name": "aria-posinset",
    "description": "Defines an <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a>&apos;s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the <abbr title=\"Document Object Model\">DOM</abbr>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-setsize\" class=\"property-reference\"><code>aria-setsize</code></a>."
  },
  {
    "name": "aria-pressed",
    "valueSet": "tristate",
    "description": "Indicates the current &quot;pressed&quot; <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-state\" class=\"internalDFN\" data-link-type=\"dfn\">state</a> of toggle buttons. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-checked\" class=\"state-reference\"><code>aria-checked</code></a> and <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-selected\" class=\"state-reference\"><code>aria-selected</code></a>."
  },
  {
    "name": "aria-readonly",
    "valueSet": "b",
    "description": " Indicates that the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> is not editable, but is otherwise <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-operable\" class=\"internalDFN\" data-link-type=\"dfn\">operable</a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-disabled\" class=\"state-reference\"><code>aria-disabled</code></a>."
  },
  {
    "name": "aria-relevant",
    "valueSet": "relevant",
    "description": "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-atomic\" class=\"property-reference\"><code>aria-atomic</code></a>."
  },
  {
    "name": "aria-required",
    "valueSet": "b",
    "description": "Indicates that user input is required on the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> before a form may be submitted."
  },
  {
    "name": "aria-roledescription",
    "description": "Defines a human-readable, author-localized description for the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-role\" class=\"internalDFN\" data-link-type=\"dfn\">role</a> of an <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a>."
  },
  {
    "name": "aria-rowcount",
    "description": "Defines the total number of rows in a <a href=\"https://www.w3.org/TR/wai-aria-1.1/#table\" class=\"role-reference\"><code>table</code></a>, <a href=\"https://www.w3.org/TR/wai-aria-1.1/#grid\" class=\"role-reference\"><code>grid</code></a>, or <a href=\"https://www.w3.org/TR/wai-aria-1.1/#treegrid\" class=\"role-reference\"><code>treegrid</code></a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex\" class=\"property-reference\"><code>aria-rowindex</code></a>."
  },
  {
    "name": "aria-rowindex",
    "description": "Defines an <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element&apos;s</a> row index or position with respect to the total number of rows within a <a href=\"https://www.w3.org/TR/wai-aria-1.1/#table\" class=\"role-reference\"><code>table</code></a>, <a href=\"https://www.w3.org/TR/wai-aria-1.1/#grid\" class=\"role-reference\"><code>grid</code></a>, or <a href=\"https://www.w3.org/TR/wai-aria-1.1/#treegrid\" class=\"role-reference\"><code>treegrid</code></a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount\" class=\"property-reference\"><code>aria-rowcount</code></a> and <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan\" class=\"property-reference\"><code>aria-rowspan</code></a>."
  },
  {
    "name": "aria-rowspan",
    "description": "Defines the number of rows spanned by a cell or gridcell within a <a href=\"https://www.w3.org/TR/wai-aria-1.1/#table\" class=\"role-reference\"><code>table</code></a>, <a href=\"https://www.w3.org/TR/wai-aria-1.1/#grid\" class=\"role-reference\"><code>grid</code></a>, or <a href=\"https://www.w3.org/TR/wai-aria-1.1/#treegrid\" class=\"role-reference\"><code>treegrid</code></a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex\" class=\"property-reference\"><code>aria-rowindex</code></a> and <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-colspan\" class=\"property-reference\"><code>aria-colspan</code></a>."
  },
  {
    "name": "aria-selected",
    "valueSet": "u",
    "description": "Indicates the current &quot;selected&quot; <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-state\" class=\"internalDFN\" data-link-type=\"dfn\">state</a> of various <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-widget\" class=\"internalDFN\" data-link-type=\"dfn\">widgets</a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-checked\" class=\"state-reference\"><code>aria-checked</code></a> and <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-pressed\" class=\"state-reference\"><code>aria-pressed</code></a>."
  },
  {
    "name": "aria-setsize",
    "description": "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the <abbr title=\"Document Object Model\">DOM</abbr>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-posinset\" class=\"property-reference\"><code>aria-posinset</code></a>."
  },
  {
    "name": "aria-sort",
    "valueSet": "sort",
    "description": "Indicates if items in a table or grid are sorted in ascending or descending order."
  },
  {
    "name": "aria-valuemax",
    "description": "Defines the maximum allowed value for a range <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-widget\" class=\"internalDFN\" data-link-type=\"dfn\">widget</a>."
  },
  {
    "name": "aria-valuemin",
    "description": "Defines the minimum allowed value for a range <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-widget\" class=\"internalDFN\" data-link-type=\"dfn\">widget</a>."
  },
  {
    "name": "aria-valuenow",
    "description": "Defines the current value for a range <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-widget\" class=\"internalDFN\" data-link-type=\"dfn\">widget</a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext\" class=\"property-reference\"><code>aria-valuetext</code></a>."
  },
  {
    "name": "aria-valuetext",
    "description": "Defines the human readable text alternative of <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow\" class=\"property-reference\"><code>aria-valuenow</code></a> for a range <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-widget\" class=\"internalDFN\" data-link-type=\"dfn\">widget</a>."
  },
  {
    "name": "aria-details",
    "description": "Identifies the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-element\" class=\"internalDFN\" data-link-type=\"dfn\">element</a> that provides a detailed, extended description for the <a href=\"https://www.w3.org/TR/wai-aria-1.1/#dfn-object\" class=\"internalDFN\" data-link-type=\"dfn\">object</a>. See related <a href=\"https://www.w3.org/TR/wai-aria-1.1/#aria-describedby\" class=\"property-reference\"><code>aria-describedby</code></a>."
  },
  {
    "name": "aria-keyshortcuts",
    "description": "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element."
  }
]