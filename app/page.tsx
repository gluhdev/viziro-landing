import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import TargetAudience from "@/components/TargetAudience";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Industries />
      <TargetAudience />
      <ContactForm />
      <Footer />
    </main>
  );
}
