import FirstSection from "./components/first-section/first-section";
import HeaderDiscount from "./components/header/header-disount/header-discount";
import HeaderMenu from "./components/header/header-menu/header-menu";

function App() {
  return (
    <>
      <header>
        <HeaderDiscount />
        <HeaderMenu />
      </header>
      <main>
        <FirstSection />
      </main>
    </>
  );
}

export default App;
