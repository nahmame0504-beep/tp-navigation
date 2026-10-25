import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="titre-principal">Mon Application React</h1>
      
      <nav className="nav-bar">
        <Link to="/">Accueil</Link>
        <Link to="/apropos">À propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;