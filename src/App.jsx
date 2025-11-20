import FirstSection from "./components/first-section/first-section";
import FivethSection from "./components/fiveth-section/fiveth-section";
import FourthSection from "./components/fourth-section/fourth-section";
import Header from "./components/header/header";
import Line from "./components/line/line";
import SecondSection from "./components/second-section/second-section";
import SixthSection from "./components/sixth-section/sixth-section";
import ThirdSection from "./components/third-section/third-section";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Line />
        <FourthSection />
        <FivethSection />
        <SixthSection />
      </main>
    </>
  );
}

export default App;
