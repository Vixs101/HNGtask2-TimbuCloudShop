import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
