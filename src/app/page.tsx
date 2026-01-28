import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import BoxPopSection from "@/components/BoxPopSection";
import Benefits from "@/components/Benefits";
import PaymentMethods from "@/components/PaymentMethods";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        <Hero />
        <Categories />
        <ProductGrid />
        <BoxPopSection />
        <Benefits />
        <PaymentMethods />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
