import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ApproachCardProps {
  title: string;
  description: string;
  details: string;
  imageSrc: string | StaticImport;
  imageAlt: string;
  imageOnRight?: boolean;
}

const ApproachCard = ({
  title,
  description,
  details,
  imageSrc,
  imageAlt,
  imageOnRight = false,
}: ApproachCardProps) => {
  const ImagePlaceholder = () => (
    <div
      className={`relative overflow-hidden rounded-2xl ${imageOnRight ? `shadow-[1rem_1rem_0_0_var(--secondary)]` : `shadow-[-1rem_1rem_0_0_var(--secondary)]`}`}
    >
      <div className="aspect-[3/2]">
        <Image fill src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );

  const ContentSection = () => (
    <div className="space-y-6">
      <h3
        className="text-3xl font-bold text-navy"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <p className="text-xl leading-relaxed">{description}</p>
      <p className="text-muted-foreground">{details}</p>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-15 items-center mb-20">
      {imageOnRight ? (
        <>
          <div className="space-y-6 max-md:order-2">
            <ContentSection />
          </div>
          <div className="max-md:order-1">
            <ImagePlaceholder />
          </div>
        </>
      ) : (
        <>
          <ImagePlaceholder />
          <ContentSection />
        </>
      )}
    </div>
  );
};

export default ApproachCard;
