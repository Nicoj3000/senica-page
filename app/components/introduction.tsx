import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SliderServices from "./slider-services";
import ContainerPage from './container-page';


const Introduction = () => {
  const { t } = useTranslation();

  return (
    <ContainerPage>
      <div className="z-20 w-full bg-darkBg/60 flex justify-center items-center">
        <div className="grid items-center h-full p-10 py-20 md:py-6 md:grid-cols-2 gap-10">
          <div className="flex justify-center">
            <Image src="/senica-logo.png" alt="Profile pic" width={800} height={800} className="mx-auto md:w-[350px] md:h-[350px] h-[250px] w-[250px]" />
          </div>
          <div className="flex flex-col justify-center max-w-xl mx-auto">
            <div className="mt-6">
              <SliderServices />
            </div>
          </div>
        </div>
      </div>
    </ContainerPage>
  );
};

export default Introduction;