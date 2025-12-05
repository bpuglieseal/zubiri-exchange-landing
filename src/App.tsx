import Header from "./components/header";
import Hero from "./components/hero";
import Overview from "./components/overview";

export default function App() {
  return (
    <div className="font-display">
      <Header />
      <main className="container mx-auto md:max-w-10/12 2xl:w-6/12">
        <Hero />
        <Overview />
      </main>
    </div>
  );
}
