import React, { Fragment } from 'react'
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'

export default function App(){
  return(
    <Router>
      <main>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
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