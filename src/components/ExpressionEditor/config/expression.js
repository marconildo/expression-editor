var tokens = [['{', '}'], ['[', ']'], ['(', ')']];

const isOpenParenthesis = (parenthesisChar) => {
    for (var j = 0; j < tokens.length; j++) {
        if (tokens[j][0] === parenthesisChar) {
            return true;
        }
    }
    return false;
}

const matches = (topOfStack, closedParenthesis) => {
    for (var k = 0; k < tokens.length; k++) {
        if (tokens[k][0] === topOfStack && tokens[k][1] === closedParenthesis) {
            return true;
        }
    }
    return false;
}

const isParanthesis = (char) => {
    var str = '{}[]()';
    if (str.indexOf(char) > -1) {
        return true;
    } else {
        return false;
    }
}

export const expressionIsBalanced = (inputStr) => {
    if (inputStr === null)
        return true;

    if(Array.isArray(inputStr)) {
        let newStr = "";
        inputStr.forEach(i => {
            newStr += i
        });
        inputStr = newStr;
    }

    var expression = inputStr.split('');
    var stack = [];

    for (var i = 0; i < expression.length; i++) {
        if (isParanthesis(expression[i])) {
            if (isOpenParenthesis(expression[i])) {
                stack.push(expression[i]);
            } else {
                if (stack.length === 0) {
                    return false;
                }
                var top = stack.pop();
                if (!matches(top, expression[i])) {
                    return false;
                }
            }
        }
    }

    var returnValue = stack.length === 0 ? true : false;
    return returnValue;
}