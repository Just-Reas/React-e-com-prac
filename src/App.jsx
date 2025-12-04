import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/home-page/header/header";
import Footer from "./components/home-page/footer/footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Sale from "./pages/Sale";
import Arrivals from "./pages/Arrivals";
import Brands from "./pages/Brands";
import Log from "./pages/Log";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/arrivals" element={<Arrivals />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/log" element={<Log />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
