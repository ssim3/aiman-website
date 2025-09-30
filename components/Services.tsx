import { Home, LucideDollarSign, Camera, LucideIcon } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

// ServiceCard component
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  accentColor: "primary" | "secondary";
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  image,
  accentColor,
}: ServiceCardProps) => {
  const colorClasses = {
    primary: {
      bg: "bg-red-100",
      hoverBg: "group-hover:bg-[var(--primary)]",
      icon: "text-[var(--primary)]",
      hoverIcon: "group-hover:text-white",
    },
    secondary: {
      bg: "bg-blue-100",
      hoverBg: "group-hover:bg-[var(--secondary)]",
      icon: "text-[var(--secondary)]",
      hoverIcon: "group-hover:text-white",
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Image */}
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 font-poppins">{image}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div
            className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center ${colors.hoverBg} transition-colors duration-300`}
          >
            <Icon
              className={`h-6 w-6 ${colors.icon} ${colors.hoverIcon} transition-colors duration-300`}
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// ServiceSection component
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

interface ServiceSectionProps {
  title: string;
  services: Service[];
  accentColor: "primary" | "secondary";
  accentText: string;
}

const ServiceSection = ({
  title,
  services,
  accentColor,
  accentText,
}: ServiceSectionProps) => {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="ml-2 text-4xl font-bold">
        {title}{" "}
        <span className={`text-[var(--${accentColor})]`}>{accentText}</span>
      </h3>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            image={service.image}
            accentColor={accentColor}
          />
        ))}
      </div>
    </div>
  );
};

// Main Services component
const Services = () => {
  const buyers_service = [
    {
      icon: Home,
      title: "Home Buying",
      description:
        "Find your perfect home with personalized service and expert guidance throughout the entire buying process.",
      image: "Home Buying Image",
    },
    {
      icon: LucideDollarSign,
      title: "Home Selling",
      description:
        "Maximize your property's value with strategic pricing, marketing, and negotiation expertise.",
      image: "Home Selling Image",
    },
    {
      icon: Camera,
      title: "Property Marketing",
      description:
        "Professional photography, virtual tours, and multi-platform marketing to showcase your property.",
      image: "Property Marketing Image",
    },
  ];

  const sellers_service = [
    {
      icon: Home,
      title: "Home Buying",
      description:
        "Find your perfect home with personalized service and expert guidance throughout the entire buying process.",
      image: "Home Buying Image",
    },
    {
      icon: LucideDollarSign,
      title: "Home Selling",
      description:
        "Maximize your property's value with strategic pricing, marketing, and negotiation expertise.",
      image: "Home Selling Image",
    },
    {
      icon: Camera,
      title: "Property Marketing",
      description:
        "Professional photography, virtual tours, and multi-platform marketing to showcase your property.",
      image: "Property Marketing Image",
    },
  ];

  return (
    <section id="services" className="p-10">
      <div className="relative flex flex-col gap-20 max-w-7xl mx-auto">
        <SectionHeading
          topOne="top-10"
          topTwo="top-40"
          rightOne="right-20"
          rightTwo="left-20"
          title="Making Every Move Smarter —<br/> Whether Buying or Selling"
          margin="my-10"
          width="w-6"
          height="h-6"
          description="Making Every Move Smarter — Whether Buying or Selling"
        />

        <ServiceSection
          title="For"
          services={buyers_service}
          accentColor="primary"
          accentText="Buyers"
        />

        <ServiceSection
          title="For"
          services={sellers_service}
          accentColor="secondary"
          accentText="Sellers"
        />
      </div>
    </section>
  );
};

export default Services;
