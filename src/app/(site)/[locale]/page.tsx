import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import PropertyCatalog from "@/components/sections/PropertyCatalog";
import HowWeWork from "@/components/sections/HowWeWork";
import FoundersCorner from "@/components/sections/FoundersCorner";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-primary font-sans antialiased">
      {/* Header / Navbar */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Property Catalog Section */}
      <PropertyCatalog />

      {/* How we work Section */}
      <HowWeWork />

      {/* Founders corner Section */}
      <FoundersCorner />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
