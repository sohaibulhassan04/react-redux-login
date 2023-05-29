import { Button, Checkbox, Form, Input , notification} from 'antd';
import '../Styles/Signin.css'
import {useNavigate} from 'react-router-dom'
import React from 'react';
import { useSelector } from 'react-redux';
import { FrownOutlined } from '@ant-design/icons';


const SignIn = () => {
    const navigate=useNavigate();
    const account = useSelector(state => state.account)
const onFinishFailed = (errorInfo) => {
  if(account.username === "" && account.password ===""){
    notRegisteredNotification()
  }
  console.log('Failed:', errorInfo);
};
    const onFinish = (values) => {
        console.log(account)
        if(account.username === "" || values.username !== account.username || values.password !== account.password ){
          notRegisteredNotification()
        }

       if(values.username === account.username && values.password === account.password){
          navigate('/home')
      }
      console.log('Success:', values);
    };
    const [api, contextHolder] = notification.useNotification();
   
    const notRegisteredNotification = () => {
      api.warning({
        message: 'Username Not Found',
        description:
          'Please signup first to Login',
        icon: (
          <FrownOutlined
            style={{
              color: 'red',
            }}
          />
        ),
      });
    };
   
    return(
       <React.Fragment key={1}>
        <div className='sign-in-class'>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
      
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
      
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
           <div className='doinline'>
           <Checkbox>Remember me</Checkbox>
           <div className='dospace'>
             |
           </div>
            <div>Don't Have an account? </div>
            <Button type="link" htmlType="link"
            style={{ "margin-top": "-5px"}}
            onClick={(e)=>{navigate('/signup')}}>
              Sign Up
            </Button>
           </div>

          </Form.Item>
      
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            {contextHolder}
            <Button type="primary" htmlType="submit" >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        </div>
       </React.Fragment>
      );
}

export default SignIn;