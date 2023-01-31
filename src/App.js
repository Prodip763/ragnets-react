import { Route, Routes } from "react-router-dom";
import Items from "./component/Items";
import Product from "./component/Product";
import Home from './component/Home';
import Cart from "./component/Cart";
import ProductProvider from "./context/ProductProvider";



function App() {
  return (
    <div>
      <ProductProvider> 
      <Home></Home>
        <Routes>
          <Route path="/" element={<Product></Product>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/item/:itemId" element={<Items></Items>}></Route>
        </Routes>
      </ProductProvider>
    </div>
  );
}

export default App;
