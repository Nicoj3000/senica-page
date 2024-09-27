"use client";

import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/app/utils/i18n";
import TransitionPage from "@/app/components/transition-page";
import PortfolioBox from "@/app/components/portfolio";
import ContainerPageServices from "@/app/components/container-page-services";
import { CoverParticles } from "@/app/components/cover-particles";

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    { id: 1, title: "titleservice1", image: "/mant.png" },
    { id: 2, title: "titleservice2", image: "/instala.png" },
    { id: 3, title: "titleservice3", image: "/Cuarto.png" },
    { id: 4, title: "titleservice4", image: "/diseno.png" },
    { id: 5, title: "titleservice5", image: "/Cuarto.png" },
    { id: 6, title: "titleservice6", image: "/Cuarto.png" },
    { id: 7, title: "titleservice7", image: "/Cuarto.png" },
    { id: 8, title: "titleservice8", image: "/Cuarto.png" },
    { id: 9, title: "titleservice9", image: "/Cuarto.png" },
    { id: 10, title: "titleservice10", image: "/Cuarto.png" },
    { id: 11, title: "titleservice11", image: "/Cuarto.png" },
    { id: 12, title: "titleservice12", image: "/Cuarto.png" },
  ];

  return (
    <I18nextProvider i18n={i18n}>
      <CoverParticles />

      <ContainerPageServices>
        <TransitionPage />
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-3xl font-bold text-center md:text-3xl md:mb-5">
            {t("titleourService")}
          </h1>
          <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-3">
            {services.map((service) => (
              <PortfolioBox key={service.id} data={service} />
            ))}
          </div>
        </div>
      </ContainerPageServices>
    </I18nextProvider>
  );
};

export default ServicesPage;