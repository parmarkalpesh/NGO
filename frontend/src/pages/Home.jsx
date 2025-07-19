import React from "react";

function Home() {
  const Gallary = [
    {
      image: "/asset/img1.png",
    },
    {
      image: "/asset/img2.png",
    },
    {
      image: "/asset/img3.png",
    },
    {
      image: "/asset/img4.png",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <img
          src="/asset/img1.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover blur-xs brightness-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

        <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
              Welcome to NGOConnect
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 animate-fade-in-up">
              Empowering change by connecting NGOs with passionate volunteers
              and generous donors
            </p>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#004B8D]">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {Gallary.map((val, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 animate-fade-in-up"
                >
                  <img
                    src={val.image}
                    alt={val.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AboutSection */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="w-full">
            <img
              src="/asset/img1.png"
              alt="About NGOConnect"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#004B8D] mb-4">About Us</h2>
            <p className="text-lg text-gray-700">
              <span className="block mb-4">
                <strong>NGOConnect</strong> is dedicated to bridging the gap
                between NGOs and individuals who want to make a difference.
              </span>
              <span className="block mb-4">
                Our platform enables seamless connections between volunteers and
                nonprofits in need, while helping donors support meaningful
                causes with transparency and impact.
              </span>
              <span className="block">
                Whether you're looking to donate, volunteer, or simply learn
                about initiatives in your community, NGOConnect empowers you to
                take action where it matters most.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx="true">{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 0.2s;
          animation-fill-mode: backwards;
        }
      `}</style>
    </>
  );
}
export default Home;
