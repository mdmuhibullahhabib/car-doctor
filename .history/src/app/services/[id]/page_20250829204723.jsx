import dbConnect, { collectionNamesobj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { FaCheckCircle, FaFileDownload, FaPhoneAlt } from "react-icons/fa";

const ServiceDetailsPage = async ({ params }) => {
  const p = await params;
  const res= await fetch(`http://localhost:3000/api/service/${p.id}`)

  if (!data) return <p className="text-center mt-10">Service not found!</p>;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-52 bg-gray-800 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {data.title}
        </h1>
        <span className="absolute bottom-4 px-4 py-2 bg-red-600 text-white rounded-lg">
          Home / {data.title}
        </span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-16 py-8">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <img
            src={data.img}
            alt={data.title}
            className="rounded-xl shadow-lg w-full"
          />
          <h2 className="text-2xl font-bold mt-6">{data.title}</h2>
          <p className="text-gray-600 mt-3">{data.description}</p>

          {/* Service Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {data.facility.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.details}</p>
              </div>
            ))}
          </div>

          {/* Steps Section */}
          <div className="text-center my-10">
            <h2 className="text-2xl font-bold mb-6">3 Simple Steps to Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["STEP ONE", "STEP TWO", "STEP THREE"].map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white shadow-md rounded-xl border"
                >
                  <FaCheckCircle className="text-red-600 text-3xl mx-auto mb-3" />
                  <h3 className="font-bold">{step}</h3>
                  <p className="text-gray-600 mt-2">
                    Follow this step to get your service done easily.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Services List */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {["Full Car Repair", "Engine Repair", "Automatic Services", "Battery Charge"].map((service, i) => (
                <li
                  key={i}
                  className="p-2 bg-white rounded-lg hover:bg-red-50 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div className="bg-black text-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Download</h3>
            <button className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg w-full justify-center">
              <FaFileDownload /> Download Brochure
            </button>
          </div>

          {/* Contact */}
          <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-semibold mb-4">Car Doctor</h3>
            <p className="text-gray-700">
              Need Help? We are here to assist you 24/7.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 flex items-center mx-auto gap-2">
              <FaPhoneAlt /> Call Us
            </button>
          </div>

          {/* Price & Checkout */}
          <div className="bg-white p-6 shadow-md rounded-lg mt-6">
            <h3 className="text-xl font-bold">Price ${data.price}</h3>
            <button className="w-full bg-red-600 text-white py-2 mt-4 rounded-lg hover:bg-red-700">
              Proceed Checkout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
