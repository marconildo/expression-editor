import React, { Fragment } from "react";

import { Empty, Divider, Typography, Tag } from 'antd';
import { getDetail } from './config/editorConfig';

const { Text } = Typography;

const ExpressionDescription = ({ item }) => {

    const getExamples = (item) => {
        const examples = [];
        if (item.examples) {
            for (let t = 0; t < item.examples.length; t += 2) {
                examples.push(<Text key={`example_0_${t}`}>{Math.round(t / 2) + 1}.</Text>);
                examples.push(<Text key={`exemple_1_${t}`} code>{item.examples[t]}{item.examples[t + 1] ? " => " + item.examples[t + 1] : ""}</Text>);
                examples.push(<br key={`example_2_${t}`} />);
            }
        }
        return examples;
    }

    const getInputs = (item) => {
        const inputs = []
        if (item.inputTypes) {
            for (let t = 0; t < item.inputTypes.length; t += 1) {
                inputs.push(<Text key={`input_0_${t}`}>{t + 1}.</Text>);
                inputs.push(<Text key={`input_1_${t}`} code>{item.parametersToAutoComplete[t] != null ? item.parametersToAutoComplete[t] : item.inputTypes[t]}: {item.inputTypes[t]}</Text>);
                inputs.push(<br key={`input_2_${t}`} />);
            }
            return inputs;
        }
    }

    return <Fragment>
        {item == null &&
            <div className='empty-description'>
                <Empty
                    image={<i style={{ color: "lightgray" }} className="fa-thin fa-function" />}
                    description="No expression elements selected" />
            </div>
        }
        {item != null &&
            <div style={{ height: "240px", overflowY: "scroll" }}>
                <div>
                    {item.kind == "functions" &&
                        <Tag
                            style={{ "textTransform": "capitalize" }}
                            icon={<i className="fa-thin fa-function" />}
                            color="default"> {item.kind}</Tag>
                    }
                    {item.kind == "Parameters" &&
                        <Tag
                            style={{ "textTransform": "capitalize" }}
                            icon={<i className="fa-light fa-database" />}
                            color="default"> {item.kind}</Tag>
                    }
                    <Text keyboard>{`${item.name}${getDetail(item)}`}</Text>
                </div>
                <Divider style={{ padding: 0, marginTop: 3, marginBottom: 3 }} />
                {item.description &&
                    <div>
                        <Text>{item.description}</Text>
                    </div>
                }
                {item.inputTypes && item.inputTypes.length > 0 &&
                    <div style={{ marginTop: 5 }}>
                        <Text strong style={{ marginTop: 5 }}>Inputs</Text>
                        <Divider style={{ paddingTop: 0, margin: 0 }} />
                        {getInputs(item)}
                    </div>
                }
                {item.examples && item.examples.length > 0 &&
                    <div style={{ marginTop: 5 }}>
                        <Text strong>Examples</Text>
                        <Divider style={{ paddingTop: 0, margin: 0 }} />
                        {getExamples(item)}
                    </div>
                }
            </div>
        }
    </Fragment>

}

export default ExpressionDescription;
