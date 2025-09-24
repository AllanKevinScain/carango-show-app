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
        <Route path="admin/order" element={<h1>admin order</h1>} />
      </Route>

      <Route element={<LayoutDefault />}>
        <Route index path="profile" element={<ProfilePage />} />
        <Route path="profile/order" element={<h1>Profile order</h1>} />
      </Route>
    </Routes>
  );
};
