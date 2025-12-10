import { Bell, ChartSpline, Wallet, File, Brain, Lock } from "lucide-react";
import Card from "./card";
import Button from "./button";
import { motion } from "motion/react";

export default function Benefits() {
  return (
    <section id="benefits" className="mt-32">
      <div className="flex flex-col gap-5 items-center justify-center mt-24">
        <div className="max-w-5/12">
          <h2 className="text-4xl font-semibold text-center">
            Powerful features built for crypto confidence
          </h2>
        </div>
        <div className="max-w-8/12">
          <p className="text-xl text-center text-[rgb(204,204,204)]">
            Streamline your experience with tools designed to keep you secure,
            informed, and in control — every step of the way.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <motion.div
          className="columns-3 gap-3 items-start justify-center grid grid-cols-3"
          initial={{ opacity: 0, transform: "translateY(60px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.85 }}
        >
          <motion.div>
            <Card
              icon={<Wallet />}
              title="Instant transfers"
              description="Send and receive crypto in seconds, without delays or bottlenecks."
            />
          </motion.div>
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
      <div className="mt-24 columns-2 flex gap-6 items-center">
        <motion.div
          className="space-y-6 pr-6"
          initial={{ opacity: 0, transform: "translateX(-60px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.85 }}
        >
          <h2 className="text-4xl font-semibold">
            Stay on top of market moves in real time
          </h2>
          <p className="text-xl text-[rgb(204,204,204)]">
            Track live price changes, market shifts, and key events as they
            happen. Never miss an opportunity or a critical update again.
          </p>
          <Button>Get Started</Button>
        </motion.div>
        <motion.div
          className="hidden min-w-fit min-h-fit md:flex justify-end"
          initial={{ opacity: 0, transform: "scale(0.8)" }}
          whileInView={{ opacity: 1, transform: "scale(1)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.85 }}
        >
          <img src="/zubiri-exchange-landing/market.png" alt="Market" />
        </motion.div>
      </div>
    </section>
  );
}
