'use strict';

// goog.provide('Blockly.Rules.all');

// goog.require('Blockly.Rules');

Blockly.Rules['sw_qname'] = function(block) {
	const ns = block.getFieldValue('NS');
	if (!ns)
		throw Error("missing namespace for qname");
	const ln = block.getFieldValue('LN');
	if (!ln)
		throw Error("missing localname for qname");
	
	const code = ns + ":" + ln;
	return [ code, 0 ];
}

Blockly.Rules['sw_var'] = function(block) {
	const name = block.getFieldValue('NAME');
	if (!name)
		throw Error("missing name for variable");
	
	const code = "?" + name;
	return [ code, 0 ];
}

Blockly.Rules['sw_statement'] = function(block) {
	const spo = [ Blockly.Rules.valueToCode(block, 'SUBJECT', 0), 
		Blockly.Rules.valueToCode(block, 'PREDICATE', 0), 
		Blockly.Rules.valueToCode(block, 'OBJECT', 0) ];
	
	for (var i = 0; i < spo.length; i++) {
		if (spo[i] == '')
			throw Error("missing S/P/O from statement");
	}
	
	const code = "(" + spo.join(" ") + ")";
	return [ code, 0 ];
}

Blockly.Rules['sw_rule_if_create_with'] = function(block) {
	var elements = new Array();
	for (var i = 0; i < block.itemCount_; i++) {
		const element = Blockly.Rules.valueToCode(block, 'ADD' + i, 0);
		if (element != '')
			elements.push(element);
	}
	const code = elements.join(',\n');
	return code;
};

Blockly.Rules['sw_rule_then_create_with'] = Blockly.Rules['sw_rule_if_create_with'];

Blockly.Rules['sw_rule'] = function(block) {
	Blockly.Rules.VAR_CNT = 0;
	
	const if_clause = Blockly.Rules.statementToCode(block, 'IF');
	if (if_clause == '')
		throw Error("missing IF clause");
	
	const then_clause = Blockly.Rules.statementToCode(block, 'THEN');
	if (then_clause == '')
		throw Error("missing THEN clause");
	
	const code = 
		if_clause +
			"\n->\n" + 
		then_clause;
	
	return code;
}