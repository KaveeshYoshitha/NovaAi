import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { DashboardPreview } from "./components/DashboardPreview";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Features />
      <DashboardPreview />
      <Pricing />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}