"use client";

import "./utils/i18n";

import { CoverParticles } from "@/app/components/cover-particles";
import Introduction from "@/app/components/introduction";
import TransitionPage from "@/app/components/transition-page";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";
import ContainerPage from "./components/container-page";

export default function Home() {
  return (
    <main>
      <I18nextProvider i18n={i18n}>
        <TransitionPage />
        <CoverParticles />
        <ContainerPage>
          <Introduction />
        </ContainerPage>
      </I18nextProvider>
    </main>
  );
}