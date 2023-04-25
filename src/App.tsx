import { Routes, Route } from "react-router-dom";

import { Header } from "./components/";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <h1 className="not-found">
              Oops! We can't seem to find the page you're looking for.
            </h1>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
