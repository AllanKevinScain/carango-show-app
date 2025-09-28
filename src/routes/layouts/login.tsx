import { useSession } from "@/hooks";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export const LayoutLogin = () => {
  const { data } = useSession();
  const router = useNavigate();

  useEffect(() => {
    if (data !== null) router("/product");
  }, [data, router]);

  return <Outlet />;
};
