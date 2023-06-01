import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
const PrivateRoutes = () => {
  const dispatch = useDispatch();
  const { athenticate } = bindActionCreators(actionCreators, dispatch);
  const account = useSelector((state) => state.account);
  const signoutStatus = useSelector((state) => state.signout);

  const state1 = useSelector((state) => state);
  useEffect(() => {
    athenticate(account);
  }, [account, signoutStatus]);
  console.log("state1 ???? ", state1);
  const token = useSelector((state) => state.athenticate.token);
  console.log("-----Refreshed Toke=====> "+ token)
  return token ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
