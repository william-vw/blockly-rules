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

var SwNamespaces = [
	[ "sa", "http://projects.cs.dal.ca/niche/sleepapnea.owl" ], 
	[ "dc", "dc" ]
];

var SwTerms = {
	map: {},

	getTerms: function(uri, callback) {
		if (this.map[uri]) {
			callback(this.map[uri]);
			return;
		}

		const query = 
			"PREFIX owl: <http://www.w3.org/2002/07/owl#> "+
			"SELECT ?uri WHERE { " +
			"{ ?uri a owl:Class } UNION " +
			"{ ?uri a owl:ObjectProperty } UNION " +
			"{ ?uri a owl:DatatypeProperty }" +
			"FILTER (STRSTARTS(str(?uri), '" + uri + "')) " +
			"} ORDER BY ?uri";
		console.log(query);
		
		var url = "http://ppr.cs.dal.ca:3010/terms/query?query=" + encodeURIComponent(query);
		console.log("calling: " + url);
		
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var results = JSON.parse(this.responseText);
				// console.log(results);
				
				var terms = SwTerms.collectTerms(uri, results);	
				SwTerms.map[uri] = terms; 
				callback(terms);
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	},

	collectTerms: function(namespace, results) {
		var bindings = results.results.bindings;
		if (bindings.length == 0)
			return [[ '', '' ]];

		var array = [];
		for (var i = 0; i < bindings.length; i++) {
			var binding = bindings[i];
			var uri = binding.uri.value;
			var name = uri.substring(namespace.length + 1);
			if (name)
				array.push([ name, uri ]);
		}
		return array;
	}
};

// inspired by
// https://stackoverflow.com/questions/51667300/how-to-hide-remove-field-in-blockly
Blockly.Blocks['dynamic_dropdown'] = {
 
  curNs: "",

  init: function() {
	var self = this;
	var dropdown = new Blockly.FieldDropdown(SwNamespaces,
		function(newNs) { self.onNsChange.call(self, newNs); });

	this.setInputsInline(true);

	var input = 
	  this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(dropdown, 'PREFIX');
	
	this.onNsChange(SwNamespaces[0][1]);
  },

  onNsChange: function(newNs) {
	if (newNs != this.curNs) {
		this.curNs = newNs;
		this.updateShape();
	}
  },

  updateShape: function() {
	var block = this;
	SwTerms.getTerms(this.curNs, function(terms) {
		if (block.getInput('NAME')) {
			block.removeInput('NAME');
		}
		block.appendDummyInput('NAME')
		  .appendField(new Blockly.FieldDropdown(function() {
			// console.log(terms);
			return terms;
		  }), 'URI');
	});
  },

  mutationToDom: function () {
	var container = document.createElement('mutation');
	container.setAttribute('cur_ns', this.curNs);
	
	return container;
  },
  
  domToMutation: function (container) {
	this.curNs = container.getAttribute('cur_ns');
	
	this.updateShape();
  } 
};

