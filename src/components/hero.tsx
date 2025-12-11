import { motion } from "motion/react";
import Button from "./button";
import Ticker from "./ticker";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col gap-5 items-center justify-center mt-16">
        <div className="w-[96%] md:max-w-2/3 space-y-4 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-medium text-center ">
            Take control of your crypto investments
          </h1>
          <p className="text-xl text-center text-[rgb(204,204,204)]">
            Your assets, streamlined. Zubiri Exchange delivers instant
            transactions, low fees, and next-level security.
          </p>
          <div className="mt-4">
            <Button size="large">Start for free</Button>
          </div>
        </div>
        <div className="mt-6 space-y-8 text-sm md:text-md">
          <div className="overflow-hidden">
            <motion.p
              className="text-[rgb(204,204,204)] text-md text-center overflow-hidden"
              animate={{ opacity: 1, transform: "translateY(0)" }}
              initial={{ opacity: 0, transform: "translateY(-40px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Support top 30+ chains
            </motion.p>
          </div>
          <div className="w-11/12 mx-auto">
            <Ticker />
          </div>
          <div className="relative w-[98%] mx-auto">
            <motion.img
              initial={{
                scale: 0.9,
                opacity: 0,
                transform: "translateY(40px)",
              }}
              animate={{ scale: 1, opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              src="/zubiri-exchange-landing/app.png"
              alt="Zubiri Exchange App"
              className="shadow-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
