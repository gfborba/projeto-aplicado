import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Search from './components/pages/Search';
import Register from './components/pages/Register';
import AdmView from './components/pages/AdmView';
import GestorView from './components/pages/GestorView';

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar';

function App() {
  return (//Rotas para as paginas
    <Router>
      <Navbar />

        <Container>

       
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admview" element={<AdmView />} />
          <Route path="/gestorview" element={<GestorView />} /> 
        </Routes>

      </Container>

    </Router>
  );
}

export default App;
