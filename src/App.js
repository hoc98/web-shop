import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartScreen from "./CartScreen";
import Heder from "./Heder";
import Login from "./Login";
import Oneproduct from "./Oneproduct";
import Product from "./Products";
import Signin from "./Signin";
import ShippingScreen from "./ShippingScreen";

function App() {
  return (
    <BrowserRouter>
      <Heder/>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Product />} />
        <Route path="/carts" element={<CartScreen />} />
        <Route path="/shopadders" element={<ShippingScreen />}/>
        <Route path="/:id" element={<Oneproduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
