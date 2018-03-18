const CodeMirror = require('codemirror');

-// Enables syntax highlighting for javascript
require('codemirror/mode/javascript/javascript');
// Enables linting for javascript
require('codemirror/addon/lint/lint');
require('codemirror/addon/lint/javascript-lint');

window.JSHINT = require('jshint').JSHINT;

function initializeCodeMirror() {
  CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    lint: true
  });
}
window.onload = initializeCodeMirror;

