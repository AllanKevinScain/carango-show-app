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

export const CustomRoutes = () => {
  return (
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
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};
