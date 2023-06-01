import { SmileOutlined } from '@ant-design/icons';
import { Button, notification, Result } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import '../Styles/Signin.css'
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const HomeComponent = () => {
const amount = useSelector(state => state.amount)
const navigate=useNavigate()
const dispatch = useDispatch()
const {depositMoney,withdrawMoney,signout }=bindActionCreators(actionCreators,dispatch)
// useEffect(() => {
//   successNotification()
//   return () => {
//     console.log("welcomeHome")
//   }
// }, [])
const [api,contextHolder] = notification.useNotification();

const successNotification = () => {
  api.open({
    message: 'Authentication Successful',
    description:
      'Welcome Home',
    icon: (
      <SmileOutlined
        style={{
          color: 'green',
        }}
      />
    ),
  });
};
return(
  <Result
    icon={<SmileOutlined />}
    title="Enter your Amount Here"
    extra={
      <div>
          
        <div>
          {contextHolder}
            <Button type="primary"
            onClick={()=>withdrawMoney(100)}
            >-</Button>
           <span className='dopadding'> amount : {amount}</span>
            <Button type="primary"
            onClick={()=>depositMoney(100)}
            >+</Button>
        </div>
        <div>
        <Button type="primary"
        style={{"marginTop":"150px"}}
            onClick={()=>{signout()
            navigate("/")}}
            >Sign out</Button>
        </div>
      </div>
        
       
    }
    
  />
);}
export default HomeComponent;