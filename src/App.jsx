
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
         <Route path="/Contact" element={<Contact />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;