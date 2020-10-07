'use strict';

// goog.provide('Blockly.Rules');

// goog.require('Blockly.Generator');
// goog.require('Blockly.utils.global');
// goog.require('Blockly.utils.string');

Blockly.Rules = new Blockly.Generator('Rules');

Blockly.Rules.PRECEDENCE = 0;

/**
 * Encode a string as a properly escaped RDF string, complete with
 * quotes (borrowed from Blockly.JavaScript)
 * @param {string} string Text to encode.
 * @return {string} RDF string.
 * @private
 */
Blockly.Rules.quote_ = function(string) {
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/"/g, '\\\"');
  return '"' + string + '"';
};

Blockly.Rules.escape_ = function(name) {
	return encodeURI(name);
};

Blockly.Rules.init = function(workspace) {
	Blockly.Rules.RULE_CNT = 0;
	Blockly.Rules.RULE_NAMES = [];
};