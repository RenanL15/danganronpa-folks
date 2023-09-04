import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import ScrollToTop from "./scrollRestoration";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}

export default App;
