import FirstSection from "../components/home-page/first-section/first-section";
import SecondSection from "../components/home-page/second-section/second-section";
import ThirdSection from "../components/home-page/third-section/third-section";
import Line from "../components/home-page/line/line";
import FourthSection from "../components/home-page/fourth-section/fourth-section";
import FivethSection from "../components/home-page/fiveth-section/fiveth-section";
import SixthSection from "../components/home-page/sixth-section/sixth-section";

const Home = () => {
  return (
    <main>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Line />
      <FourthSection />
      <FivethSection />
      <SixthSection />
    </main>
  );
};

export default Home;