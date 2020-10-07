Blockly.defineBlocksWithJsonArray([
{
	"type": "sw_qname",
    "message0": "%1",
    "args0": [{
      "type": "field_input",
      "name": "NS",
      "text": "ns"
    }],
	"message1": ":%1",
	"args1": [{
      "type": "field_input",
      "name": "LN",
      "text": "ln"
    }],
	"inputsInline": "true",
    "output": "SW_TERM",
    "style": "text_blocks",
    // "helpUrl": "%{BKY_SW_QNAME_HELPURL}",
    "tooltip": "%{BKY_SW_QNAME_TOOLTIP}"
    // "extensions": [
      // "text_quotes",
      // "parent_tooltip_when_inline"
    // ]
	
}, {
	"type": "sw_var",
    "message0": "?%1",
    "args0": [{
      "type": "field_input",
      "name": "NAME",
      "text": "var"
    }],
	"inputsInline": "true",
    "output": "SW_TERM",
    "style": "text_blocks",
	// "colour": "#C0C0C0",
    // "helpUrl": "%{BKY_SW_VAR_HELPURL}",
    "tooltip": "%{BKY_SW_VAR_TOOLTIP}"
    // "extensions": [
      // "text_quotes",
      // "parent_tooltip_when_inline"
    // ]
	
}, {
    "type": "sw_string",
    "message0": "%1",
    "args0": [{
      "type": "field_input",
      "name": "TEXT",
      "text": "text"
    }],
    "output": "String",
    "style": "text_blocks",
    // "helpUrl": "%{BKY_SW_STRING_HELPURL}",
    "tooltip": "%{BKY_SW_STRING_TOOLTIP}",
    "extensions": [
      "text_quotes",
      // "parent_tooltip_when_inline"
    ]
	
  }, {
    "type": "sw_number",
    "message0": "%1",
    "args0": [{
      "type": "field_number",
      "name": "NUM",
      "value": 0
    }],
    "output": "Number",
    // "helpUrl": "%{BKY_SW_NUMBER_HELPURL}",
    "style": "text_blocks",
    "tooltip": "%{BKY_SW_NUMBER_TOOLTIP}",
    // "extensions": ["parent_tooltip_when_inline"]
	
  }, {
	"type": "sw_rule",
	"message0": "%1",
	"args0": [{
		"type": "field_input",
		"name": "NAME",
		"text": "rule name"
	}],
	"message1": "%{BKY_SW_RULE_IF} %1",
	"args1": [{
		"type": "input_statement",
		"name": "IF",
		"check": [ "sw_statement", "sw_rule_builtin" ]
	}],
	"message2": "%{BKY_SW_RULE_THEN} %1",
	"args2": [{
		"type": "input_statement",
		"name": "THEN",
		"check": "sw_rule"
	}],
	"previousStatement": "sw_rule",
	"nextStatement": "sw_rule",
	"style": "logic_blocks",
	// "helpUrl": "%{BKY_SW_RULE_HELPURL}",
	"tooltip": "%{BKY_SW_RULE_TOOLTIP}"
  
  }, {
    "type": "sw_statement",
    "message0": "%{BKY_SW_STATEMENT_SUBJECT} %1",
    "args0": [{
        "type": "input_value",
        "name": "SUBJECT",
        "check": [ 'SW_TERM', 'String', 'Number' ]
    }],
    "message1": "%{BKY_SW_STATEMENT_PREDICATE} %1",
    "args1": [{
		"type": "input_value",
        "name": "PREDICATE",
		"check": [ 'SW_TERM', 'String', 'Number' ]
    }],
    "message2": "%{BKY_SW_STATEMENT_OBJECT} %1",
    "args2": [{
        "type": "input_value",
        "name": "OBJECT",
		"check": [ 'SW_TERM', 'String', 'Number' ]
    }],
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": "true",
    "style": "list_blocks",
    "tooltip": "%{BKY_SW_STATEMENT_TOOLTIP}",
    // "helpUrl": "%{BKY_SW_STATEMENT_HELPURL}",
    // "extensions": ["sw_statement_tooltip"]
  
  }, {
    "type": "sw_type_statement",
    "message0": "%{BKY_SW_STATEMENT_SUBJECT} %1",
    "args0": [{
        "type": "input_value",
        "name": "SUBJECT",
        "check": [ 'SW_TERM' ]
    }],
    "message1": "%{BKY_SW_STATEMENT_TYPE} %1",
	"args1": [{
		"type": "input_dummy"
	}],
    "message2": "%1",
    "args2": [{
        "type": "input_value",
        "name": "OBJECT",
		"check": [ 'SW_TERM' ]
    }],
	"previousStatement": null,
	"nextStatement": null,
	"inputsInline": "true",
    "style": "list_blocks",
    "tooltip": "%{BKY_SW_TYPE_STATEMENT_TOOLTIP}",
    // "helpUrl": "%{BKY_SW_STATEMENT_HELPURL}",
    // "extensions": ["sw_statement_tooltip"]
  
  }, {
	"type": "sw_rule_builtin_unary_fn",
	"message0": "%1",
	"args0": [{
		"type": "field_dropdown",
		"name": "BUILTIN",
		"options": [
			['isLiteral', 'isLiteral'],
			['notLiteral', 'notLiteral'],
			['bound', 'bound']
        ]
	}],
	"message1": "%1",
	"args1": [{
		"type": "input_value",
		"name": "A0",
		"check": [ 'SW_TERM', 'String', 'Number' ]
	}],
	"inputsInline": "true",
	"previousStatement": null,
	"nextStatement": null,
	"style": "math_blocks",
	// "helpUrl": "%{BKY_SW_BUILTIN_UNARY_FN_HELPURL}",
	"tooltip": "%{BKY_SW_BUILTIN_UNARY_FN_TOOLTIP}"
	  
  }, {
	"type": "sw_rule_builtin_ternary_fn",
	"message0": "%1",
	"args0": [{
		"type": "field_dropdown",
		"name": "BUILTIN",
		"options": [
			['min', 'min'],
			['max', 'max']
        ]
	}],
	"message1": "( %1",
	"args1": [{
		"type": "input_value",
		"name": "A0",
		"check": [ 'SW_TERM', 'String', 'Number' ]
	}],
	"message2": "%1",
	"args2": [{
		"type": "input_value",
		"name": "A1",
		"check": [ 'SW_TERM', 'String', 'Number' ]
	}],
	"message3": ") = %1",
	"args3": [{
		"type": "input_value",
		"name": "A2",
		"check": [ 'SW_TERM', 'String', 'Number' ]
	}],
	"inputsInline": "true",
	"previousStatement": null,
	"nextStatement": null,
	"style": "math_blocks",
	// "helpUrl": "%{BKY_SW_BUILTIN_TERNARY_FN_HELPURL}",
	"tooltip": "%{BKY_SW_BUILTIN_TERNARY_FN_TOOLTIP}"
	  
  }, {
	"type": "sw_rule_builtin_binary_op",
	"message0": "%1",
	"args0": [{
		"type": "input_value",
		"name": "A0",
		"check": [ 'SW_TERM', 'String', 'Number' ]
	}],
	"message1": "%1",
	"args1": [{
		"type": "field_dropdown",
		"name": "BUILTIN",
		"options": [
			['=', 'equal'],
			['≠', 'notEqual'],
			['<', 'lessThan'],
			['<=', 'le'],
			['>', 'greaterThan']
        ]
	}],
	"message2": "%1",
	"args2": [{
		"type": "input_value",
		"name": "A1",
		"check": [ 'SW_TERM', 'String', 'Number' ]
	}],
	"inputsInline": "true",
	"previousStatement": null,
	"nextStatement": null,
	"style": "math_blocks",
	// "helpUrl": "%{BKY_SW_BUILTIN_BINARY_OP_HELPURL}",
	"tooltip": "%{BKY_SW_BUILTIN_BINARY_OP_TOOLTIP}"
	  
  }, {
	"type": "sw_rule_builtin_ternary_op",
	"message0": "%1",
	"args0": [{
		"type": "input_value",
		"name": "A0",
		"check": [ 'SW_TERM', 'String', 'Number' ]
	}],
	"message1": "%1",
	"args1": [{
		"type": "field_dropdown",
		"name": "BUILTIN",
		"options": [
			['+', 'sum'],
			['-', 'difference'],
			['/', 'quotient'],
			['x', 'product']
        ]
	}],
	"message2": "%1",
	"args2": [{
		"type": "input_value",
		"name": "A1",
		"check": [ 'SW_TERM', 'String', 'Number' ]
	}],
	"message3": " = %1",
	"args3": [{
		"type": "input_value",
		"name": "A2",
		"check": [ 'SW_TERM', 'String', 'Number' ]
	}],
	"inputsInline": "true",
	"previousStatement": null,
	"nextStatement": null,
	"style": "math_blocks",
	// "helpUrl": "%{BKY_SW_BUILTIN_TERNARY_OP_HELPURL}",
	"tooltip": "%{BKY_SW_BUILTIN_TERNARY_OP_TOOLTIP}"  
  }
]);
