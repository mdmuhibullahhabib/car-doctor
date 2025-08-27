import React from 'react';

// This component displays a grid of service cards, mimicking the "Our Service Area" section from the provided image.
// It is fully responsive, using a CSS grid for layout and adapting to different screen sizes with Tailwind CSS.
// It is a static component and does not use any state management like useState.

const = () => {
  // Fake data for the service cards.
  const services = [
    {
      id: 1,
      image: "https://placehold.co/400x300/a0a0a0/202020?text=Electrical+System",
      name: "Electrical System",
      price: "$20.00",
    },
    {
      id: 2,
      image: "https://placehold.co/400x300/a0a0a0/202020?text=Engine+Diagnostics",
      name: "Engine Diagnostics",
      price: "$20.00",
    },
    {
      id: 3,
      image: "https://placehold.co/400x300/a0a0a0/202020?text=Auto+Car+Repair",
      name: "Auto Car Repair",
      price: "$20.00",
    },
    {
      id: 4,
      image: "https://placehold.co/400x300/a0a0a0/202020?text=Electrical+System",
      name: "Electrical System",
      price: "$20.00",
    },
    {
      id: 5,
      image: "https://placehold.co/400x300/a0a0a0/202020?text=Engine+Diagnostics",
      name: "Engine Diagnostics",
      price: "$20.00",
    },
    {
      id: 6,
      image: "https://placehold.co/400x300/a0a0a0/202020?text=Auto+Car+Repair",
      name: "Auto Car Repair",
      price: "$20.00",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 font-sans">
      <div className="container mx-auto px-4">
        {/* Section title and subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Service Area</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={service.image} alt={service.name} className="w-full h-48 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-red-500 font-medium">{service.price}</p>
                  {/* Unicode character for right arrow */}
                  <span className="text-red-500 text-2xl cursor-pointer">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Services button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-red-500 text-red-500 px-8 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-colors duration-300">
            More Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection