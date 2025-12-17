import Benefits from "./components/benefits";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Overview from "./components/overview";
import ContactForm from "./components/contact-form";

export default function App() {
  return (
    <div className="font-display">
      <Header />
      <main className="container mx-auto 2xl:w-7/12">
        <Hero />
        <Overview />
        <Benefits />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
