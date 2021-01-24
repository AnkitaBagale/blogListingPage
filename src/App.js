
import React from 'react';
import Myblogs from "./Myblogs.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import Search from "./Search.js";
import About from "./About.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/myblogs" component={Myblogs} />
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} />
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );

}

const Home =()=>{
  return (
    <div>
      <Myblogs />
    </div>
  )
}

export default App;
