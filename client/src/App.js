import './App.css';
import './components/Styles.css'

import React, {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './components/Nav'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Books from './components/books/BooksPage'
import ViewBooks from './components/addbook/ViewBooks'
import FormSkeleton from './components/addbook/FormSkeleton'
import Login from './components/addbook/Login'
import ExistingUser from './components/addbook/ExistingUser'
import ExistingSkeleton from './components/addbook/ExistingSkeleton'

function App() {
  return (
    <div className='full'>
      <Router>
      <Nav />
        <div className='App'>
          <div className='home'>
            <Route path='/home' exact component={Home} />
          </div>
          <Route path='/about' component={AboutMe}></Route>
          <Route path='/books' exact component={Books} />
          <Route path='/mybooks' exact component={Login} />
          <Route path='/mybooks/:email' exact component={ViewBooks} />
          <Route path='/addbook' exact component={FormSkeleton} />
          <Route path='/addexistingbook/:email' exact component={ExistingSkeleton} />
          <Route path='/existinguser' exact component={ExistingUser} />
        </div>
      </Router>
    </div>
  );
}

export default App;