import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <Works />
      <Teams />
      <Contact />
      <Footer />
    </>
  );
}
