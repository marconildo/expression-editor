import { Messages } from "../config/messages";
import { Jsep, this_str } from 'jsep';
import { functions } from "../config/listFunctions";
import FunctionValidator from './functionValidator';

const nameEditor = 'expression-buider';

export class ExpressionValidator {
    constructor() {
        this.inst = null;
        this._editor = null;
        this._model = null;
        this._modelMarkers = [];
    }

    static getInst() {
        if (!this.inst)
            this.inst = new ExpressionValidator()
        return this.inst
    }

    validate(editor) {
        this._editor = editor;
        if (!window.currentEditor)
            return;
        this._modelMarkers = [];
        try {
            const parse_tree = Jsep.parse(window.currentEditor.getValue());
            console.log("parse", parse_tree);
            this.validateTree(parse_tree);
        }
        catch (e) {
            const model = this.getCurrentModel();
            this.addMarkerBase(
                0, 0, model.getLineCount(), model.getLineMaxColumn(model.getLineCount()), e.message, true
            );
        }
        window.currentMonaco.editor.setModelMarkers(this.getCurrentModel(), nameEditor, this._modelMarkers);
    }

    validateTree(tree) {
        switch (tree.type) {
            case "Identifier":
                this.validateIdentifier(tree);
                break;
            case "CallExpression":
                break;
        }
    }

    validateIdentifier(tree) {
        if (this.findFunction(tree.name) != null) {
            const position = this.getPositionRange(tree.name);
            this.addMarker(position, Messages.EditorErrorColumnNotFound.message,Messages.EditorErrorColumnNotFound.code);
        }
    }

    validateIdentifier(tree) {
        var item = this.findFunction(tree.name);
        if (item != null) {
            var validator = new FunctionValidator(
                item.name,
                item.requiredParameters,
                item.inputTypes,
                item.returnType
            );
            var validationResult = validator.validate();
            if(validationResult && !validationResult.isValid) {
                
            }
        }
    }

    getCurrentModel() {
        if (!this._model)
            this._model = this._editor.getModels()[0];
        return this._model;
    }

    addMarker(position, message, code = null, isError = true) {
        this.addMarkerBase(
            position.startLineNumber,
            position.startColumn,
            position.endLineNumber,
            position.endColumn,
            message,
            code,
            isError
        );
    }

    addMarkerBase(
        initLine = 0,
        initColumn = 0,
        endLine = 0,
        endColumn = 0,
        message,
        code,
        isError = false) {
        this._modelMarkers.push({
            severity: !isError ? window.currentMonaco.MarkerSeverity.Warning : window.currentMonaco.MarkerSeverity.Error,
            message: `${message}`,
            startLineNumber: initLine,
            startColumn: initColumn,
            endLineNumber: endLine,
            endColumn: endColumn,
            relatedInformation: code
        });
    }

    getPositionRange(word) {
        const matches = this.getCurrentModel().findMatches(word, true, false, false, null, true);
        if (matches.length > 0)
            return matches[0].range;
        return false;
    }

    findFunction(e) {
        return functions.find((t) => t.name === e || t.synonyms.includes(e));
    }
}