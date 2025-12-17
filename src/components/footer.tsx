import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { IconButton } from "@/components/button";

export default function Footer() {
  return (
    <footer className="container mx-auto md:max-w-10/12 2xl:w-7/12 mt-32 mb-8 text-center text-sm text-[rgba(255,255,255,0.6)] py-6">
      <div className="flex md:justify-between md:flex-row flex-col justify-center items-center">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center space-x-2.5">
            <img
              src="/zubiri-exchange-landing/logo.png"
              alt="Logo Page"
              className="size-8 rounded-xl"
            />
            <h4 className="text-base font-semibold">Zubiri Exchange</h4>
          </div>
          <p className="text-base">Take control of your crypto investments.</p>
          <div className="flex flex-row gap-4 mt-2 md:mt-12 justify-start">
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Youtube />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Linkedin />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-12 max-sm:justify-between max-sm:mt-6 max-sm:gap-6">
          <nav>
            <h3 className="text-xl font-medium text-[rgb(204,204,204)]">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-4 justify-start items-start">
              <li>
                <a
                  href="#"
                  className="text-sm text-white font-normal opacity-80 transition-opacity hover:opacity-100"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white font-normal opacity-80 transition-opacity hover:opacity-100"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white font-normal opacity-80 transition-opacity hover:opacity-100"
                >
                  Features
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <nav>
              <h3 className="text-xl font-medium text-[rgb(204,204,204)]">
                Information
              </h3>
              <ul className="mt-4 flex flex-col gap-4 justify-start items-start">
                <li>
                  <a
                    href="#"
                    className="text-sm text-white font-normal opacity-80 transition-opacity hover:opacity-100"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white font-normal opacity-80 transition-opacity hover:opacity-100"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-white font-normal opacity-80 transition-opacity hover:opacity-100"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </nav>
        </div>
      </div>
    </footer>
  );
}
