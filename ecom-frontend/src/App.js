import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";


function App() {
  return (
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      {/* <Route exact path="/login" >
        <Login />
      </Route>
      <Route exact path="/register" >
        <Register />
      </Route>
      <Route></Route> */}

    </Switch>
    
  );
}

export default App;
