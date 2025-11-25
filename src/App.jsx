import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import Shop from './pages/Shop';
// import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;