import { Routes, Route, ScrollRestoration } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/characters/:id" element={<Characters />}></Route>
    </Routes>
  );
}
