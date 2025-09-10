import { Routes, Route } from "react-router";
import {
  HomePage,
  ListPage,
  LoginPage,
  ProductPage,
  RegisterPage,
} from "./pages";
import { LayoutLogin, LayoutProduct } from "./layouts";

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route element={<LayoutLogin />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route element={<LayoutProduct />}>
        <Route index path="/" element={<HomePage />} />
        <Route path=":product" element={<ProductPage />} />
        <Route path="list" element={<ListPage />} />
      </Route>
    </Routes>
  );
};
