import React, { Fragment } from 'react'
import './index.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

export default function App(){
  const name = 'Zuwannn'
  return(
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/about/${name}`}>About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about/:name" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route render={() => <h1>404 : page not found.</h1>} />
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
  <Fragment >
    <h1>Home</h1>
    <FakeText />
  </Fragment>
)
  
// About Page
const About = ({match:{params:{name}}}) => (
  // props.match.params.name
  <Fragment>
    {name !== 'Zuwannn' ? <Redirect to="/" /> :null  }
    <h1>About {name}</h1>
    <FakeText />
  </Fragment>
)
  
// Contact Page
const Contact = ({history}) => (
  <Fragment>
    <h1>Contact</h1>
    <button class="waves-effect waves-light btn-small " onClick={() => history.push('/')} >
      Go to home
    </button>
    <FakeText />
  </Fragment>
)