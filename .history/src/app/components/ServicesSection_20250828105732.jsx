import dbConnect from "@/lib/dbConnect";
import Image from "next/image";

const ServicesSection = async () => {
  const services = await dbConnect("services")

  return (
    <div className="bg-gray-100 py-16 font-sans">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Our Service Area
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The Majority Have Suffered Alteration In Some Form, By Injected
            Humour, Or Randomised Words Which Don't Look Even Slightly
            Believable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.service_id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-red-500 font-medium">${service.price}</p>
                  <span className="text-red-500 text-2xl cursor-pointer">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Services Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-red-500 text-red-500 px-8 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-colors duration-300">
            More Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
