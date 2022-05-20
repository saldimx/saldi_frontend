import React from 'react';
import { Menu } from "../components/menu";
import { Outlet } from "react-router-dom";
import { Foot } from "../components/foot";

 
export const Layout = () => {
 
  return (
    <>
      <Menu/>
      <Outlet />
      <Foot/>
    </>
  )
};
