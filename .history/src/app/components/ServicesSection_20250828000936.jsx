import React from 'react';

// This component displays a grid of service cards, mimicking the "Our Service Area" section from the provided image.
// It is fully responsive, using a CSS grid for layout and adapting to different screen sizes with Tailwind CSS.
// It is a static component and does not use any state management like useState.

const ServicesSection = () => {
  // Fake data for the service cards based on the provided JSON structure.
  const services = [
    {
      _id: "635a0c0b64a6d231228942ae",
      service_id: "04",
      title: "Engine Oil Change",
      img: "https://i.ibb.co/T2cpBd5/888.jpg",
      price: "20.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
      facility: [
          { name: "Instant Car Services", details: "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum." },
          { name: "24/7 Quality Service", details: "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum." },
          { name: "Easy Customer Service", details: "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum." },
          { name: "Quality Cost Service", details: "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum." }
      ]
    },
    // Adding more fake data for a full grid display.
    {
      _id: "635a0c0b64a6d231228942af",
      service_id: "05",
      title: "Wheel Alignment",
      img: "https://i.ibb.co/30h111f/999.jpg",
      price: "35.00",
      description: "This is a brief description for wheel alignment.",
      facility: []
    },
    {
      _id: "635a0c0b64a6d231228942b0",
      service_id: "06",
      title: "Brake Repair",
      img: "https://i.ibb.co/yQ68P8w/777.jpg",
      price: "50.00",
      description: "This is a brief description for brake repair.",
      facility: []
    },
    {
      _id: "635a0c0b64a6d231228942b1",
      service_id: "07",
      title: "Suspension Check",
      img: "https://i.ibb.co/R97V65W/666.jpg",
      price: "25.00",
      description: "This is a brief description for suspension check.",
      facility: []
    },
    {
      _id: "635a0c0b64a6d231228942b2",
      service_id: "08",
      title: "AC System Service",
      img: "https://i.ibb.co/tCg3r0P/555.jpg",
      price: "45.00",
      description: "This is a brief description for AC system service.",
      facility: []
    },
    {
      _id: "635a0c0b64a6d231228942b3",
      service_id: "09",
      title: "Tire Rotation",
      img: "https://i.ibb.co/rK5c81m/444.jpg",
      price: "15.00",
      description: "This is a brief description for tire rotation.",
      facility: []
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
            <div key={service.service_id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={service.img} alt={service.title} className="w-full h-48 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-red-500 font-medium">${service.price}</p>
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

export default ServicesSection;
