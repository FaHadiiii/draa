import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CompanyLogos from "@/components/sections/CompanyLogos";
import AboutUs from "@/components/sections/AboutUs";
import PropertyCatalog from "@/components/sections/PropertyCatalog";
import HowWeWork from "@/components/sections/HowWeWork";
import FoundersCorner from "@/components/sections/FoundersCorner";
import CTA from "@/components/sections/CTA";

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

        {/* Property Catalog Section */}
        <PropertyCatalog />

        {/* How we work Section */}
        <HowWeWork />

        {/* Founders corner Section */}
        <FoundersCorner />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
