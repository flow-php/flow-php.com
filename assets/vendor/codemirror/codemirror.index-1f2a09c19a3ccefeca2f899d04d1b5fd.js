/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.39.0.
 * Original file: /npm/codemirror@6.0.2/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{lineNumbers as o,highlightActiveLineGutter as r,highlightSpecialChars as m,drawSelection as e,dropCursor as i,rectangularSelection as p,crosshairCursor as t,highlightActiveLine as c,keymap as l}from"@codemirror/view";export{EditorView}from"@codemirror/view";import{EditorState as f}from"@codemirror/state";import{foldGutter as n,indentOnInput as s,syntaxHighlighting as a,defaultHighlightStyle as d,bracketMatching as u,foldKeymap as w}from"@codemirror/language";import{history as x,defaultKeymap as b,historyKeymap as g}from"@codemirror/commands";import{highlightSelectionMatches as k,searchKeymap as v}from"@codemirror/search";import{closeBrackets as h,autocompletion as E,closeBracketsKeymap as M,completionKeymap as S}from"@codemirror/autocomplete";import{lintKeymap as V}from"@codemirror/lint";const j=(()=>[o(),r(),m(),x(),n(),e(),i(),f.allowMultipleSelections.of(!0),s(),a(d,{fallback:!0}),u(),h(),E(),p(),t(),c(),k(),l.of([...M,...b,...v,...g,...w,...S,...V])])(),q=(()=>[m(),x(),e(),a(d,{fallback:!0}),l.of([...b,...g])])();export{j as basicSetup,q as minimalSetup};export default null;
