import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faFacebook,
    faInstagram,
    faWhatsapp,
    
} from "@fortawesome/free-brands-svg-icons"

import { faHome, faScrewdriver,   } from "@fortawesome/free-solid-svg-icons";

import {
    Laptop,
    Server,
    AirVent,
    AirVentIcon,
    HomeIcon,
    UserRound,
    BookText,
    CodeSquare,
    Speech
    
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
        src: "https://wa.link/rjba0v",
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

  export const itemsNavbar = [
    {
      id: 1,
      title: "Home",
      icon: <FontAwesomeIcon icon={faHome} size="1x"/>,
      link: "/",
    },
    {
      id: 3,
      title: "Book",
      icon: <FontAwesomeIcon icon={faScrewdriver} size="1x"/>,
      link: "/services",
    },


  ];
