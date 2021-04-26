import React from "react";
import './index.css';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import  LaptopOutlined from '@ant-design/icons';
import {NavLink} from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
    )}
  </Sticky>
);

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
    <Header className="header">
      <div className="logo"/>
      
   <div className="container-fluid nav_bg">
    <div className='row'>
    <div className="col mx-auto">
    

   
    <nav className="navbar navbar-light navbar-custom navbar-expand-xl" style={{backgroundColor: '#dbf6e9',height:'65px',width:'1343px',paddingLeft:'290px',marginLeft:'-50px'}}>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
  <StickyContainer style={{backgroundColor: '#dbf6e9',height:'60px'}}>
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>

      <TabPane tab="Create+" style={{ height: 900,width:'700px',color:'black',marginTop:'30px'}} key="1" >
         <div>

          
           <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Assignment No :</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" " />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Assignment Name :</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=" " />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Marks :</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" " />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Due Date :</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" " />
        </div>


        <div class="form-group">
    <label for="exampleFormControlTextarea1">Add Context :</label>
    <textarea class="form-control" style={{ height:'200px'}}  id="exampleFormControlTextarea1" rows="3"></textarea>

  </div> 
  
   <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Sample Answer :</label>
        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
      </div>

<button type="submit" class="btn btn-primary">Create</button>


        
      </form>
         
        </div> 
      </TabPane>

      <TabPane tab="Assignments" style={{ height: 900,width:'700px',color:'black',marginTop:'30px'}} key="2">

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
  <StickyContainer style={{backgroundColor: '#f7f3e9',height:'60px'}}>
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>

      <TabPane tab="My Assignments" style={{ height: 900,width:'1100px',color:'black',marginTop:'30px'}} key="1" >
         <div>

         <div className="card" style={{ height:'100px',width:'700px'}} >
        <div className="card-header" style={{ fontSize:'15px'}}>
          Assignment No 1
        </div>
        <div className="card-body" >
          <h6 className="card-title" style={{ fontSize:'13px'}}>Implement ECLAT Algorithm</h6>
        </div>
      </div>


        </div> 

<br />

         <div>

         <div className="card" style={{ height:'100px',width:'700px'}} >
        <div className="card-header" style={{ fontSize:'15px'}}>
          Assignment No 1
        </div>
        <div className="card-body" >
          <h6 className="card-title" style={{ fontSize:'13px'}}>Implement ECLAT Algorithm</h6>
        </div>
      </div>


        </div> 

<br />

         <div>

         <div className="card" style={{ height:'100px',width:'700px'}} >
        <div className="card-header" style={{ fontSize:'15px'}}>
          Assignment No 1
        </div>
        <div className="card-body" >
          <h6 className="card-title" style={{ fontSize:'13px'}}>Implement ECLAT Algorithm</h6>
        </div>
      </div>


        </div> 
      </TabPane>

      <TabPane tab="Review Assignment" style={{ height: 1100,width:'1100px',color:'black',marginTop:'30px'}} key="2">
      <div > 

         <div className="card" style={{ height:'300px',width:'700px'}} >
        <div className="card-header" style={{ fontSize:'17px'}}>
          Assignment No 1
        </div>
        <div className="card-body" style={{height:'500px',width:'500px'}} >
          <h6 className="card-title" style={{ fontSize:'17px'}}>Implement ECLAT Algorithm</h6>
          <h6 className="card-title" style={{ fontSize:'14px'}}>Problem Statement : Select a domain for demonstration of ECLAT Algorithm.You can use the existing dataset and build ECLAT without using buildin package.All possible limitation and Expectation should be handled by your code</h6>
          <h6 className="card-title" style={{ fontSize:'14px'}}>Due Date: 30/04/2021</h6>
          <h6 className="card-title" style={{ fontSize:'14px'}}>Max marks : 15 </h6>

          <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Submit Here : </label>
        <input type="file" style={{ height:'34px',border:'3px white solid'}} className="form-control-file" id="exampleFormControlFile1" />
         <input type="submit" style={{ paddingLeft:'-150px'}} />
      </div> 
        </div>
      </div>


        </div> 

      </TabPane>
      <TabPane tab="XYZ"  style={{ height: 200,color:'black',marginTop:'30px'}} key="3">
         
         Tab  3

      </TabPane>
    </Tabs>
  </StickyContainer>
    

    
  </div>

      </TabPane>
      <TabPane tab="Quizzes"  style={{ height: 200,color:'black',marginTop:'30px'}} key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </StickyContainer>
    

    
  </div>
  

   
</nav>

</div>
   </div>
    </div>
        
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

       
       
      </Layout>
    </Content>
    
  </div>


    );
  }
}
