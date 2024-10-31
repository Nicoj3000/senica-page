"use client";

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./motion-transition";
import LanguageSelector from "./languageSwitcher";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <header>
        <div className="container flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <h1 className=" mb-1 text-4xl font-bold text-left">
                Home
              </h1>
            </Link>
            <LanguageSelector />
          </div>
          <div className="flex items-center space-x-4 mr-2">
            {socialNetworks.map(({ icon, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-secondary"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;