import Image from "next/image";
import { useTranslation } from "react-i18next";
import SliderServices from "./slider-services";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 mr-2 p-10 py-30 md:py-6 ">
      <div className="flex justify-center md:w-1/2 ">
        <Image
          src="/senica-logo.png"
          alt="Profile pic"
          width={800}
          height={800}
          className="mx-auto md:w-[350px] md:h-[350px] h-[300px] w-[300px] mt-10 "
        />
      </div>
        <SliderServices />

    </div>
  );
};

export default Introduction;