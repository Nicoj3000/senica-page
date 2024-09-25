"use client";

import "./utils/i18n";

import { CoverParticles } from "@/app/components/cover-particles";
import Introduction from "@/app/components/introduction";
import TransitionPage from "@/app/components/transition-page";
import LanguageSelector from "./components/languageSwitcher";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <LanguageSelector /> 
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}