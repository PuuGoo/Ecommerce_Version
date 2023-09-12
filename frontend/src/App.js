import "./App.css";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/layout/Footer/Footer";
import React from "react";
import WebFont from "webfontloader";
import Home from "./component/Home/Home";
import Loader from "./component/layout/Loader/Loader";
import ProductDetails from "./component/Product/ProductDetails";

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
