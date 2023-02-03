import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Home from './components/Home';
import AddPost from './components/AddPost';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
   <>
   <Header />
   <Routes>
    <Route path='/' element={<LogIn/>} />
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element ={<Home/>}/>
    <Route path='/add'element={<AddPost/>}/>
   </Routes>
   <Footer />  
   </>
  );
}

export default App;
