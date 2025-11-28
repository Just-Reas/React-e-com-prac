import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/home-page/header/header";
import Footer from "./components/home-page/footer/footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Sale from "./pages/Sale";

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
