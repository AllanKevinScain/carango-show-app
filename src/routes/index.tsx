import { Routes, Route } from "react-router";
import { App } from "../App";

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<div>Aqui é a home</div>} />

      <Route element={<div>Login Layout</div>}>
        <Route path="login" element={<div>Logar</div>} />
        <Route path="register" element={<div>Registrar login</div>} />
      </Route>

      <Route element={<div>Site layout</div>}>
        <Route index element={<div>Aqui é a home</div>} />
        <Route path=":product" element={<div>Aqui é o produto</div>} />
        <Route path="filter" element={<div>Aqui é a listagem</div>} />
      </Route>
    </Routes>
  );
};
