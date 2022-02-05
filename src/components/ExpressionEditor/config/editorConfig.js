import { functions, dataTypeStrings } from "./listFunctions";
import loader from "@monaco-editor/loader";

const nameEditor = 'expression-buider';

const options = {
    //lineNumbers: false,
    // scrollBeyondLastLine: false,
    readOnly: false,
    fontSize: 12,
}
export const initEditor = (divEditor) => {
    loader.init().then((monaco) => {
        const wrapper = document.getElementById(divEditor);
        wrapper.style.height = "40vh";

        const properties = {
            language: nameEditor,
            theme: "expression-buider-theme",
            "semanticHighlighting.enabled": true
        };
        if (!monaco.languages.getLanguages().some(({ id }) => id === nameEditor)) {
            monaco.languages.register({ id: nameEditor });
            providerMonarchTokens(monaco);
            providerCompletionDef(monaco);
            providerHoverDef(monaco);
            providerSignatureHelp(monaco);
            providerCodeActions(monaco);
            providerDefineTheme(monaco);
            providerDocumentSemanticTokens(monaco);

            monaco.editor.create(wrapper, properties);
        }
    });
}

const providerDefineTheme = (monaco) => {
    monaco.editor.defineTheme("expression-buider-theme", {
        base: 'vs',
        inherit: false,
        semanticHighlighting: true,
        rules: [
            { token: 'comment', foreground: 'aaaaaa', fontStyle: 'italic' },
            { token: 'keyword', foreground: '0000ff' },
            { token: 'CTY_REGISTRATION_ENTERPRISE_SCORE', foreground: '1db010' },
        ]
    });
}
const providerDocumentSemanticTokens = (monaco) => {
    monaco.languages.registerDocumentSemanticTokensProvider(nameEditor, {
        getLegend: () => ({
            tokenTypes: functions.map(i => i.name),
            tokenModifiers: ["CTY_REGISTRATION_ENTERPRISE_SCORE"]
        }),
        provideDocumentSemanticTokens: (model, lastResultId, token) => {
            const lines = model.getLinesContent();
            console.log("asda", lines);

            const data = [];
            let prevLine = 0;
            let prevChar = 0;

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];

                console.log("asda", lines);
            }

            return {
                data: new Uint32Array(data),
                resultId: null
            };
        },
        releaseDocumentSemanticTokens: (resultId) => { }
    });
}

const providerMonarchTokens = (monaco) => {
    monaco.languages.setMonarchTokensProvider(nameEditor, {
        defaultToken: "",
        keywords: functions.map(i => i.name),
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        operators: [
            '>', '<', '!', '==', '<=', '>=', '!=', '&&', '||', '+', '-', '*', '/', '^'
        ],
        tokenModifiers: ["CTY_REGISTRATION_ENTERPRISE_SCORE"],
        tokenizer: {
            root: [
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@keywords': 'keyword'
                    }
                }],
                // whitespace
                { include: '@whitespace' },

                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],

                // numbers
                [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                [/\d+/, 'number'],

                // delimiters and operators
                [/[{}()\[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, {
                    cases: {
                        '@operators': 'operator',
                        '@default': ''
                    }
                }],
            ],
            comment: [
                [/[^\/*]+/, 'comment'],
                [/\/\*/, 'comment', '@push'],
                ["\\*/", 'comment', '@pop'],
                [/[\/*]/, 'comment']
            ],
            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
            ],
        }
    });
}

const providerCodeActions = (monaco) => {
    monaco.languages.registerCodeActionProvider(nameEditor, {
        provideCodeActions: (model, range, context, token) => {
            let actions = [];
            console.log("actions", actions);
            return {
                actions: actions,
                dispose: () => { }
            }
        }
    });
}

const providerHoverDef = (monaco) => {
    monaco.languages.registerHoverProvider(nameEditor, {
        provideHover: (model, position) => {
            var hoverWord = model.getWordAtPosition(position);
            if (!hoverWord || !hoverWord.word)
                return;
            var item = functions.find(p => p.name == hoverWord.word);
            if (item == null || item == undefined)
                return;

            const params = item.parametersDescription.length ? item.parametersDescription.map((e, t) => `${e}: ${item.inputTypes[t]}`) : item.inputTypes;
            return {
                range: new monaco.Range(
                    1,
                    1,
                    model.getLineCount(),
                    model.getLineMaxColumn(model.getLineCount())
                ),
                contents: [
                    { value: "**" + hoverWord.word + "(" + params.join(", ") + ") => " + item.returnType + "**" },
                    { value: getDescription(item) }
                ]
            }
        }
    });
}

const providerCompletionDef = (monaco) => {
    monaco.languages.registerCompletionItemProvider(nameEditor, {
        provideCompletionItems: (model, position) => {
            var word = model.getWordUntilPosition(position);
            var range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            var suggestions = functions.map(item => {
                return {
                    label: item.name,
                    kind: getKind(item.kind, monaco),
                    insertText: getInsertText(item),
                    detail: getDetail(item),
                    documentation: getDescription(item),
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    range: range
                }
            });

            return { suggestions: suggestions };
        }
    });
};

/* \w+\(((?:\([^()]*\)|.)*?)\)(?=\.|\Z|$) */

// const providerValidation = (monaco) => {
//     console.log("teste f");
//     monaco.editor.onDidCreateModel((model) => {
//         const validate = () => {
//             console.log("teste");
//         }

//         var handle = null;
//         model.onDidChangeContent(() => {
//             clearTimeout(handle);
//             handle = setTimeout(() => validate(), 500);
//         });
//         validate();
//         console.log("teste s");
//     });
// }

const providerSignatureHelp = (monaco) => {
    monaco.languages.registerSignatureHelpProvider(nameEditor, {
        signatureHelpTriggerCharacters: ['(', ','],
        provideSignatureHelp: (model, position, token) => {

            var textUntilPosition = model.getValueInRange({
                startLineNumber: position.lineNumber,
                startColumn: 1,
                endLineNumber: position.lineNumber,
                endColumn: position.column
            });

            let currentActiveParameter = 0;
            let currentActiveSignature = 0;
            let currentSignatures = [];

            if (textUntilPosition.indexOf("(") != -1) {
                var split = textUntilPosition.match(/([a-zA-Z_{1}][a-zA-Z0-9_]+)(?=\()/g);
                if (split.length > 0) {
                    var item = getLastKeywordValid(split);
                    if (item != null) {
                        const params = item.parametersDescription.length ? item.parametersDescription.map((e, t) => `${item.inputTypes[t]}`) : item.inputTypes;
                        const signatureParams = params.map((p, t) => `${p} $${dataTypeStrings[p]}_${t + 1}`)
                        currentSignatures = [
                            {
                                label: `${item.returnType} ${item.name}(${signatureParams.join(", ")})`,
                                parameters: signatureParams.map((p, t) => {
                                    var detail = item.parametersDescription[t];
                                    return {
                                        label: p,
                                        documentation: detail || p
                                    };
                                })
                            }
                        ];

                        currentActiveParameter = getActiveParameter(textUntilPosition, item.name);
                    }
                }
            }

            return {
                dispose: () => { },
                value: {
                    activeParameter: currentActiveParameter,
                    activeSignature: currentActiveSignature,
                    signatures: currentSignatures
                }
            };
        }
    });
}

const getLastKeywordValid = (split) => {
    if (split.length == 0)
        return null;

    let validItem = null;

    for (let i = split.length; i > 0; i--) {
        var keyword = split[i - 1];
        if (keyword.indexOf(",") == -1) {
            var item = functions.find(p => p.name == keyword.trim());
            if (item != null) {
                validItem = item;
                break;
            }
        }
        else {
            var split2 = keyword.split(",");
            var item2 = getLastKeywordValid(split2);
            if (item2 != null) {
                validItem = item2;
                break;
            }
        }
    }

    return validItem;
}

const getActiveParameter = (textUntilPosition, keyword) => {
    var splitKeyword = textUntilPosition.split(keyword);
    if (splitKeyword && splitKeyword.length > 0)
        return (splitKeyword.pop().toString().match(/,/g) || []).length;
    return 0;
}

const getKind = (kind, monaco) => {
    if (kind === "Function")
        return monaco.languages.CompletionItemKind.Function;

    return monaco.languages.CompletionItemKind.Text;
}

const getInsertText = (value) => {
    const params = value.parametersToAutoComplete.map((item, i) => decorateArgumentText(item, !0, i + 1));
    return params.length ? `${value.name}(${params.join(", ")})` : `${value.name}${getArguments(value)}`;
}

const getDetail = (item) => {
    const params = item.parametersDescription.length ? item.parametersDescription.map((e, t) => `${e}: ${item.inputTypes[t]}`) : item.inputTypes;
    return `(${params.join(", ")}) => ${item.returnType}`
}

const getDescription = (item) => {
    let examples = ""
    if (item.examples.length > 0) {
        examples += "Examples";
        for (let t = 0; t < item.examples.length; t += 2) {
            examples = `${examples}\n${Math.round(t / 2) + 1}. ${item.examples[t]}${item.examples[t + 1] ? " -> " + item.examples[t + 1] : ""}`;
        }
    }
    return `${item.description}\n\n\n${examples}`;
}

const decorateArgumentText = (e, t, n) => { return t ? `\${${n}:${e}}` : e }

const getArguments = (item) => {
    if (0 === item.inputTypes.length)
        return "()";
    if (1 === item.inputTypes.length)
        return `(${decorateArgumentText(dataTypeStrings[item.inputTypes[0]], item, 1)})`;

    let t = "(";
    const n = new Map(), i = [];
    item.inputTypes.forEach((t, o) => {
        n.has(t) ? n.set(t, n.get(t) + 1) : n.set(t, 1);
        const r = dataTypeStrings[t],
            a = 1 === n.get(t) ? "first" : 2 === n.get(t) ? "second" : "third";
        i.push(decorateArgumentText(`${a}_${r}`, item, o + 1))
    })
    t += i.join(", ");
    t += ")";

    Array.from(n.keys()).filter(e => 1 === n.get(e)).forEach(e => {
        const n = dataTypeStrings[e];
        t = t.replace("first_" + n, n)
    });

    return t
}