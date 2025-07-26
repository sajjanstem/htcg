import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMobileAlt, FaGamepad, FaGlobe, FaSearch, FaPaintBrush, FaCode } from "react-icons/fa";

// Define a type for icon components to satisfy TypeScript
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;


// Wrapper component to render icons safely
const IconWrapper: React.FC<{ Icon: IconComponent; className?: string }> = ({ Icon, className }) => (
  <Icon className={className} />
);

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter] relative overflow-hidden">
      <Helmet>
        <title>HiTech Consulting Group</title>
        <meta
          name="description"
          content="HiTech Consulting Group - Empowering Innovation Through Technology"
        />
        <meta
          name="keywords"
          content="HiTech Consulting, Technology Solutions, Software Development, AI, Blockchain, App Development, Web Development"
        />
        <meta name="author" content="HiTech Consulting Group" />
      </Helmet>

      {/* Services Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-12">
            <div data-aos="fade-right">
              <h5 className="text-yellow-500 flex items-center text-lg font-semibold">
                <img
                  src={process.env.PUBLIC_URL + "/assets/slideIcon.png"}
                  alt="icon"
                  className="mr-2"
                />
                WHAT WE OFFER
              </h5>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Exceptional IT Solutions</h2>
            </div>            
        <Link
          to="/services"
          className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300"
              data-aos="fade-up"
        >
          View All Services →
        </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaMobileAlt as IconComponent,
                title: "App Development",
                description:
                  "Create mobile apps that users can't wait to download. We craft bespoke mobile applications focused on innovation, usability, and high performance.",
              },
              {
                icon: FaGamepad as IconComponent,
                title: "Game Development",
                description:
                  "Create interactive and immersive gaming experiences tailored to your needs. Our games emphasize creativity, performance, and user engagement.",
              },
              {
                icon: FaGlobe as IconComponent,
                title: "Web Development",
                description:
                  "Transform your ideas into powerful websites. We design intuitive, responsive, and scalable web applications to maximize business impact.",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md"
                data-aos="zoom-in-up"
                data-aos-delay={index * 200}
              >
                <IconWrapper Icon={service.icon} className="text-yellow-500 text-4xl mb-4" />
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 relative bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-right">
              {/* Transparent decorative image (front and to the left) */}
              <img
                src={process.env.PUBLIC_URL + "/assets/aboutImage2.png"}
                alt="About us decorative"
                className="absolute bottom-0 left-0 w-1/2 h-auto rounded-xl shadow-lg transform -translate-x-12 -translate-y-6 z-10"
              />

              {/* Main background image */}
              <img
                src={process.env.PUBLIC_URL + "/assets/aboutImage1.png"}
                alt="About us"
                className="relative rounded-xl shadow-lg w-[85%] h-auto max-h-[500px] object-cover z-20 transform translate-x-6"
              />
            </div>

            <div data-aos="fade-left">
              <h5 className="text-yellow-500 flex items-center text-lg font-semibold">
                <img
                  src={process.env.PUBLIC_URL + "/assets/slideIcon.png"}
                  alt="icon"
                  className="mr-2"
                />
                ABOUT US
              </h5>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Empowering Your Business with Innovative IT & AI Solutions
              </h2>
              <p className="text-gray-400 mb-4">
                HiTech Consulting Group is a technology company offering a suite of IT services: web/app/game development, digital marketing, and more. Our mission is to empower businesses to harness technology to achieve their goals.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-4 shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h4 className="font-bold text-white">Premier Offerings</h4>
                  <p className="text-gray-400">Top-tier IT services with modern AI-powered solutions.</p>
                </div>
                <div
                  className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-4 shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h4 className="font-bold text-white">24/7 Call Support</h4>
                  <p className="text-gray-400">We provide continuous support for all client needs.</p>
                </div>
              </div>
              <Link
                to="/aboutus"
                className="inline-block mt-6 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Explore More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      {/* <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "https://via.placeholder.com/40x40?text=Year", count: "2019", label: "Found Year" },
            { icon: "https://via.placeholder.com/40x40?text=Project", count: "50+", label: "Finished Projects" },
            { icon: "https://via.placeholder.com/40x40?text=Expert", count: "50+", label: "Skilled Experts" },
            { icon: "https://via.placeholder.com/40x40?text=Post", count: "590+", label: "Media Posts" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <img src={item.icon} alt="icon" className="w-10 h-10 mb-2" />
              <h3 className="text-3xl font-bold">{item.count}</h3>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Work Process Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 text-center">
          <h5 className="text-yellow-500 flex justify-center items-center text-lg font-semibold mb-2" data-aos="fade-up">
            <img
              src={process.env.PUBLIC_URL + "/assets/slideIcon.png"}
              alt="icon"
              className="mr-2"
            />
            Work Process
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up" data-aos-delay="200">
            How We Build Your Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: FaSearch as IconComponent,
                title: "Research",
                description:
                  "Throughout the project lifecycle, we gather, analyze, document, and validate requirements to ensure the final solution meets stakeholder needs.",
              },
              {
                icon: FaPaintBrush as IconComponent,
                title: "Design and Mockup",
                description:
                  "Turning requirements into tangible prototypes that can be reviewed and refined before development.",
              },
              {
                icon: FaCode as IconComponent,
                title: "Development",
                description:
                  "From architecture to full-scale implementation, we build high-performance and scalable tech solutions.",
              },
            ].map((process, index) => (
              <div
                key={process.title}
                className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md"
                data-aos="zoom-in-up"
                data-aos-delay={index * 200}
              >
                <IconWrapper Icon={process.icon} className="text-yellow-500 text-4xl mb-4 mx-auto" />
                <h4 className="text-xl font-semibold mb-2">{process.title}</h4>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <div className="flex flex-col items-center py-12 border-t border-gray-700 font-inter px-4 md:px-8" data-aos="zoom-in">
        <a href="mailto:info@hitechconsultinggroup.com" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 px-10 rounded-lg hover:opacity-90 transition duration-300 text-base md:text-lg w-full max-w-xs md:max-w-sm">
            Connect With Our Team
          </button>
        </a>
        <div className="text-gray-500 mt-4 italic text-sm md:text-base text-center">
          Powered by visionaries, built for scale — where innovation meets execution.
        </div>
      </div>
    </div>
  );
};

export default Home;