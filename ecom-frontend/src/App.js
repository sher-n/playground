import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavbarBack from "./components/navbar/navbarBack";
import Register from "./pages/Register";
import HomeUser from "./pages/HomeUser";
import ProductDetail from "./pages/ProductDetail";
import NavbarUser from "./components/navbar/navbarUser";
import Profile from "./pages/Profile";
import Store from "./pages/Store";
import RegisterProduct from "./pages/RegisterProduct";
import Store2 from "./pages/Store2";
import PendingList from "./pages/PendingList";
import CheckOut from "./pages/Checkout";
import Cart from "./components/cart/Cart";


function App() {
  return (
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route exact path="/login" >
        <NavbarBack />
        <Login />
      </Route>
      <Route exact path="/register" >
        <NavbarBack />
        <Register />
      </Route>
      <Route exact path="/user" >
        <HomeUser />
      </Route>
      <Route exact path="/productdetail">
        <NavbarBack />
        <ProductDetail />
      </Route>
      <Route exact path="/profile">
        <NavbarBack />
        <Profile />
      </Route>
      <Route exact path="/store">
        <NavbarBack />
        <Store />
      </Route>
      <Route exact path="/registerproduct">
        <NavbarBack />
        <RegisterProduct />
      </Route>
      <Route exact path="/store2">
        <NavbarBack />
        <Store2 />
      </Route>
      <Route exact path="/pendinglist">
        <NavbarBack />
        <PendingList />
      </Route>
      <Route exact path="/checkout">
        <NavbarBack />
        <CheckOut />
      </Route>
      <Route exact path="/cart">
        <NavbarUser />
        <Cart />
      </Route>
    </Switch>
    
  );
}

export default App;
