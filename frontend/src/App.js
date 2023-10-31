import "./App.css";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/layout/Footer/Footer";
import React, { Fragment, useState } from "react";
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
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
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
        <Route exact path="/password/update" Component={UpdatePassword} />
        <Route exact path="/password/forgot" Component={ForgotPassword} />
        <Route exact path="/password/reset/:token" Component={ResetPassword} />
        <Route exact path="/login" Component={LoginSignUp} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/shipping" Component={Shipping} />
        <Route exact path="/order/confirm" Component={ConfirmOrder} />
        <Route
          path="process/payment"
          element={
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Payment />
            </Elements>
          }
        />
        <Route exact path="/success" Component={OrderSuccess} />
        <Route exact path="/orders" Component={MyOrders} />
        <Route exact path="/order/:id" Component={OrderDetails} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
