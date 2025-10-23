import React from "react";
import Navber from "../Components/Navber";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer";

const HomeLayout = () => {
  const location = useLocation();
  const footerHide =
    location.pathname === "/auth/logIn" ||
    location.pathname === "/auth/register";

  return (
    <div className="pt-15">
      <Navber></Navber>
      <div className="max-w-10/12 mx-auto">
        <Outlet></Outlet>
      </div>
      {!footerHide && <Footer></Footer>}
    </div>
  );
};

export default HomeLayout;