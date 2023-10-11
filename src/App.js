import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./components/addtoCartAction";
import { Route, Routes } from "react-router";
import Profile from "./components/RouterComponents/Profile";
import SubProfile from "./components/RouterComponents/SubProfile";
import RouterNavigators from "./components/RouterComponents/RouterNavigator";
import ErrorRoute from "./components/RouterComponents/ErrorRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToCart());
  }, []);
  return (
    <div>
      <RouterNavigators />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="subprofile" element={<SubProfile />} />
        <Route path="/*" element={<ErrorRoute />} />
      </Routes>
      ;
    </div>
  );
}

export default App;
