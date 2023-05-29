import { Carousel } from 'antd';
const CarouselComponent = () => {
    
    return(
        <Carousel autoplay>
        <div>
            
        {
          <img
            alt="1"
            height={670}
            width={"100%"}
            src="https://images.unsplash.com/photo-1598387846419-a2c870ad3ecd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
          />
        }
        </div>
        <div>
        {
          <img
            alt="2"
            height={670}
            width={"100%"}
            src="https://images.unsplash.com/photo-1524680319993-fe837ad4bf2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          />
        }
        </div>
        <div>
        {
          <img
            alt="3"
            height={670}
            width={"100%"}
            src="https://images.unsplash.com/photo-1593016250787-edf25b355001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          />
        }
        </div>
        <div>
        {
          <img
            alt="4"
            height={670}
            width={"100%"}
            src="https://images.unsplash.com/photo-1598704710590-dbb8d9815b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
          />
        }
        </div>
      </Carousel>
    )
 
}
export default CarouselComponent;

