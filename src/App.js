
import React from 'react';
import Myblogs from "./Myblogs.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import Search from "./Search.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div id="root">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/myblogs" component={Myblogs} />
        <Route path="/search" component={Search} />
      </Switch>
      <Footer />
      </div>
    </Router>
  );

}

const Home =()=>{
  return (
    <Myblogs />
  )
}

export default App;
