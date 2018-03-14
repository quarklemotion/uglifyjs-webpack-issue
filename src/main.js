// Example: We're only using getCurrentLayerName. We would like constants.js,
// and the other exports of fns, to not be in the bundle as they're not used.

// Here we import the directory.
// This causes other fns and constants to be in the bundle
var CodeMirror = require('codemirror');
require('codemirror/lib/codemirror.css');

require('codemirror/mode/xml/xml');
require('codemirror/mode/css/css');
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/javascript/javascript');

var jshint = require('jshint').JSHINT;
require('csslint');

require('codemirror/addon/lint/javascript-lint');
require('codemirror/addon/lint/css-lint');
// forked version of lint/lint to expose annotation control programmatically
require('./codemirror/annotations');
require('./codemirror/autoformat');

require('codemirror/addon/hint/show-hint');
require('codemirror/addon/hint/javascript-hint');
require('codemirror/addon/hint/html-hint');
require('codemirror/addon/edit/matchbrackets');
require('codemirror/addon/display/placeholder');
window.CSSLint = require('csslint').CSSLint;

window.JSHINT = jshint;

const defaultOptions = {
  // Custom written option to show errors in gutters
  annotations: true,
  // Add Ctrl-Enter to the keymap so it will fire the keyHandled event when pressed
  extraKeys: {
    'Ctrl-Enter': function() {},
    'Ctrl-Space': 'autocomplete',
  },
  fixedGutter: true,
  // Required for annotations to work
  gutters: ['CodeMirror-lint-markers'],
  lineNumbers: true,
  lineWrapping: true,
  matchBrackets: true,
  mode: 'javascript',
  tabSize: 2,
  lint: true
};

window.myCodeMirror = CodeMirror.fromTextArea(document.getElementById('text1'), defaultOptions);
window.myCodeMirror.setValue('garbledygookgarbledygookgarbledygook\ngarbledygookgarbledygookgarbledygook\n\n\n\n\n\n\n\n');
window.myCodeMirror.lint();
