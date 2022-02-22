import { Messages } from "../config/messages";
import { Jsep, this_str } from 'jsep';

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
        try {
            const parse_tree = Jsep.parse(window.currentEditor.getValue());
            console.log(parse_tree);
            this._modelMarkers = [];
        }
        catch (e) {
            const model = this.getCurrentModel();
            this.addMarkerBase(
                0, 0, model.getLineCount(), model.getLineMaxColumn(model.getLineCount()), e.message, true
            );
        }
        window.currentMonaco.editor.setModelMarkers(this.getCurrentModel(), nameEditor, this._modelMarkers);
    }

    getCurrentModel() {
        if (!this._model)
            this._model = this._editor.getModels()[0];
        return this._model;
    }

    addMarkerBase(
        initLine = 0,
        initColumn = 0,
        endLine = 0,
        endColumn = 0,
        message,
        isError = false) {
        this._modelMarkers.push({
            severity: !isError ? window.currentMonaco.MarkerSeverity.Warning : window.currentMonaco.MarkerSeverity.Error,
            message: message,
            startLineNumber: initLine,
            startColumn: initColumn + 1,
            endLineNumber: endLine,
            endColumn: endColumn + 2
        });
    }
}