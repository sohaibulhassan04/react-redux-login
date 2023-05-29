import {
  Button,
  Checkbox,
  Form,
  Input,
  notification
} from 'antd';
import {useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
import { FrownOutlined } from '@ant-design/icons';
const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const account = useSelector(state => state.account)
const {signup}=bindActionCreators(actionCreators,dispatch)
const [api, contextHolder] = notification.useNotification();

const alreadyExistNotification = () => {
  api.warning({
    message: 'Registration Failed',
    description:
      'Username Already Exists!',
    icon: (
      <FrownOutlined
        style={{
          color: 'red',
        }}
      />
    ),
  });
};
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
      const onFinish = (values) => {
       if(values.username && values.password){
        if(values.username !== account.username){
          signup(values)
          navigate('/login')
        }else if(values.username === account.username){
          alreadyExistNotification()
        }
          
       }
        console.log('Success:', values);
      };
  
  return(
   
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
         <div>Already Have an account? </div>
         <Button type="link" htmlType="link"
         style={{ "margin-top": "-5px"}}
         onClick={navigate('/login')}
         >
           Sign In
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
           Sign Up
         </Button>
       </Form.Item>
     </Form>
     </div>
  
   );
};
export default Signup;