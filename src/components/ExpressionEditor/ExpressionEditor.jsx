import React, { Fragment, useEffect, useState } from 'react';
import { initEditor, insertItemValue } from "./config/editorConfig";
import _ from "lodash";

import { SearchOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Input, Tree, Space, Button, Divider, List } from 'antd';
import { functions } from "./config/listFunctions";
import ExpressionValue from './expressionValue'
import ExpressionDescription from './expressionDescription'

const { Content, Footer } = Layout;

const ExpressionEditor = () => {
    const [seletedFunctionType, setSeletedFunctionType] = useState(null);
    const [searchName, setSearchName] = useState(null);
    const [data, setData] = useState([]);
    const [expression, setExpression] = useState(null);
    const [treeData] = useState([
        {
            title: 'All',
            key: '0-0',
            icon: <i className="fa-thin fa-ballot" />
        },
        {
            title: 'Parameters',
            key: '1-0',
            icon: <i className="fa-light fa-database" />
        },
        {
            title: 'Functions',
            icon: <i className="fa-thin fa-function" />,
            key: '2-0',
            children: [
                { title: 'Aggregate', key: '2-1-0', isLeaf: true, icon: <i className="fa-duotone fa-arrows-minimize" /> },
                { title: 'Text', key: '2-2-0', isLeaf: true, icon: <i className="fa-duotone fa-text-size" /> },
                { title: 'Datetime', key: '2-3-0', isLeaf: true, icon: <i className="fa-light fa-calendar" /> },
                { title: 'Math', key: '2-4-0', isLeaf: true, icon: <i className="fa-light fa-calculator" /> },
                { title: 'Conversions', key: '2-5-0', isLeaf: true, icon: <i className="fa-duotone fa-arrows-retweet" /> },
                { title: 'Logical operators', key: '2-6-0', isLeaf: true, icon: <i className="fa-duotone fa-binary" /> },
            ]
        }
    ]);

    const onSeachInputChange = (e) => {
        setSearchName(e.target.value);
    }

    const onSelectTree = (selectedKeys, info) => {
        setExpression(null);
        if (info.node.selected || info.node.title == "All")
            setSeletedFunctionType(null);
        else
            setSeletedFunctionType(info.node);
    };

    const onItemEnter = (item) => {
        setExpression(item);
    }

    const onItemOut = () => {
        setExpression(null);
    }

    const onSelectedItem = (item) => {
        setExpression(null);
        insertItemValue(item);
    }

    const loadData = () => {
        setData(_.orderBy(functions.filter(i => (seletedFunctionType == null || i.functionType == seletedFunctionType.title)
            && (searchName == null || i.name.toLowerCase().indexOf(searchName.toLowerCase()) != -1)
        ), 'name'));
    }

    useEffect(() => {
        loadData();
    }, [searchName])

    useEffect(() => {
        loadData();
    }, [seletedFunctionType])


    useEffect(() => {
        loadData();
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
                    <Col span={24} style={{ margin: "10px 0 10px 0px" }}>
                        <Space wrap>
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
                                onSelect={onSelectTree}
                                defaultExpandedKeys={['2-0']}
                                defaultSelectedKeys={['0-0']}
                                style={{ minwidth: 200 }}
                                treeData={treeData} />
                        </div>
                    </Col>
                    <Col span={8} style={{ paddingLeft: "15px" }}>
                        <div style={{ height: "100%" }} className="whiteBox shadow">
                            <div>
                                <h3 style={{ color: "#22075e", marginBottom: 0 }}>Expression values</h3>
                            </div>
                            <Divider style={{ padding: 10, margin: 0 }}></Divider>
                            <Row>
                                <Col span={20}>
                                    <Input
                                        allowClear={true}
                                        onChange={onSeachInputChange}
                                        addonAfter={<SearchOutlined />}
                                        placeholder="filter by keyword" />
                                    <br />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} style={{ paddingTop: 15 }}>
                                    <div style={{ height: "190px", overflowY: "scroll" }}>
                                        <List
                                            dataSource={data}
                                            //onMouseOut={() => onItemOut()}
                                            size="small"
                                            renderItem={item => (
                                                <List.Item
                                                    onMouseOver={() => onItemEnter(item)}
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => onSelectedItem(item)}>
                                                    <ExpressionValue item={item} />
                                                </List.Item>
                                            )}>
                                        </List>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={10} style={{ paddingLeft: "15px" }}>
                        <div style={{ height: "100%" }} className="whiteBox shadow">
                            <div>
                                <h3 style={{ color: "#22075e", marginBottom: 0 }}>Description</h3>
                            </div>
                            <Divider style={{ padding: 10, margin: 0 }}></Divider>
                            <ExpressionDescription item={expression} />
                        </div>
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Expression Editor ©{(new Date()).getFullYear()}</Footer>
        </Layout>
    </Fragment>
}

export default ExpressionEditor;