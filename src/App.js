
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MyForm from './MyForm';
import Home from './Home';
import Navigation from './Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/my-form" element={<MyForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
