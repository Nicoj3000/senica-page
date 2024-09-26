import Image from "next/image";
import { useTranslation } from "react-i18next";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image } = data;
  const { t } = useTranslation();

  return (
    <div key={id} className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl">{t(title)}</h3>
      <Image
        src={image}
        alt={t(title)}
        width={300}
        height={300}
        className="w-full md:w-[300px] rounded-2xl h-auto"
      />
    </div>
  );
};

export default PortfolioBox;