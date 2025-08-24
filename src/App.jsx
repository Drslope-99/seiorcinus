import NavBar from "./components/NavBar";
import Header from "./Layouts/Header";
import Button from "./components/Button";
import Hero from "./components/Hero";
import MainContent from "./Layouts/MainContent";
import InfoSection from "./components/InfoSection";
import FeatureSection from "./components/FeatureSection";

function App() {
  return (
    <>
      <Header>
        <NavBar />
        <Hero />
      </Header>
      <MainContent>
        <InfoSection />
        <FeatureSection />
      </MainContent>
    </>
  );
}

export default App;
