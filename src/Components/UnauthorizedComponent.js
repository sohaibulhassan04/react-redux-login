import { Button, Result } from 'antd';
import {useNavigate} from 'react-router-dom'
const UnauthorizedComponent = () => {
    const navigate = useNavigate();
    return(
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={
          
          <Button onClick={()=>navigate('/')} type="primary">Back to Login</Button>}
        />
      );
}
export default UnauthorizedComponent;