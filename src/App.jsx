import './App.css';
import { Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Register from './components/Register';
import HomePage from './components/HomePage';
import AddPage from './components/AddPage';
import Header from './components/Header';

const App = () => {
  return (
   <>
   <Header />
   <Routes>
    <Route path='/' element={<LogIn/>} />
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element ={<HomePage/>}/>
    <Route path='/add'element={<AddPage/>}/>
   </Routes>  
   </>
  );
}

export default App;
