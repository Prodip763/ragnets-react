import { Route, Routes } from "react-router-dom";
import Items from "./component/Items";
import Product from "./component/Product";
import Home from './component/Home';
import Cart from "./component/Cart";


function App() {
  return (
    <div>
      <Home></Home>
      <Routes>
        <Route path="/" element={<Product></Product>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/item/:itemId" element={<Items></Items>}></Route>
      </Routes>
    </div>
  );
}

export default App;
