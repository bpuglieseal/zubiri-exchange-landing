import { motion } from "motion/react";
import Badget from "./badget";
import Button from "./button";

export const Article = ({
  title,
  description,
  image,
  badgets,
}: {
  title: string;
  description: string;
  image: string;
  badgets: string[];
}) => {
  return (
    <article>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, transform: "translateX(-20px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.85 }}
      >
        <div className="flex flex-row space-x-3 md:space-x-6">
          {badgets.map((badget) => (
            <Badget key={badget}>{badget}</Badget>
          ))}
        </div>
        <h5 className="text-2xl md:text-[40px] text-left pr-2 md:pr-0">
          {title}
        </h5>
        <p>{description}</p>
        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>
      </motion.div>
      <motion.div
        className="min-w-fit min-h-fit md:flex justify-end"
        initial={{ opacity: 0, transform: "translateX(20px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.85 }}
      >
        <img
          src={image}
          alt={title}
          className="rounded-xl object-cover w-full"
        />
      </motion.div>
    </article>
  );
};

const articles = [
  {
    title: "Instant access to all markets and stocks",
    description:
      "Seamlessly access real-time data across crypto and stock markets instantly, without switching platforms.",
    image: "/zubiri-exchange-landing/stocks.png",
    badgets: ["Global Trading", "Market Access"],
  },
  {
    title: "Data that drives smart strategic decisions",
    description:
      "Analyse your investments from every angle. Dive into performance and returns, and easily filter your data.",
    image: "/zubiri-exchange-landing/time.png",
    badgets: ["Smart insights", "Actionable data"],
  },
  {
    title: "Effortless payments & instant requests",
    description:
      "Easily send or request payments from anyone, just like you would with your bank with support for 100+ currencies.",
    image: "/zubiri-exchange-landing/payments.png",
    badgets: ["Fast payments", "Instant access"],
  },
];

export default function Overview() {
  return (
    <section id="overview" className="mt-32">
      <div className="flex flex-col gap-3 items-center justify-center mt-24">
        <div className="w-full md:max-w-5/12">
          <h2 className="text-2xl font-semibold text-center">
            Redefining the future of investing solutions
          </h2>
        </div>
        <div className="max-w-10/12 md:max-w-8/12">
          <p className="text-base text-center text-[rgb(204,204,204)]">
            Harness cutting-edge technology built to the highest industry
            standard, setting a new benchmark for modern investing.
          </p>
        </div>
      </div>
      <div className="mt-12 space-y-16 px-8">
        {articles.map((article) => (
          <Article
            key={article.title}
            title={article.title}
            description={article.description}
            image={article.image}
            badgets={article.badgets}
          />
        ))}
      </div>
    </section>
  );
}
