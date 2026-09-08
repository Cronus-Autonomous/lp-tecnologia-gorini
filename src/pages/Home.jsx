import { useEffect } from "react";
import Navbar from "@/components/gorini/Navbar";
import Hero from "@/components/gorini/Hero";
import AuthorityBar from "@/components/gorini/AuthorityBar";
import ProtocolWidget from "@/components/gorini/ProtocolWidget";
import Technologies from "@/components/gorini/Technologies";
import Doctors from "@/components/gorini/Doctors";
import Testimonials from "@/components/gorini/Testimonials";
import Faq from "@/components/gorini/faq";
import Footer from "@/components/gorini/Footer";
import SocialProofToast from "@/components/gorini/SocialProofToast";
import WhatsAppButton from "@/components/gorini/WhatsAppButton";
import { useReveal } from "@/components/gorini/useReveal";

export default function Home() {
  useReveal();

  // Re-run reveal observer after images/content settle
  useEffect(() => {
    const t = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add("is-visible");
      });
    }, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-silk">
      <Navbar />
      <main>
        <Hero />
        <AuthorityBar />
        <ProtocolWidget />
        <Technologies />
        <Doctors />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <SocialProofToast />
      <WhatsAppButton />
    </div>
  );
}