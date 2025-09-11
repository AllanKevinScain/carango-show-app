import { Navbar } from "@/components";
import { Outlet } from "react-router";

export const LayoutProduct = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
