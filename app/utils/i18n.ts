import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      titleservice1: "Maintenance of air conditioners",
      titleservice2: "Air conditioning installation",
      titleservice3: "Construction of cold rooms",
      titleservice4: "Design of refrigeration systems",
      titleservice5: "Maintenance of air conditioners",
      titleservice6: "Air conditioning installation",
      titleservice7: "Construction of cold rooms",
      titleservice8: "Design of refrigeration systems",
      titleservice9: "Maintenance of air conditioners",
      titleservice10: "Air conditioning installation",
      titleservice11: "Construction of cold rooms",
      titleservice12: "Design of refrigeration systems",
      titleourService: "Our services",
      services: {
        maintenance: {
          title: "Air conditioning maintenance",
          description: "We offer maintenance services for air conditioning equipment, we have a team of professionals who will help you keep your equipment in optimal conditions.",
        },
        installation: {
          title: "Air conditioning installation",
          description: "We offer installation services for air conditioning equipment, we have a team of professionals who will help you keep your equipment in optimal conditions.",
        },
        construction: {
          title: "Construction of cold rooms",
          description: "We offer construction services for cold rooms, we have a team of professionals who will help you keep your equipment in optimal conditions.",
        },
        goodCleaning: {
          title: "Good cleaning",
          description: "We offer cleaning services for air conditioning equipment, we have a team of professionals who will help you keep your equipment in optimal conditions.", 
        },
      },
    },
  },
  es: {
    translation: {
      titleservice1: "Mantenimiento de aires acondicionados",
      titleservice2: "Instalación de aires acondicionados",
      titleservice3: "Construcción de cámaras frigoríficas",
      titleservice4: "Diseño de sistemas de refrigeración",
      titleservice5: "Mantenimiento de aires acondicionados",
      titleservice6: "Instalación de aires acondicionados",
      titleservice7: "Construcción de cámaras frigoríficas",
      titleservice8: "Diseño de sistemas de refrigeración",
      titleservice9: "Mantenimiento de aires acondicionados",
      titleservice10: "Instalación de aires acondicionados",
      titleservice11: "Construcción de cámaras frigoríficas",
      titleservice12: "Diseño de sistemas de refrigeración",
      titleourService: "Nuestros servicios",
      services: {
        maintenance: {
          title: "Mantenimiento de aires acondicionados",
          description: "Ofrecemos servicios de mantenimiento para equipos de aire acondicionado, contamos con un equipo de profesionales que le ayudarán a mantener su equipo en condiciones óptimas.",
        },
        installation: {
          title: "Instalación de aires acondicionados",
          description: "Ofrecemos servicios de instalación para equipos de aire acondicionado, contamos con un equipo de profesionales que le ayudarán a mantener su equipo en condiciones óptimas.",
        },
        construction: {
          title: "Construcción de cámaras frigoríficas",
          description: "Ofrecemos servicios de construcción para cámaras frigoríficas, contamos con un equipo de profesionales que le ayudarán a mantener su equipo en condiciones óptimas.",
        },
        goodCleaning: {
          title: "Buena limpieza",
          description: "Ofrecemos servicios de limpieza para equipos de aire acondicionado, contamos con un equipo de profesionales que le ayudarán a mantener su equipo en condiciones óptimas.", 
        },
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;