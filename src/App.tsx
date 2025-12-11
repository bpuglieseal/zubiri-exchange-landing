import Benefits from "./components/benefits";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Overview from "./components/overview";

export default function App() {
  return (
    <div className="font-display">
      <Header />
      <main className="container mx-auto md:max-w-10/12 2xl:w-7/12">
        <Hero />
        <Overview />
        <Benefits />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
