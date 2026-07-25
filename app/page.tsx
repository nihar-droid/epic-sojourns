import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import TrustedBy from "@/components/home/TrustedBy";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import Testimonials from "@/components/home/Testimonials";import Gallery from "@/components/home/Gallery";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <TrustedBy />
  <Stats />
  <Services />
  <About />
  <Gallery />
  <WhyChooseUs />
  <FeaturedDestinations />
  <Testimonials />
  <CTA/>
  <Footer/>
</>
  );
}
