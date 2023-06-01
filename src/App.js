import "./App.css";
import React from "react";
import { Routes } from "react-router-dom";
import WelcomeComponent from "./Components/WelcomeComponent.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import HomeComponent from "./Components/HomeComponent";
import PrivateRoutes from "./Components/PrivateRoutes";
import UnauthorizedComponent from "./Components/UnauthorizedComponent";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  
  const dispatch = useDispatch();
  const { athenticate } = bindActionCreators(actionCreators, dispatch);
  const account = useSelector((state) => state.account);

  const token = useSelector((state) => state.athenticate.token);
  useEffect(() => {
    athenticate(account);
  }, [account]);
  return (
    <div className="App">
      <Router>
        {/* <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/home" element={<HomeComponent />} />
            <Route path="/welcome" element={<WelcomeComponent />} />
          </Route>
          <Route path="/" element={<SignIn />} />
        </Routes> */}
        {token ? (
          <Routes>
            <Route path="/home"  element={<HomeComponent />} />
            <Route path="/welcome" element={<WelcomeComponent />} />
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route path="*" element={<UnauthorizedComponent />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
