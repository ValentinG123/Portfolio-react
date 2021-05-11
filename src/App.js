import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Cards from './Components/Card/Cards'



function App() {
  return (
    <div>
      <div className='body_container'>
      <Navbar/>
      <Header/>
      <Cards/>
      </div>
       
    </div>
  
  );
}

export default App;
