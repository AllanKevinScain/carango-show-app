import { Drawer, Navbar } from "@/components";
import { useState } from "react";
import { Outlet } from "react-router";

export const LayoutProduct = () => {
  const [open, setOpen] = useState(false);

  function handleDrawer() {
    setOpen((s) => !s);
  }
  return (
    <>
      <Drawer open={open} hanlde={handleDrawer} />
      <Navbar handleDrawer={handleDrawer} />
      <Outlet />
    </>
  );
};
