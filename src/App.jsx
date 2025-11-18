import FirstSection from "./components/first-section/first-section";
import Header from "./components/header/header";
import SecondSection from "./components/second-section/second-section";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <FirstSection />
        <SecondSection />
      </main>
    </>
  );
}

export default App;
