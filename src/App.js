import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
 <div>
  <div className="bg-slate-900">
 <Navbar/>
 </div>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
 </Routes>
 

 </div>
  ); 
}

export default App;
