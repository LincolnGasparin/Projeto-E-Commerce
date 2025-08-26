import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ListarProdutos } from "../pages/Listar-Produtos";
import { Carrinho } from "../pages/Carrinho";
import { Login } from "../pages/Login";

export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ListarProdutos/>} />
        <Route path="/carrinho" element={<Carrinho/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
