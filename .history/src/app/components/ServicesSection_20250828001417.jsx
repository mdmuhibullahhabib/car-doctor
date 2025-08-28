import React from 'react';
// We are reverting to a standard <img> tag because the next/image component cannot be resolved in this environment.
// This ensures the component remains functional.

// Hic est pars reutilis pro una charta servitii.
// Proponitur ut adhibeatur intra partem ServicesSection.
const ServiceCard = ({ service }) => {
  return (
    <div key={service.service_id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={service.img}
        alt={service.title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-red-500 font-medium">${service.price}</p>
          {/* Signum Unicode pro sagitta dextra */}
          <span className="text-red-500 text-2xl cursor-pointer">&rarr;</span>
        </div>
      </div>
    </div>
  );
};

// Haec pars ostendit tabulam chartarum servitii, imitatio areae "Our Service Area".
// Est pars per se contenta, parata ut adhibeatur in pagina vel sectione applicationis Next.js.
// Est omnino responsiva, utens craticula CSS pro dispositione et adaptans ad varias magnitudines scrinii cum Tailwind CSS.
const ServicesSection = () => {
  // Data ficta pro chartis servitii, fundata in structura JSON data.
  const services = [
    {
        
        "service_id": "04",
        "title": "Engine Oil Change",
        "img": "https://i.ibb.co/T2cpBd5/888.jpg",
        "price": "20.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        
        "service_id": "05",
        "title": "Battery Charge",
        "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
        "price": "20.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        
        "service_id": "01",
        "title": "Full car Repair",
        "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
        "price": "200.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        
        "service_id": "02",
        "title": "Engine Repair",
        "img": "https://i.ibb.co/5MvmD2g/88.jpg",
        "price": "150.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        
        "service_id": "03",
        "title": "Automatic Services",
        "img": "https://i.ibb.co/wh7t3N3/555.jpg",
        "price": "30.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        
        "service_id": "06",
        "title": "Electrical System",
        "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
        "price": "20.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    }
]


  return (
    <div className="bg-gray-100 py-16 font-sans">
      <div className="container mx-auto px-4">
        {/* Sectio titulus et subtitulus */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Service Area</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
          </p>
        </div>

        {/* Tabula chartarum servitii */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.service_id} service={service} />
          ))}
        </div>

        {/* Puga plus servitiorum */}
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
