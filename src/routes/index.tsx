import { Routes, Route } from "react-router";
import {
  ListPage,
  LoginPage,
  ProductPage,
  RegisterPage,
  AdminPage,
  ProfilePage,
  NotFoundPage,
} from "./pages";
import { LayoutDefault, LayoutLogin } from "./layouts";
import { CartPage } from "./pages/cart";
import { QueryProvider, SessionProvider } from "@/providers";
import { OrderPage } from "./pages/order";
import { CongratulationsPage } from "./pages/congratulations";
import { ErrorBoundary } from "./pages/error";

export const CustomRoutes = () => {
  return (
    <SessionProvider>
      <QueryProvider>
        <Routes>
          <Route element={<LayoutLogin />} ErrorBoundary={ErrorBoundary}>
            <Route index path="/" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route element={<LayoutDefault />} ErrorBoundary={ErrorBoundary}>
            <Route index path="product" element={<ListPage />} />
            <Route path="product/:productId" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="congratulations" element={<CongratulationsPage />} />
          </Route>

          <Route element={<LayoutDefault />} ErrorBoundary={ErrorBoundary}>
            <Route index path="admin" element={<AdminPage />} />
            <Route path="order" element={<OrderPage />} />
          </Route>

          <Route element={<LayoutDefault />} ErrorBoundary={ErrorBoundary}>
            <Route index path="profile/:id" element={<ProfilePage />} />
            <Route path="profile/order" element={<h1>Profile order</h1>} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </QueryProvider>
    </SessionProvider>
  );
};
