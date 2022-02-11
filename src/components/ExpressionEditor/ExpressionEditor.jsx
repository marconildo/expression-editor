import React, { Fragment, useEffect, useState } from 'react';
import { initEditor } from "./config/editorConfig";

import { SmileOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Input, Tree, Space, Button, Divider } from 'antd';

const { Content, Footer } = Layout;
const { Search } = Input;

const ExpressionEditor = () => {
    const [treeData] = useState([
        {
            title: 'All',
            key: '0-0',
            icon: <i class="fa-thin fa-ballot" />
        },
        {
            title: 'Parameters',
            key: '1-0',
            icon: <i class="fa-light fa-database" />
        },
        {
            title: 'Functions',
            icon: <i class="fa-thin fa-function" />,
            key: '2-0',
            children: [
                { title: 'Aggregate', key: '2-1-0', isLeaf: true, icon: <i class="fa-duotone fa-arrows-minimize" /> },
                { title: 'Text', key: '2-2-0', isLeaf: true, icon: <i class="fa-duotone fa-text-size" /> },
                { title: 'Datetime', key: '2-3-0', isLeaf: true, icon: <i class="fa-light fa-calendar" /> },
                { title: 'Math', key: '2-4-0', isLeaf: true, icon: <i class="fa-light fa-calculator" /> },
                { title: 'Conversions', key: '2-5-0', isLeaf: true, icon: <i class="fa-duotone fa-arrows-retweet" /> },
                { title: 'Logical operators', key: '2-6-0', isLeaf: true, icon: <i class="fa-duotone fa-binary" /> },
            ]
        }
    ]);


    useEffect(() => {
        initEditor("expression-editor");
    }, [])
    return <Fragment>
        <Layout style={{ height: "100vh" }}>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, overflow: 'initial' }}>
                <Row>
                    <Col span={24}>
                        <div className="whiteBox shadow">
                            <div id="expression-editor" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} style={{ margin: "10px 0 10px 0px" }}>
                        <Space>
                            <Button className="btn-operations">+</Button>
                            <Button className="btn-operations">-</Button>
                            <Button className="btn-operations">*</Button>
                            <Button className="btn-operations">/</Button>
                            <Button className="btn-operations">{"| |"}</Button>
                            <Button className="btn-operations">{"&&"}</Button>
                            <Button className="btn-operations">!</Button>
                            <Button className="btn-operations">^</Button>
                            <Button className="btn-operations">==</Button>
                            <Button className="btn-operations">!=</Button>
                            <Button className="btn-operations">{">"}</Button>
                            <Button className="btn-operations">{"<"}</Button>
                            <Button className="btn-operations">{">="}</Button>
                            <Button className="btn-operations">{"<="}</Button>
                            <Button className="btn-operations">{"[ ]"}</Button>
                        </Space>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <div className="whiteBox shadow">
                            <div>
                                <h3 style={{ color: "#22075e", marginBottom: 0 }}>Expression elements</h3>
                            </div>
                            <Divider style={{ paddingBottom: 10, margin: 0 }}></Divider>
                            <Tree
                                showIcon
                                defaultExpandedKeys={['2-0']}
                                defaultSelectedKeys={['0-0']}
                                style={{ minwidth: 200 }}
                                treeData={treeData} />
                        </div>
                    </Col>
                    <Col span={18} style={{ paddingLeft: "15px" }}>
                        <div style={{ height: "100%" }} className="whiteBox shadow">
                            <div>
                                <h3 style={{ color: "#22075e", marginBottom: 0 }}>Expression values</h3>
                            </div>
                            <Divider style={{ padding: 10, margin: 0 }}></Divider>
                            <Row>
                                <Col span={6}>
                                    <Search placeholder="filter by keyword" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Expression Editor ©{(new Date()).getFullYear()}</Footer>
        </Layout>
    </Fragment>
}

export default ExpressionEditor;