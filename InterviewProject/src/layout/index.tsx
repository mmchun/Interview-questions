import React, { useState, useEffect, } from "react";
import { Breadcrumb, Layout, Menu, } from 'antd';
import MenuData from './../../menuData';
import { connect, history } from "umi";

const { Header, Content, Footer, Sider } = Layout;
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true,
            menuData: MenuData,
            globalName: this.props.global.name
        }
    }
    componentDidMount() {
        sessionStorage.setItem('menuData', JSON.stringify(MenuData))
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.global.name == prevState.globalName) {
            return null
        } else {
            return {
                menuData: JSON.parse(sessionStorage.getItem('menuData'))
            }
        }
    }

    stringEdit = (path) => {
        history.push(path.key.split('.')[1] || '/')
    }

    render() {
        const { collapsed, menuData } = this.state;
        const { location: { pathname } } = this.props;
        return <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => {
                this.setState({
                    ...this.state,
                    collapsed: value,
                })
            }}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu theme="dark" mode="inline"
                    items={menuData}
                    onClick={(item, key, keyPath, domEvent) => {
                        this.stringEdit(item)
                    }}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: '#002140', color: '#fff' }}>
                    header
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, minHeight: 360, }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout >
    }
}

export default connect(({ global }: any) => ({
    global
}))(App);
