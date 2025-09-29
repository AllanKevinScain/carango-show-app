import { Drawer, Navbar } from "@/components";
import { useSession, useToggle } from "@/hooks";
import { useEffect } from "react";
import { FaTruckLoading } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router";
import { twMerge } from "tailwind-merge";

export const LayoutDefault = () => {
  const drawerModal = useToggle();
  const { data, loading } = useSession();
  const router = useNavigate();

  useEffect(() => {
    if (!loading && data === null) {
      router("/");
    }
  }, [loading, data, router]);

  return (
    <>
      {loading && (
        <div
          className={twMerge(
            "fixed inset-0 z-50",
            "flex items-center justify-center",
            "backdrop-blur-md bg-black/30"
          )}
        >
          <FaTruckLoading className="animate-spin" size={40} />
        </div>
      )}

      <Drawer open={drawerModal.open} handle={drawerModal.handle} />
      <Navbar handleDrawer={drawerModal.handle} />
      <Outlet />
    </>
  );
};
