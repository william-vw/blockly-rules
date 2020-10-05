Blockly.defineBlocksWithJsonArray([
{
	"type": "sw_qname",
    "message0": "%1",
    "args0": [{
      "type": "field_input",
      "name": "NS",
      "text": ""
    }],
	"message1": ":%1",
	"args1": [{
      "type": "field_input",
      "name": "LN",
      "text": ""
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
      "text": ""
    }],
	"inputsInline": "true",
    "output": "SW_TERM",
    // "style": "text_blocks",
	"colour": "#C0C0C0",
    // "helpUrl": "%{BKY_SW_VAR_HELPURL}",
    "tooltip": "%{BKY_SW_VAR_TOOLTIP}"
    // "extensions": [
      // "text_quotes",
      // "parent_tooltip_when_inline"
    // ]
	
}, {
    "type": "sw_statement",
    "message0": "subject %1",
    "args0": [
      {
        "type": "input_value",
        "name": "SUBJECT",
        "check": [ 'SW_TERM', 'String', 'Number' ]
      }
    ],
    "message1": "predicate %1",
    "args1": [
      {
        "type": "input_value",
        "name": "PREDICATE",
		"check": [ 'SW_TERM', 'String', 'Number' ]
      }
    ],
    "message2": "object %1",
    "args2": [
      {
        "type": "input_value",
        "name": "OBJECT",
		"check": [ 'SW_TERM', 'String', 'Number' ]
      }
    ],
    "output": 'Statement',
    "style": "logic_blocks",
    "tooltip": "%{BKY_SW_STATEMENT_TOOLTIP}",
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
	"output": "Builtin",
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
	"output": "Builtin",
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
	"output": "Builtin",
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
	"output": "Builtin",
	"style": "math_blocks",
	// "helpUrl": "%{BKY_SW_BUILTIN_TERNARY_OP_HELPURL}",
	"tooltip": "%{BKY_SW_BUILTIN_TERNARY_OP_TOOLTIP}"
	  
  }, {
    "type": "sw_rule",
    "message0": "IF %1",
    "args0": [
      {
        "type": "input_value",
        "name": "IF",
		"check": "Clause"
      }
    ],
    "message1": "THEN %1",
    "args1": [
      {
        "type": "input_value",
        "name": "THEN",
		"check": "Clause"
      }
    ],
    // "previousStatement": null,
    // "nextStatement": null,
    // "style": "logic_blocks",
	"colour": "#FF7F7F",
    "tooltip": "%{BKY_SW_RULE_TOOLTIP}",
    // "helpUrl": "%{BKY_SW_RULE_HELPURL}",
    // "extensions": ["controls_if_tooltip"]
  },
]);

Blockly.Blocks['sw_rule_if_create_with'] = {
  /**
   * Block for creating an if-clause with any number of statements.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg['SW_RULE_IF_CREATE_WITH_HELPURL']);
    // this.setStyle('list_blocks');
	this.setColour('#DD7F7F');
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'Clause');
    this.setMutator(new Blockly.Mutator(['sw_rule_clause_create_with_element']));
    this.setTooltip(Blockly.Msg['SW_RULE_IF_CREATE_WITH_TOOLTIP']);
  },
  /**
   * Create XML to represent if-clause inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the if-clause statements.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this {Blockly.Block}
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('sw_rule_clause_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('sw_rule_clause_create_with_element');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg['SW_RULE_CLAUSE_CREATE_EMPTY_TITLE']);
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        // var input = this.appendValueInput('ADD' + i).setAlign(Blockly.ALIGN_RIGHT);
		var input = this.appendValueInput('ADD' + i).setAlign(Blockly.ALIGN_RIGHT).setCheck([ 'Statement', 'Builtin' ]);
        if (i == 0) {
          // input.appendField(Blockly.Msg['SW_RULE_IF_CREATE_WITH_ELEMENT']);
		  input.appendField("IF");
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

Blockly.Blocks['sw_rule_then_create_with'] = {
  /**
   * Block for creating an if-clause with any number of statements.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg['SW_RULE_THEN_CREATE_WITH_HELPURL']);
    // this.setStyle('list_blocks');
	this.setColour('#68C13C');
    this.itemCount_ = 1;
    this.updateShape_();
    this.setOutput(true, 'Clause');
    this.setMutator(new Blockly.Mutator(['sw_rule_clause_create_with_element']));
    this.setTooltip(Blockly.Msg['SW_RULE_THEN_CREATE_WITH_TOOLTIP']);
  },
  /**
   * Create XML to represent if-clause inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the if-clause statements.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this {Blockly.Block}
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('sw_rule_clause_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('sw_rule_clause_create_with_element');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg['SW_RULE_CLAUSE_CREATE_EMPTY_TITLE']);
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        // var input = this.appendValueInput('ADD' + i).setAlign(Blockly.ALIGN_RIGHT);
        var input = this.appendValueInput('ADD' + i).setAlign(Blockly.ALIGN_RIGHT).setCheck([ 'Statement', 'Builtin' ]);
		if (i == 0) {
          // input.appendField(Blockly.Msg['SW_RULE_THEN_CREATE_WITH_ELEMENT']);
		  input.appendField("THEN");
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

Blockly.Blocks['sw_rule_clause_create_with_container'] = {
  /**
   * Mutator block for clause (if/then) container.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setStyle('list_blocks');
    // this.appendDummyInput()
        // .appendField(Blockly.Msg['SW_RULE_CLAUSE_CREATE_WITH_CONTAINER_TITLE_ADD']);
	this.appendValueInput('SW_RULE_CLAUSE_ELEMENT').setCheck([ 'Statement', 'Builtin' ]);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg['SW_RULE_CLAUSE_CREATE_WITH_CONTAINER_TOOLTIP']);
    this.contextMenu = false;
  }
};

Blockly.Blocks['sw_rule_clause_create_with_element'] = {
  /**
   * Mutator block for adding statements.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setStyle('list_blocks');
    // this.appendDummyInput()
       // .appendField(Blockly.Msg['SW_RULE_CLAUSE_CREATE_WITH_STMT_TITLE']);
	this.appendValueInput('SW_RULE_CLAUSE_ELEMENT').setCheck([ 'Statement', 'Builtin' ]);
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setTooltip(Blockly.Msg['SW_RULE_CLAUSE_CREATE_WITH_ELEMENT_TOOLTIP']);
    this.contextMenu = false;
  }
};

// Blockly.Blocks['sw_rule_builtin_create_with'] = {
  // /**
   // * Block for creating a rule builtin with any number of arguments.
   // * @this {Blockly.Block}
   // */
  // init: function() {
    // this.setHelpUrl(Blockly.Msg['SW_RULE_BUILTIN_CREATE_WITH_HELPURL']);
    // // this.setStyle('list_blocks');
	// this.setColour('#DD7F7F');
    // this.itemCount_ = 2;
    // this.updateShape_();
	// this.appendDummyInput()
        // // .appendField('type:')
        // .appendField(new Blockly.FieldDropdown([
			// ['a = b', 'equal'],
			// ['a ≠ b', 'notEqual'],
            // ['a < b', 'lessThan'],
            // ['a <= b', 'le'],
			// ['a > b', 'greaterThan'],
			// ['a + b', 'sum'],
			// ['a - b', 'difference'],
			// ['a / b', 'quotient'],
			// ['a x b', 'product'],
			// ['min(a, b)', 'min'],
			// ['max(a, b)', 'max']
        // ]), 'BUILTIN_NAME');
	// this.setInputsInline(false);
    // this.setOutput(true, 'Builtin');
    // this.setMutator(new Blockly.Mutator(['sw_rule_builtin_create_with_element']));
    // this.setTooltip(Blockly.Msg['SW_RULE_BUILTIN_CREATE_WITH_TOOLTIP']);
  // },
  // /**
   // * Create XML to represent builtin inputs.
   // * @return {!Element} XML storage element.
   // * @this {Blockly.Block}
   // */
  // mutationToDom: function() {
    // var container = Blockly.utils.xml.createElement('mutation');
    // container.setAttribute('items', this.itemCount_);
    // return container;
  // },
  // /**
   // * Parse XML to restore the builtin statements.
   // * @param {!Element} xmlElement XML storage element.
   // * @this {Blockly.Block}
   // */
  // domToMutation: function(xmlElement) {
    // this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    // this.updateShape_();
  // },
  // /**
   // * Populate the mutator's dialog with this block's components.
   // * @param {!Blockly.Workspace} workspace Mutator's workspace.
   // * @return {!Blockly.Block} Root block in mutator.
   // * @this {Blockly.Block}
   // */
  // decompose: function(workspace) {
    // var containerBlock = workspace.newBlock('sw_rule_builtin_create_with_container');
    // containerBlock.initSvg();
    // var connection = containerBlock.getInput('STACK').connection;
    // for (var i = 0; i < this.itemCount_; i++) {
      // var itemBlock = workspace.newBlock('sw_rule_builtin_create_with_element');
      // itemBlock.initSvg();
      // connection.connect(itemBlock.previousConnection);
      // connection = itemBlock.nextConnection;
    // }
    // return containerBlock;
  // },
  // /**
   // * Reconfigure this block based on the mutator dialog's components.
   // * @param {!Blockly.Block} containerBlock Root block in mutator.
   // * @this {Blockly.Block}
   // */
  // compose: function(containerBlock) {
    // var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // // Count number of inputs.
    // var connections = [];
    // while (itemBlock) {
      // connections.push(itemBlock.valueConnection_);
      // itemBlock = itemBlock.nextConnection &&
          // itemBlock.nextConnection.targetBlock();
    // }
    // // Disconnect any children that don't belong.
    // for (var i = 0; i < this.itemCount_; i++) {
      // var connection = this.getInput('ADD' + i).connection.targetConnection;
      // if (connection && connections.indexOf(connection) == -1) {
        // connection.disconnect();
      // }
    // }
    // this.itemCount_ = connections.length;
    // this.updateShape_();
    // // Reconnect any child blocks.
    // for (var i = 0; i < this.itemCount_; i++) {
      // Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    // }
  // },
  // /**
   // * Store pointers to any connected child blocks.
   // * @param {!Blockly.Block} containerBlock Root block in mutator.
   // * @this {Blockly.Block}
   // */
  // saveConnections: function(containerBlock) {
    // var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // var i = 0;
    // while (itemBlock) {
      // var input = this.getInput('ADD' + i);
      // itemBlock.valueConnection_ = input && input.connection.targetConnection;
      // i++;
      // itemBlock = itemBlock.nextConnection &&
          // itemBlock.nextConnection.targetBlock();
    // }
  // },
  // /**
   // * Modify this block to have the correct number of inputs.
   // * @private
   // * @this {Blockly.Block}
   // */
  // updateShape_: function() {
    // if (this.itemCount_ && this.getInput('EMPTY')) {
      // this.removeInput('EMPTY');
    // } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      // this.appendDummyInput('EMPTY')
          // .appendField(Blockly.Msg['SW_RULE_BUILTIN_CREATE_EMPTY_TITLE']);
    // }
    // // Add new inputs.
    // for (var i = 0; i < this.itemCount_; i++) {
      // if (!this.getInput('ADD' + i)) {
        // // var input = this.appendValueInput('ADD' + i).setAlign(Blockly.ALIGN_RIGHT);
		// var input = this.appendValueInput('ADD' + i).setAlign(Blockly.ALIGN_RIGHT).setCheck([ 'SW_TERM', 'String', 'Number' ]);
        // if (i == 0) {
          // // input.appendField(Blockly.Msg['SW_RULE_BUILTIN_CREATE_WITH']);
		  // input.appendField("Builtin");
        // }
      // }
    // }
    // // Remove deleted inputs.
    // while (this.getInput('ADD' + i)) {
      // this.removeInput('ADD' + i);
      // i++;
    // }
  // }
// };

// Blockly.Blocks['sw_rule_builtin_create_with_container'] = {
  // /**
   // * Mutator block for builtin container.
   // * @this {Blockly.Block}
   // */
  // init: function() {
    // this.setStyle('list_blocks');
    // // this.appendDummyInput()
        // // .appendField(Blockly.Msg['SW_RULE_BUILTIN_CREATE_WITH_CONTAINER_TITLE_ADD']);
	// this.appendValueInput('SW_RULE_BUILTIN_ELEMENT').setCheck([ 'SW_TERM', 'String', 'Number' ]);
    // this.appendStatementInput('STACK');
    // this.setTooltip(Blockly.Msg['SW_RULE_BUILTIN_CREATE_WITH_CONTAINER_TOOLTIP']);
    // this.contextMenu = false;
  // }
// };

// Blockly.Blocks['sw_rule_builtin_create_with_element'] = {
  // /**
   // * Mutator block for adding statements.
   // * @this {Blockly.Block}
   // */
  // init: function() {
    // this.setStyle('list_blocks');
    // // this.appendDummyInput()
       // // .appendField(Blockly.Msg['SW_RULE_BUILTIN_CREATE_WITH_ELEMENT_TITLE']);
	// this.appendValueInput('SW_RULE_BUILTIN_ELEMENT').setCheck([ 'SW_TERM', 'String', 'Number' ]);
	// this.setPreviousStatement(true);
    // this.setNextStatement(true);
	// this.setTooltip(Blockly.Msg['SW_RULE_BUILTIN_CREATE_WITH_ELEMENT_TOOLTIP']);
    // this.contextMenu = false;
  // }
// };