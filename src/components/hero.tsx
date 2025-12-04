import Button from "./button";
import Ticker from "./ticker";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col gap-5 items-center justify-center w-6/12 mx-auto mt-24">
        <div className="max-w-2/3">
          <h1 className="text-6xl font-semibold text-center">
            Take control of your crypto investments
          </h1>
        </div>
        <div className="max-w-2/3">
          <p className="text-xl text-center text-[rgb(204,204,204)]">
            Your assets, streamlined. Zubiri Exchange delivers instant
            transactions, low fees, and next-level security.
          </p>
        </div>
        <div>
          <Button>Start for free</Button>
        </div>
        <div className="mt-10 space-y-8">
          <p className="text-[rgb(204,204,204)] text-md text-center">
            Support top 30+ chains
          </p>
          <Ticker />
          <div className="relative">
            <img
              src="app.png"
              alt="Zubiri Exchange App"
              className="shadow-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
