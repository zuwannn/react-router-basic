import React, { Fragment } from 'react'
import './index.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default function App(){
  return(
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        
      </main>
    </Router>
    
  )
}

const FakeText = () => (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium accusamus quisquam reiciendis dolorum, ad cumque commodi temporibus error porro.
  </p>
)

// Home Page
const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
)
  
// About Page
const About = () => (
  <Fragment>
    <h1>About</h1>
    <FakeText />
  </Fragment>
)
  
// Contact Page
const Contact = () => (
  <Fragment>
    <h1>Contact</h1>
    <FakeText />
  </Fragment>
)