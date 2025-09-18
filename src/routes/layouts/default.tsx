import { Drawer, Navbar } from "@/components";
import { useToggle } from "@/hooks";
import { Outlet } from "react-router";

export const LayoutDefault = () => {
  const drawerModal = useToggle();
  return (
    <>
      <Drawer open={drawerModal.open} handle={drawerModal.handle} />
      <Navbar handleDrawer={drawerModal.handle} />
      <Outlet />
    </>
  );
};
