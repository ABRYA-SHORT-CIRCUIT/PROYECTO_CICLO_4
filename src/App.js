import './App.css';

import Header from './components/Header'; //Include Header
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import SingleProduct from './components/SingleProduct'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AppAdmin } from './components/Admin/AppAdmin'
import { ViewProductAdmin } from './components/Admin/ViewProductAdmin'
// import {ListProvider} from './components/context/ListContext';
// import {FormProductProvider} from './components/context/FormProductContex'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        {/* <ListProvider>
          <FormProductProvider> */}

            <Header className="App-header"></Header>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/single-product" element={<SingleProduct />} />
              <Route path="/products-list-admin" element={<AppAdmin />} />

              <Route path="/view-product-admin" element={<ViewProductAdmin />} />
            </Routes>

            <Footer></Footer>
{/* 
          </FormProductProvider>
        </ListProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
