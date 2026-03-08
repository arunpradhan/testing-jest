
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MyForm from './MyForm';
import Home from './Home';
import Navigation from './Navigation';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/my-form" element={<MyForm/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
