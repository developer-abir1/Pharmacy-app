
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Share/Navbar/Navbar";
import ProductData from './components/ProductData/ProductData';
import Login from "./components/Login/Login";



function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/productsData">
          <ProductData />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
