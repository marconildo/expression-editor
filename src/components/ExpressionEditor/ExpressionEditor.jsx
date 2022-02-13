import React, { Fragment, useEffect, useRef, useState } from 'react';
import { initEditor, getDocumentation } from "./config/editorConfig";
import _ from "lodash";

import { SearchOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Input, Tree, Space, Button, Divider, List, Empty } from 'antd';
import { functions } from "./config/listFunctions";

const { Content, Footer } = Layout;

const ExpressionEditor = () => {
    const [seletedFunctionType, setSeletedFunctionType] = useState(null);
    const [searchName, setSearchName] = useState(null);
    const [data, setData] = useState([]);
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
        if (info.node.selected || info.node.title == "All")
            setSeletedFunctionType(null);
        else
            setSeletedFunctionType(info.node);
    };

    const getItemName = (item) => {
        let itemName = item.name;

        if (item.kind == "Function") {
            itemName += "(";

            var params = item.parametersDescription.map(e => {
                return e;
            });

            itemName += params.join(', ')

            itemName += ")";
        }

        return itemName;
    }

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
                    <Col span={9} style={{ paddingLeft: "15px" }}>
                        <div style={{ height: "100%" }} className="whiteBox shadow">
                            <div>
                                <h3 style={{ color: "#22075e", marginBottom: 0 }}>Expression values</h3>
                            </div>
                            <Divider style={{ padding: 10, margin: 0 }}></Divider>
                            <Row>
                                <Col span={12}>
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
                                            size="small"
                                            renderItem={item => (
                                                <List.Item
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => console.log(item.name)}>

                                                    <span className='func-display'>
                                                        <div className={'func-type ' + getIconType(item.returnType)} />
                                                        {getItemName(item)}
                                                    </span>

                                                </List.Item>
                                            )}>
                                        </List>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={9} style={{ paddingLeft: "15px" }}>
                        <div style={{ height: "100%" }} className="whiteBox shadow">
                            <div>
                                <h3 style={{ color: "#22075e", marginBottom: 0 }}>Description</h3>
                            </div>
                            <Divider style={{ padding: 10, margin: 0 }}></Divider>
                            <div className='empty-description'>
                                <Empty
                                    image={<i style={{ color: "lightgray" }} className="fa-thin fa-function" />}
                                    description="No expression elements selected" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Expression Editor ©{(new Date()).getFullYear()}</Footer>
        </Layout>
    </Fragment>
}

export default ExpressionEditor;