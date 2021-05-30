import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Cards from './Components/Card/Cards'
import Proyect from './Components/Proyect/Proyect'
import Footer from './Components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Curriculum from './Components/Curriculum/Curriculum'





function App() {
  return (
      <div className='body_container'>
                   <Router>
                <Switch>
                    <Route path='/curriculum'>
                              <Curriculum/>
                              <Link to='/' className='link-out'>Volver</Link>
                    </Route>
                    <Route path='/'>
                        <Navbar/>
                        <Header/>
                        <Cards/>
                        <Proyect/>
                        <Footer/>
                      </Route>
                    
                </Switch>
            </Router>
  
      </div>
       

  
  );
}

export default App;
