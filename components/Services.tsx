import { Home, LucideDollarSign, Camera } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const Services = () => {
  const services = [
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
      <div className="relative flex flex-col gap-10 max-w-7xl mx-auto">
        <SectionHeading
          topOne="top-10"
          topTwo="top-40"
          rightOne="right-20"
          rightTwo="left-20"
          title="My Services"
          margin="my-10"
          width="w-6"
          height="h-6"
          description="Find out how I work to best serve your needs."
        />

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-poppins">
                  {service.image}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-[var(--primary)] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
