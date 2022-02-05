import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { ScrollToTop } from './Pages/ScrollToTop/ScrollToTop';
import About from './Pages/About/About/About';
import Services from './Pages/Services/Services/Services';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default App;
