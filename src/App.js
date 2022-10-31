import './App.css';

import Header from './components/commons/Header'; //Include Header
import Footer from './components/commons/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Contact from './components/Contact';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Shop/Cart';
import Checkout from './components/Shop/Checkout';
import Dashboard from './components/Admin/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AppAdmin } from './components/Admin/AppAdmin'
import { ViewProductAdmin } from './components/Admin/ViewProductAdmin'
import { CreateProduct } from './components/Admin/CreateProduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header className="App-header"></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path="/products-list-admin" element={<AppAdmin />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/view-product-admin/:id" element={<ViewProductAdmin />} />
          <Route path='/ventas' element={<Dashboard />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
