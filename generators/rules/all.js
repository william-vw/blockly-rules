'use strict';

// goog.provide('Blockly.Rules.all');

// goog.require('Blockly.Rules');

Blockly.Rules['sw_string'] = function(block) {
  var code = Blockly.Rules.quote_(block.getFieldValue('TEXT'));
  return [ code, 0 ];
};

Blockly.Rules['sw_number'] = function(block) {
  var code = Number(block.getFieldValue('NUM'));
  return [ code, 0 ];
};

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
	// console.log(block);
	
	const spo = [ Blockly.Rules.valueToCode(block, 'SUBJECT', 0), 
		Blockly.Rules.valueToCode(block, 'PREDICATE', 0), 
		Blockly.Rules.valueToCode(block, 'OBJECT', 0) ];
	
	for (var i = 0; i < spo.length; i++) {
		if (spo[i] == '')
			throw Error("missing S/P/O from statement");
	}
	
	const code = "(" + spo.join(" ") + ")";
	return code;
}

function sw_rule_builtin_generator(block, num_args) {
	var name = block.getFieldValue('BUILTIN');
	var elements = new Array();
	for (var i = 0; i < 3; i++) {
		const element = Blockly.Rules.valueToCode(block, 'A' + i, 0);
		if (element != '')
			elements.push(element);
	}
	if (elements.length != num_args)
		throw Error("missing builtin argument(s)");
	
	const code = name + "(" + elements.join(', ') + ")";
	return code;
}

Blockly.Rules['sw_rule_builtin_unary_fn'] = (block) => sw_rule_builtin_generator(block, 1);
Blockly.Rules['sw_rule_builtin_ternary_fn'] = (block) => sw_rule_builtin_generator(block, 3);
Blockly.Rules['sw_rule_builtin_binary_op'] = (block) => sw_rule_builtin_generator(block, 2);
Blockly.Rules['sw_rule_builtin_ternary_op'] = (block) => sw_rule_builtin_generator(block, 3);

Blockly.Rules['sw_rule'] = function(block) {
	Blockly.Rules.VAR_CNT = 0;
				
	// const if_clause = Blockly.Rules.statementToCode(block, 'IF');
	// if (if_clause == '')
		// throw Error("missing IF clause");
	//
	// const then_clause = Blockly.Rules.statementToCode(block, 'THEN');
	// if (then_clause == '')
		// throw Error("missing THEN clause");
	//
	// const code = "";
		// if_clause +
			// "\n->\n" + 
		// then_clause;
		
	const nestedRules = [];
	
	const clauses = [];
	const children = block.getChildren();
	for (var i = 0; i < children.length; i++) {
		const child = children[i];
		var clause = [];
		var next = child;
		while (next) {			
			if (next.type == 'sw_rule') {
				if (i == 0)
					throw Error("no nested rules allowed in IF clause");
				nestedRules.push(next);
			} else {
				clause.push(Blockly.Rules.blockToCode(next));
			}
			next = next.getNextBlock();
		}		
		clauses.push(clause.join(",\n"));
	}
	
	var code = clauses.join("\n->\n");
	
	if (nestedRules.length != 0) {
		for (var rule of nestedRules) {
			var ruleCode = Blockly.Rules.blockToCode(rule);
			// add rule body to nested rules' heads
			ruleCode = clauses[1] + ",\n" + ruleCode;
			
			code += "\n\n" + ruleCode;
		}
	}	
	
	return code;
}