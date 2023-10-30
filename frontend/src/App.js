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
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      {isAuthenticated && <UserOptions user={user} />}
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/product/:id" Component={ProductDetails} />
        <Route exact path="/products" Component={Product} />
        <Route path="/products/:keyword" Component={Product} />
        <Route exact path="/search" Component={Search} />
        <Route exact path="/account" Component={Profile} />
        {/* <ProtectedRoute exact path="/account" Component={Profile} /> Dang bi loi*/}
        <Route exact path="/me/update" Component={UpdateProfile} />
        <Route exact path="/login" Component={LoginSignUp} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
