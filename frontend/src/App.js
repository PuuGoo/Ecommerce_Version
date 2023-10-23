import "./App.css";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/layout/Footer/Footer";
import React from "react";
import WebFont from "webfontloader";
import Home from "./component/Home/Home";

import ProductDetails from "./component/Product/ProductDetails";
import Product from "./component/Product/Product";
import Search from "./component/Product/Search";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/product/:id" Component={ProductDetails} />
        <Route exact path="/products" Component={Product} />
        <Route path="/products/:keyword" Component={Product} />
        <Route exact path="/search" Component={Search} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
