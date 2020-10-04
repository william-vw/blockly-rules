'use strict';

goog.provide('Blockly.Rules.all');

goog.require('Blockly.Rules');

Blockly.Rules['sw_qname'] = function(block) {
	return block.getFieldValue('NS') + ":" + block.getFieldValue('LN');
}

Blockly.Rules['sw_statement'] = function(block) {
	return "(" +
		Blockly.Rules.valueToCode(block, 'SUBJECT', 0) + " "
		Blockly.Rules.valueToCode(block, 'PREDICATE', 0) + " "
		Blockly.Rules.valueToCode(block, 'OBJECT', 0) +
	")";
}

Blockly.Rules['sw_rule_if_create_with'] = function(block) {
	var elements = new Array(block.itemCount_);
	for (var i = 0; i < block.itemCount_; i++) {
		elements[i] = Blockly.Rules.valueToCode(block, 'ADD' + i, 0) || 'null';
	}
	return elements.join(', ');
};

Blockly.Rules['sw_rule_then_create_with'] = Blockly.Rules['sw_rule_if_create_with'];

Blockly.Rules['sw_rule'] = function(block) {
	return 
		Blockly.Rules.valueToCode(block, 'IF') + 
			"\n\t->\n\t" + 
		Blockly.Rules.valueToCode(block, 'THEN');
}