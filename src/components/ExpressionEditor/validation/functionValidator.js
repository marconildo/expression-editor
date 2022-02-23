
export default class FunctionValidator {
    constructor(
        name,
        requiredParameters,
        inputTypes,
        returnType
    ) {
        this.name = name;
        this.requiredParameters = requiredParameters;
        this.inputTypes = inputTypes;
        this.returnType = returnType;
    }

    validate() {

    }

    getValidationRules() {

    }

    minimumRequiredNumberOfArguments() {
        return this.requiredParameters === 0 ? this.inputTypes.length : this.requiredParameters;
    }

    maximumNumberOfArguments() {
        return this.inputTypes.length;
    }
}


//(e.SUM_DISTINCT_IF = new s.a("sumDistinctIf", "math", !1, { outputFilter: e.MATH_FORCE_LONG_OR_DOUBLE_IF, precisionAddition: 10, scaleAddition: 0 })),