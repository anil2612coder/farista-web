import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Content from "@/components/Content";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Content />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </>
  );
}
