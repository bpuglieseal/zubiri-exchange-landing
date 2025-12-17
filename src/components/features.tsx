import { motion } from "motion/react";
import FeatureCard from "./feature-card";

export default function Features() {
  return (
    <section id="features" className="mt-32">
      <div className="flex flex-col gap-5 items-center justify-center mt-24">
        <div className="md:max-w-5/12">
          <h2 className="text-2xl md:text-4xl font-semibold text-center">
            Invest without guesswork
          </h2>
        </div>
        <div className="md:max-w-8/12">
          <p className="md:text-xl text-center text-[rgb(204,204,204)] max-sm:px-4">
            Leverage smart automation and data-driven insights to make informed
            decisions.
          </p>
        </div>
      </div>
      <motion.div
        className="mt-8 columns-1 space-y-4 md:columns-2 px-6 md:px-0 md:space-y-0 md:gap-6"
        initial={{ opacity: 0, transform: "translateY(60px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <FeatureCard>
          <div className="space-y-4">
            <h4 className="font-medium text-xl">Transactions automation</h4>
            <p className="text-sm text-[rgb(204,204,204)]">
              Put all your crypto transfers on auto-pilot. Make it easy and
              effortless to track all your investments.
            </p>
            <img
              src="/zubiri-exchange-landing/feat-1.png"
              alt="Automation Illustration"
              className="mt-4 w-full"
            />
          </div>
        </FeatureCard>
        <FeatureCard>
          <div className="flex flex-row gap-4 items-center">
            <img
              src="/zubiri-exchange-landing/feat-3.png"
              alt="Feature Illustration"
              className="mt-4 w-full max-w-32"
            />
            <div className="space-y-4">
              <h4 className="font-medium text-xl">Investments analytics</h4>
              <p className="text-sm text-[rgb(204,204,204)]">
                Review all your transactions and track the payments history in
                one tailored hub.
              </p>
            </div>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div className="flex flex-row gap-4 items-center">
            <img
              src="/zubiri-exchange-landing/feat-2.png"
              alt="Feature Illustration"
              className="mt-4 w-full max-w-32"
            />
            <div className="space-y-4">
              <h4 className="font-medium text-xl">All-in-one integrations</h4>
              <p className="text-sm text-[rgb(204,204,204)]">
                Connect to 70+ enterprise payment systems just in one click.
              </p>
            </div>
          </div>
        </FeatureCard>
        <FeatureCard>
          <div className="space-y-4">
            <img
              src="/zubiri-exchange-landing/feat-4.png"
              alt="Automation Illustration"
              className="mt-4 w-full"
            />
            <h4 className="font-medium text-xl">
              Keep your portfolio on track
            </h4>
            <p className="text-sm text-[rgb(204,204,204)]">
              Set up your investment goals and track the efficiency throughout
              the defined period of time, make sure you are on track.
            </p>
          </div>
        </FeatureCard>
      </motion.div>
    </section>
  );
}
