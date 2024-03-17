import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
