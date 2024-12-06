import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import Search from './components/pages/Search';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
     <Navbar />

      <Container customClass = "min-height">
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
      </Container>
      
      <Footer />
    </Router>
  );
}

export default App;
