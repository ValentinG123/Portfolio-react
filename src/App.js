import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Cards from './Components/Card/Cards'
import Proyect from './Components/Proyect/Proyect'



function App() {
  return (
      <div className='body_container'>
      <Navbar/>
      <Header/>
      <Cards/>
      <Proyect/>

      </div>
       

  
  );
}

export default App;
