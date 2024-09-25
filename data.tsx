import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faFacebook,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"

import {
    Laptop,
    Server,
    AirVent,
    AirVentIcon
    
  } from "lucide-react";



export const socialNetworks = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faFacebook} size="2x"/>,
        src: "https://www.facebook.com/",
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faInstagram}  size="2x"/>,
        src: "https://www.instagram.com/",
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faWhatsapp} size="2x"/>,
        src: "https://web.whatsapp.com/",
    },
]

export const serviceData = [
    {
      icon: <Laptop />,
      titleKey: "services.maintenance.title",
      descriptionKey: "services.maintenance.description",
    },
    {
      icon: <Server />,
      titleKey: "services.installation.title",
      descriptionKey: "services.installation.description",
    },
    {
      icon: <AirVent />,
      titleKey: "services.construction.title",
      descriptionKey: "services.construction.description",
    },
    {
      icon: <AirVentIcon />,
      titleKey: "services.goodCleaning.title",
      descriptionKey: "services.goodCleaning.description",
    },
  ];