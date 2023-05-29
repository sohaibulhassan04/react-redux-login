import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Button, Layout, Menu, theme } from 'antd';
  import { useState } from 'react';
import CarouselComponent from './CarouselComponent';
import { useNavigate } from "react-router-dom";
  const { Header, Sider, Content } = Layout;
  const WelcomeComponent = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
       
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <div>

            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Button
              type="primary"
              content='Sign In'
              onClick={()=>{navigate('/login')}}
              style={{
                fontSize: '16px',
                marginLeft: '85%',
                width: 120,
                height: 64,
              }}
            >
                Sign In
            </Button>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 680,
              background: colorBgContainer,
            }}
          >
          <CarouselComponent />
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default WelcomeComponent;