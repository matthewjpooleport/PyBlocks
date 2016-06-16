/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Variable blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.python');

goog.require('Blockly.Blocks');

Blockly.Blocks['python_intvar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myint"), "NAME");
    this.setOutput(true);
    this.setTypeVecs([["int"]]);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_assign_intvar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myint"), "LHS");
    this.appendValueInput("RHS")
        .setCheck(["int"])
        .appendField(" = ");
    this.appendDummyInput()
        .appendField(" ");
    this.setInputsInline(true);
    this.setTypeVecs([
      ["int", "none"]
    ]);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_floatvar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myfloat"), "NAME");
    this.setOutput(true);
    this.setTypeVecs([["float"]]);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_assign_floatvar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("myfloat"), "LHS");
    this.appendValueInput("RHS")
        .setCheck(["float"])
        .appendField(" = ");
    this.appendDummyInput()
        .appendField(" ");
    this.setTypeVecs([
      ["float", "none"]
    ]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_assign_float_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("rainfall"), "LHS");
    this.appendValueInput("RHS")
        .appendField(" = ");
    this.appendDummyInput()
        .appendField(" ");
    this.setTypeVecs([
      ["*float", "none"]
    ]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_assign_float_list_index'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("rainfall"), "VAR");
    this.appendValueInput("INDEX")
        .appendField("[");
    this.appendValueInput()
        .appendField("] = ");
    this.setTypeVecs([
      ["int", "float", "none"]
    ]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['python_float_list_append'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("rainfall"), "VAR");
    this.appendValueInput("ARG")
        .appendField(".append(");
    this.appendDummyInput()
        .appendField(")");
    this.setTypeVecs([
      ["float", "none"]
    ]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
