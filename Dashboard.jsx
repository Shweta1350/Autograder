import React from "react";
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import  LaptopOutlined from '@ant-design/icons';
import { Skeleton } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
    <Header className="header">
      <div className="logo"/>
      <Menu theme="dark" className="Nav" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item style={{marginLeft:"200px"}} key="1">Course Work</Menu.Item>
        <Menu.Item key="2">Assignments</Menu.Item>
        <Menu.Item key="3">Quizzes</Menu.Item>
        <Menu.Item key="4">Discussion Forum</Menu.Item>
        <Menu.Item key="5">Resources</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<LaptopOutlined />} title="UNIT 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="UNIT 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<LaptopOutlined />} title="UNIT 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        </Content>

        <Skeleton />
       
      </Layout>
    </Content>
    
  </div>


    );
  }
}