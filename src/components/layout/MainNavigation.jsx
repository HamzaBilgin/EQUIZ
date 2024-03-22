import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import ProfilSidebar from "./ProfilSidebar";

const MainNavigation = () => {
  return (
    <div>
      <Header />
      <ProfilSidebar />
    </div>
  );
};

export default MainNavigation;
