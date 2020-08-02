import React from 'react';
import './App.css';
import {Link, BrowserRouter as Router, Route} from "react-router-dom";

const App = () =>{
  return (
   <section className = "App">
       <Router>
            <Link to="/"><div className='App-nav'>Home</div></Link>
            <Link to="/about"><div className='App-nav'>About</div></Link>
           <Route exact path="/" component={IndexPage}/>
           <Route exact path="/about" component={AboutPage}/>
       </Router>
   </section>
  );
};

const IndexPage = () =>{
    return (
        <h1>Home Page</h1>
    )
};

const AboutPage = () =>{
    return (
        <h1>About Page</h1>
    )
};
export default App;
