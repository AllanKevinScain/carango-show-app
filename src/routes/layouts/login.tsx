import { useSession } from "@/hooks";
import { useEffect } from "react";
import { FaTruckLoading } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router";
import { twMerge } from "tailwind-merge";

export const LayoutLogin = () => {
  const { data, loading } = useSession();
  const router = useNavigate();

  useEffect(() => {
    if (!loading && data !== null) {
      router("/product");
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

      <Outlet />
    </>
  );
};
