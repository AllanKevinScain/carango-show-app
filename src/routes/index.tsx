import { Routes, Route } from "react-router";
import {
  ListPage,
  LoginPage,
  ProductPage,
  RegisterPage,
  AdminPage,
  ProfilePage,
} from "./pages";
import { LayoutDefault, LayoutLogin } from "./layouts";
import { CartPage } from "./pages/cart";
import { QueryProvider, SessionProvider } from "@/providers";
import { OrderPage } from "./pages/order";

export const CustomRoutes = () => {
  return (
    <SessionProvider>
      <QueryProvider>
        <Routes>
          <Route element={<LayoutLogin />}>
            <Route index path="/" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route element={<LayoutDefault />}>
            <Route index path="product" element={<ListPage />} />
            <Route path="product/:productId" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>

          <Route element={<LayoutDefault />}>
            <Route index path="admin" element={<AdminPage />} />
            <Route path="order" element={<OrderPage />} />
          </Route>

          <Route element={<LayoutDefault />}>
            <Route index path="profile" element={<ProfilePage />} />
            <Route path="profile/order" element={<h1>Profile order</h1>} />
          </Route>
        </Routes>
      </QueryProvider>
    </SessionProvider>
  );
};
