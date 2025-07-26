import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

const Placeholder = ({ name }: { name: string }) => (
  <div className="text-white text-3xl flex justify-center items-center h-screen bg-black">{name} Page</div>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Placeholder name="About" />} />
        <Route path="/contact" element={<Placeholder name="Contact" />} />
        <Route path="/gallery" element={<Placeholder name="Gallery" />} />
        <Route path="/packages" element={<Placeholder name="Packages" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
