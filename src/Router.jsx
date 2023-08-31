import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hajime from "./pages/Hajime";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Hajime" element={<Hajime />}></Route>
    </Routes>
  );
}
