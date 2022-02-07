import React, { useState } from "react"
import { Layout, Menu } from "antd"
import {
  AppstoreOutlined, BarsOutlined, BellOutlined, DashboardOutlined,
} from "@ant-design/icons"
import "./BaseLayout.css"
import { Footer } from "antd/lib/layout/layout"
import { Link } from "react-router-dom"

const { Header, Sider, Content } = Layout

interface BaseLayoutProps {
  children: React.ReactElement
}

export default function BaseLayout(props: BaseLayoutProps): React.ReactElement {
  const [collapsed, setCollapsed] = useState(false)
  const { children } = props

  const onCollapse = (coll: boolean): void => setCollapsed(coll)

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            <Link to="/warehouse">Warehouse</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BarsOutlined />}>
            Products
          </Menu.Item>
          <Menu.Item key="4" icon={<BellOutlined />}>
            <Link to="/notifications">Notifications</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Smart Shelf Manager ©2022</Footer>
      </Layout>
    </Layout>
  )
}
