import { Drawer, Navbar } from "@/components";
import { useSession, useToggle } from "@/hooks";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export const LayoutDefault = () => {
  const drawerModal = useToggle();
  const { data } = useSession();
  const router = useNavigate();

  useEffect(() => {
    if (data === null) router("/");
  }, [data, router]);

  return (
    <>
      <Drawer open={drawerModal.open} handle={drawerModal.handle} />
      <Navbar handleDrawer={drawerModal.handle} />
      <Outlet />
    </>
  );
};
