// import Image from "next/image";
// import Header from "./home/header";
import HeroSection from "./home/HeroSection";
// import StatsSection from "./home/StatsSection";
import TrustedBySection from "./home/TrustedBySection";
import SinglePlatform from "./home/SinglePlatform";
import Footer from "./home/Footer";
import SmartJobPosting from "./home/SmartJobPosting";
import ApnaDatabase from "./home/ApnaDatabase";
import ApnaCampus from "./home/ApnaCampus";
import BalkWhatsapp from "./home/BulkWhatsapp";
import ApnaEnterprise from "./home/ApnaEnterprise";
import TalentPlaybook from "./home/TalentPlaybook";
import WhyHirefrom from "./home/WhyHirefrom";
import AskedQuestions from "./home/AskedQuestions";
// import './style.css'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      {/* <StatsSection /> */}
      <TrustedBySection />
      <SinglePlatform />
      <SmartJobPosting />
      <ApnaDatabase />
      <ApnaCampus />
      <BalkWhatsapp />
      <ApnaEnterprise />
      <TalentPlaybook />
      <WhyHirefrom />
      <AskedQuestions />
      <Footer />
    </>
  );
}
