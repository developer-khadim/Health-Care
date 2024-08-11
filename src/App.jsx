
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
         {/* <Route path="/Contact" element={<Contact />} />
          <Route path="/Help" element={<Help />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;