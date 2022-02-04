import React, { Fragment } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { options, initEditor } from './config/editorConfig';

const ExpressionEditor = () => {

    const editorDidMount = (editor, monaco) => initEditor(editor, monaco);
    
    return <Fragment>
        <Editor
            options={options}
            language='expression-buider'
            theme='expression-buider-theme'
            onMount={editorDidMount}
            height="40vh"
            suggestOnTriggerCharacters={true} />
    </Fragment>
}

export default ExpressionEditor;