import React, { Fragment, useEffect } from 'react';
import { initEditor } from "./config/editorConfig";

const ExpressionEditor = () => {

    useEffect(() => {
        initEditor("expression-editor");
    }, [])
    return <Fragment>
        <div id="expression-editor" />
    </Fragment>
}

export default ExpressionEditor;