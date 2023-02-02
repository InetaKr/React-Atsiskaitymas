import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import AddPage from './components/AddPage';

const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<LoginPage/>} />
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/home' element ={<HomePage/>}/>
    <Route path='/add'element={<AddPage/>}/>
   </Routes>  
   </>
  );
}

export default App;
