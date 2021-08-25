import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import NavbarBack from "./components/navbar/navbarBack";
import Register from "./components/pages/Register";
import HomeUser from "./components/pages/HomeUser";
import ProductDetail from "./components/pages/ProductDetail";


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

    </Switch>
    
  );
}

export default App;
