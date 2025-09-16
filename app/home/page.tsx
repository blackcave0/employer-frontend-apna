import ApnaCampus from "./ApnaCampus";
import ApnaDatabase from "./ApnaDatabase";
import ApnaEnterprise from "./ApnaEnterprise";
import AskedQuestions from "./AskedQuestions";
import BulkWhatsapp from "./BulkWhatsapp";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import SinglePlatform from "./SinglePlatform";
import SmartJobPosting from "./SmartJobPosting";
import TalentPlaybook from "./TalentPlaybook";
import TrustedBySection from "./TrustedBySection";
import WhyHirefrom from "./WhyHirefrom";

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
      <BulkWhatsapp />
      <ApnaEnterprise />
      <TalentPlaybook />
      <WhyHirefrom />
      <AskedQuestions />
      <Footer />
    </>
  );
};