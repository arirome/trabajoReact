
import Navbar from "./componentes/Navbar";
import Login from "./pages/Login";
import {BrowserRouter as Router, Route, Switch} from  "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";



function App() {


  const Routing=()=>{

    return(
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/posts" component={Posts}></Route>
        <Route exact path="/users" component={Users}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    )
  }
  //
  return (

  <Router>
    <Navbar/>
    <Routing/>
    </Router>
  );
}

export default App;
