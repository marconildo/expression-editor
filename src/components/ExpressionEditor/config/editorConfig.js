import { functions, dataTypeStrings } from "./listFunctions";


const nameEditor = 'expression-buider';

export const options = {
    //lineNumbers: false,
    // scrollBeyondLastLine: false,
    readOnly: false,
    fontSize: 12,
}

export const initEditor = (editor, monaco) => {
    if (!monaco.languages.getLanguages().some(({ id }) => id === nameEditor)) {
        monaco.languages.register({ id: nameEditor });
        monaco.languages.setMonarchTokensProvider(nameEditor, languageDef());
        providerCompletionDef(monaco);
        providerHoverDef(monaco);
        providerSignatureHelp(monaco);
    }

    editor.focus();
}

const themeDef = {
    base: 'vs',
    inherit: false,
    rules: [

    ]
}

const languageDef = () => {
    //     operators: [
    //         '>', '<', '!', '==', '<=', '>=', '!=', '&&', '||', '+', '-', '*', '/', '^'
    //     ],

    const names = functions.map(i => i.name);
    return {
        defaultToken: "",
        keywords: names,
        tokenizer: {
            root: [
                [/[a-z_$][\w$]*/, {
                    cases: {
                        '@keywords': 'keyword'
                    }
                }]
            ]
        }
    };
}

const providerHoverDef = (monaco) => {
    monaco.languages.registerHoverProvider('expression-buider', {
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
                var split = removeItemAll(textUntilPosition.split("("), "");
                if (split.length > 0) {
                    var item = getLastKeywordValid(split);
                    if (item != null) {
                        const params = item.parametersDescription.length ? item.parametersDescription.map((e, t) => `${item.inputTypes[t]}`) : item.inputTypes;
                        const signatureParams = params.map((p, t) => `${p} $${dataTypeStrings[p]}_${t + 1}`)
                        currentSignatures = [
                            {
                                label: `${item.returnType} ${item.name}(${signatureParams.join(", ")})`,
                                parameters: signatureParams.map((p,t) => {
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
            var item = getLastKeywordValid(split2);
            if (item != null) {
                validItem = item;
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
    const n = new Map, i = [];
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

const removeItemAll = (arr, value) => {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}