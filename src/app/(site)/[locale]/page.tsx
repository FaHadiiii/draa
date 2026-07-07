import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CompanyLogos from "@/components/sections/CompanyLogos";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import DomainExpertise from "@/components/sections/DomainExpertise";
import HowWeWork from "@/components/sections/Methodology";
import PrincipalConsultant from "@/components/sections/PrincipalConsultant";
import FoundersCorner from "@/components/sections/FoundersCorner";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-primary font-sans antialiased">
      {/* Header / Navbar */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Company Logos Section */}
      <CompanyLogos />

      <main className="w-full px-6 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto">
        {/* About Us Section */}
        <AboutUs />

        {/* Services Section */}
        <Services />

        {/* Domain Expertise Section */}
        <DomainExpertise />

        {/* How we work Section */}
        <HowWeWork />
      </main>

      {/* Principal Consultant Section */}
      <PrincipalConsultant />

      <main className="w-full px-6 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto">
        {/* Founders corner Section */}
        <FoundersCorner />


      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
