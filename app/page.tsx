"use client"




import "./utils/i18n";


import { CoverParticles } from "@/app/components/cover-particles";
import Introduction from "@/app/components/introduction";
import TransitionPage from "@/app/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}