import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

interface ExperienceCardProps {
  className: string;
  title: string;
  subtitle: string;
  text: string;
  imageSrc: string;
  imageClassName?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  className,
  title,
  subtitle,
  text,
  imageSrc,
  imageClassName = "",
}) => {
  return (
    <Card
      isBlurred
      className={`border-none bg-opacity-60 backdrop-blur-md max-w-[610px] mt-10 ${className}`}
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className={`object-contain ${imageClassName}`}
              height={200}
              src={imageSrc}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">{title}</h3>
                <p className="text-small text-foreground/80">{subtitle}</p>
                <h1 className="text-large font-medium mt-2">{text}</h1>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
