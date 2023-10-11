import React from "react";
import { NavLink } from "react-router-dom";

const RouterNavigator = () => {
  return (
    <div>
      <NavLink to="/profile">Profile</NavLink>
      <div>
        <NavLink to="/subprofile">Sub Profile</NavLink>
      </div>
    </div>
  );
};

export default RouterNavigator;
