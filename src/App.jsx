import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import OpeningForm from './pages/OpeningForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/opening' element={<OpeningForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
