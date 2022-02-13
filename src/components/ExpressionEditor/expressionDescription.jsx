import React, { Fragment } from "react";

import { Empty, Divider, Typography } from 'antd';

const { Text } = Typography;

const ExpressionDescription = ({ item }) => {

    return <Fragment>
        {item == null &&
            <div className='empty-description'>
                <Empty
                    image={<i style={{ color: "lightgray" }} className="fa-thin fa-function" />}
                    description="No expression elements selected" />
            </div>
        }
        {item != null &&
            <div>
                <div>
                    <strong>{item.name}</strong> {item.kind} : datatype <Text code>{item.returnType}</Text>
                </div>
                <Divider style={{ paddingTop: 0, margin: 0 }} />
                <div>{item.description}</div>
                {item.inputTypes && item.inputTypes.length > 0 &&
                    <Fragment>
                        <div style={{ marginTop: 5 }}><strong>Inputs</strong></div>
                        <Divider style={{ paddingTop: 0, margin: 0 }} />
                        <div></div>
                    </Fragment>
                }
                {item.examples && item.examples.length > 0 &&
                    <Fragment>
                        <div style={{ marginTop: 5 }}><strong>Examples</strong></div>
                        <Divider style={{ paddingTop: 0, margin: 0 }} />
                        {
                            item.examples.map(e => {
                                return <Fragment>
                                    <Text code>{e}</Text>
                                    <br />
                                </Fragment>
                            })
                        }
                    </Fragment>
                }
            </div>
        }
    </Fragment>

}

export default ExpressionDescription;
