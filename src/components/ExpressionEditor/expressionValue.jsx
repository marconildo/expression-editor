import React, { Fragment } from "react";

const ExpressionValue = ({ item }) => {

    const getIconType = (type) => {
        let iconType = "svg-any";

        switch (type) {
            case "integer":
            case "decimal(10,0)":
            case "long":
            case "double":
            case "number":
                iconType = "svg-int";
                break;
            case "boolean":
                iconType = "svg-bool";
                break;
            case "string":
                iconType = "svg-string";
                break;
            case "binary":
                iconType = "svg-binary";
                break;
            case "array":
                iconType = "svg-array";
                break;
            case "map":
                iconType = "svg-map";
                break;
            case "datetime":
                iconType = "svg-date";
                break;
            case "timestamp":
                iconType = "svg-timestamp";
                break;
            case "complex":
                iconType = "svg-struct";
                break;
            case "byte":
                iconType = "svg-byte";
                break;
        }

        return iconType;
    }

    const getFunctionArguments = () => {
        const args = ["("];

        if (item.parametersDescription.length > 0) {
            item.parametersDescription.forEach((e, i) => {
                args.push(<div key={`expression_0_${i}`} style={{marginLeft: i == 0 ? 0 : 3, marginRight: 0}} className={'func-type ' + getIconType(item.inputTypes[i])} />);
                args.push(<label key={`expression_1_${i}`} className="func-name">{e}</label>);

                if (i < (item.parametersDescription.length - 1))
                    args.push(", ");
            })
        }
        else {
            item.inputTypes.forEach((e, i) => {
                args.push(<div key={`expression_3_${i}`} style={{marginLeft: i == 0 ? 0 : 3, marginRight: 0}} className={'func-type ' + getIconType(e)} />);
                args.push(<label key={`expression_4_${i}`} className="func-name">{e}</label>);

                if (i < (item.inputTypes.length - 1))
                    args.push(", ");
            })
        }

        args.push(")");

        return args;
    }

    return <Fragment>
        <span className='func-display'>
            <div className={'func-type ' + getIconType(item.returnType)} />
            {item.name}
            {item.kind == "function" && getFunctionArguments()}
        </span>
    </Fragment>
}

export default ExpressionValue