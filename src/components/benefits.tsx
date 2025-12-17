import { Bell, ChartSpline, Wallet, File, Brain, Lock } from "lucide-react";
import Card from "./card";
import Button from "./button";
import { motion } from "motion/react";

export default function Benefits() {
  return (
    <section id="benefits" className="mt-32">
      <div className="flex flex-col gap-3 items-center justify-center mt-24">
        <div className="w-full md:max-w-5/12">
          <h2 className="text-2xl font-semibold text-center">
            Powerful features built for crypto confidence
          </h2>
        </div>
        <div className="max-w-10/12 md:max-w-8/12">
          <p className="text-base md:text-xl text-center text-[rgb(204,204,204)]">
            Streamline your experience with tools designed to keep you secure,
            informed, and in control — every step of the way.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <motion.div
          className="gap-3 items-start justify-center grid grid-cols-1 md:grid-cols-3 px-8"
          initial={{ opacity: 0, transform: "translateY(60px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Card
            icon={<Wallet />}
            title="Instant transfers"
            description="Send and receive crypto in seconds, without delays or bottlenecks."
          />
          <Card
            icon={<ChartSpline />}
            title="Risk analysis"
            description="Stay ahead of the market with smart insights into potential risks."
          />
          <Card
            icon={<Bell />}
            title="Real-time alerts"
            description="Get notified instantly about price moves, trends, and key events."
          />
          <Card
            icon={<File />}
            title="Tax Optimization"
            description="Automate reports and minimise your tax burden with built-in tools."
          />
          <Card
            icon={<Brain />}
            title="Autopilot mode"
            description="Let smart algorithms manage your assets while you stay hands-off."
          />
          <Card
            icon={<Lock />}
            title="Maximum security"
            description="Protect your funds with top-tier encryption and multi-layer defences."
          />
        </motion.div>
      </div>
      <article className="mt-24 columns flex lg:flex-row flex-col gap-6 items-center">
        <motion.div
          className="space-y-6 lg:pr-6 px-8 flex flex-col justify-center items-center lg:items-start lg:justify-start"
          initial={{ opacity: 0, transform: "translateX(-60px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
            Stay on top of market moves in real time
          </h2>
          <p className="md:text-xl text-[rgb(204,204,204)] text-center md:text-left">
            Track live price changes, market shifts, and key events as they
            happen. Never miss an opportunity or a critical update again.
          </p>
          <Button>Get Started</Button>
        </motion.div>
        <motion.div
          className="min-w-fit min-h-fit md:flex justify-end px-2"
          initial={{ opacity: 0, transform: "scale(0.8)" }}
          whileInView={{ opacity: 1, transform: "scale(1)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src="/zubiri-exchange-landing/market.png" alt="Market" />
        </motion.div>
      </article>
    </section>
  );
}
