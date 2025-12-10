import { motion } from "motion/react";
import Badget from "./badget";
import Button from "./button";

export default function Overview() {
  return (
    <section id="overview" className="mt-32">
      <div className="flex flex-col gap-5 items-center justify-center mt-24">
        <div className="max-w-5/12">
          <h2 className="text-4xl font-semibold text-center">
            Redefining the future of investing solutions
          </h2>
        </div>
        <div className="max-w-8/12">
          <p className="text-xl text-center text-[rgb(204,204,204)]">
            Harness cutting-edge technology built to the highest industry
            standard, setting a new benchmark for modern investing.
          </p>
        </div>
      </div>
      <div className="mt-12 space-y-20 px-8">
        <article className="columns-2 gap-12 flex items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, transform: "translateX(-60px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.85 }}
          >
            <div className="flex flex-row space-x-6">
              <Badget>Global Trading</Badget>
              <Badget>Market Access</Badget>
            </div>
            <h3 className="text-[40px]">
              Instant access to all markets and stocks
            </h3>
            <p>
              Seamlessly access real-time data across crypto and stock markets
              instantly, without switching platforms.
            </p>
            <Button>Get Started</Button>
          </motion.div>
          <motion.div
            className="hidden min-w-fit min-h-fit md:flex justify-end"
            initial={{ opacity: 0, transform: "translateX(60px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.85 }}
          >
            <img
              src="/zubiri-exchange-landing/stocks.png"
              alt="Stocks.png"
              className="rounded-xl object-cover"
            />
          </motion.div>
        </article>
        <article className="columns-2 gap-12 flex items-center">
          <motion.div
            className="hidden min-w-fit min-h-fit md:flex justify-end"
            initial={{ opacity: 0, transform: "translateX(-60px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.85 }}
          >
            <img
              src="/zubiri-exchange-landing/time.png"
              alt="Stocks.png"
              className="rounded-xl object-cover"
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, transform: "translateX(60px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.85 }}
          >
            <div className="flex flex-row space-x-6">
              <Badget>Smart insights</Badget>
              <Badget>Actionable data</Badget>
            </div>
            <h3 className="text-[40px]">
              Data that drives smart strategic decisions
            </h3>
            <p>
              Analyse your investments from every angle. Dive into performance
              and returns, and easily filter your data.
            </p>
            <Button>Get Started</Button>
          </motion.div>
        </article>
        <article className="columns-2 gap-12 flex items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, transform: "translateX(-60px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.85 }}
          >
            <div className="flex flex-row space-x-6">
              <Badget>Fast payments</Badget>
              <Badget>Instant access</Badget>
            </div>
            <h3 className="text-[40px]">
              Effortless payments & instant requests
            </h3>
            <p>
              Easily send or request payments from anyone, just like you would
              with your bank with support for 100+ currencies.
            </p>
            <Button>Get Started</Button>
          </motion.div>
          <motion.div
            className="hidden min-w-fit min-h-fit md:flex justify-end"
            initial={{ opacity: 0, transform: "translateX(60px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.85 }}
          >
            <img
              src="/zubiri-exchange-landing/payments.png"
              alt="Payments.png"
              className="rounded-xl object-cover"
            />
          </motion.div>
        </article>
      </div>
    </section>
  );
}
