import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/home-page/header/header";
import Footer from "./components/home-page/footer/footer";
import { ROUTES } from "./routes.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
