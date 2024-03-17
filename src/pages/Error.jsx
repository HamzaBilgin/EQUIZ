import React from "react";
import { Fragment } from "react";
import MainNavigation from "../components/layout/MainNavigation";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <div className="mt-[70px] h-72 flex flex-col justify-center items-center">
        <h1>Bir hata oluştu!</h1>
        <p>Bu sayfa bulunamadı!</p>
        <Link to="/">Ana Sayfa</Link>
      </div>
    </Fragment>
  );
};

export default ErrorPage;
