import { Route, Routes } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Items from "./component/Items";
import Product from "./component/Product";

function App() {
  return (
    <div>
      <Home></Home>
      <Routes>
        <Route path="/" element={<Product></Product>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/item/:itemId" element={<Items></Items>}></Route>
      </Routes>
    </div>
  );
}

export default App;
