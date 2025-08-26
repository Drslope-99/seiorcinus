import NavBar from "../components/NavBar";
import Header from "../Layouts/Header";
import Button from "../components/Button";
import Hero from "../components/Hero";
import MainContent from "../Layouts/MainContent";
import InfoSection from "../components/InfoSection";
import FeatureSection from "../components/FeatureSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header>
        <NavBar />
        <Hero />
      </Header>
      <MainContent>
        <InfoSection />
        <FeatureSection />
        <ContactSection />
      </MainContent>
    </>
  );
}
