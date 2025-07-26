import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck, FaGlobe, FaMobileAlt, FaApple, FaClock, FaTv, FaMicrochip } from "react-icons/fa";

// Define a type for the icon prop to satisfy TypeScript
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const branchImage1 = `${process.env.PUBLIC_URL}/assets/branch1.png`;
const branchImage2 = `${process.env.PUBLIC_URL}/assets/branch2.png`;
const branchImage3 = `${process.env.PUBLIC_URL}/assets/branch3.png`;

const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter] relative overflow-hidden">
      <Helmet>
        <title>HiTech Consulting Group</title>
        <meta name="description" content="HiTech Consulting Group" />
        <meta
          name="keywords"
          content="HiTech Consulting Group, Software Development, AI Solutions, Blockchain Development, Cloud Services, Web Development, Mobile App Development, Digital Transformation, IT Consulting, Technology Partners"
        />
        <meta name="author" content="HiTech Consulting Group" />
      </Helmet>

      {/* Header Section */}
      <div className="text-center py-12 border-b border-gray-700" data-aos="fade-down">
        <h1 className="text-4xl md:text-6xl font-extrabold">About Us</h1>
      </div>

      {/* About Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="relative" data-aos="fade-right" data-aos-delay="200">
              <div className="relative">
                <img
                  src={process.env.PUBLIC_URL + "/assets/aboutImage1.png"}
                  alt="About Main"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/aboutImage2.png"}
                  alt="About Secondary"
                  className="absolute bottom-0 right-0 w-1/2 h-auto rounded-lg shadow-lg transform translate-x-4 translate-y-4"
                />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md">
                <h5 className="text-yellow-500 flex items-center text-lg font-semibold">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/slideIcon.png"}
                    alt="icon"
                    className="mr-2"
                  />
                  WHO WE ARE
                </h5>
                <h2 className="text-2xl md:text-3xl font-bold mt-4">
                  Ensuring Your Success Through Our IT Solutions
                </h2>
                <p className="text-gray-400 mt-4">
                  We specialize in designing, and developing tailored enterprise solutions for clients of all sizes. Our services include providing dedicated development teams and comprehensive support for startups, SMEs, and large enterprises. By blending agile methodologies with robust project management and precise budget control, we deliver innovative solutions that drive success and growth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      {/* <FaCheck className="text-yellow-500 mr-2" />  */}
                      Technology Consultancy
                    </li>
                    <li className="flex items-center">
                      {/* <FaCheck className="text-yellow-500 mr-2" />  */}
                      We Provide Best Services
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      {/* <FaCheck className="text-yellow-500 mr-2" />  */}
                      Maintenance And Support
                    </li>
                    <li className="flex items-center">
                      {/* <FaCheck className="text-yellow-500 mr-2" />  */}
                      Requirements Gathering
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-gray-800 py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-center md:text-left" data-aos="fade-left">
              <h5 className="text-yellow-500 flex items-center text-lg font-semibold">
                <img
                  src={process.env.PUBLIC_URL + "/assets/slideIcon.png"}
                  alt="icon"
                  className="mr-2"
                />
                Our Offering
              </h5>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
                Enhance and Pioneer Using Technology Trends
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: FaGlobe as IconComponent, title: "Website" },
              { icon: FaMobileAlt as IconComponent, title: "Android" },
              { icon: FaApple as IconComponent, title: "iOS" },
              { icon: FaClock as IconComponent, title: "Watch" },
              { icon: FaTv as IconComponent, title: "Tv" },
              { icon: FaMicrochip as IconComponent, title: "IOT" },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-gray-700 rounded-lg p-4 text-center"
                data-aos="bounce-up"
                data-aos-delay={index * 100}
              >
                <div className="text-yellow-500 text-3xl mb-4">
                  <item.icon />
                </div>
                <h4 className="text-white text-lg font-semibold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Case Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-4">About</h3>
            <p className="text-gray-400">
              HiTech Consulting Group is a distinguished technology company offering a comprehensive range of services to address the digital needs of businesses and organizations. Our team of skilled professionals leverages cutting-edge technology to deliver innovative solutions and exceptional customer experiences.
            </p>
            <p className="text-gray-400 mt-4">
              Beyond our technical expertise, we focus on building long-term relationships with our clients. By understanding their objectives and working collaboratively, we provide effective solutions aligned with their goals.
            </p>
            <p className="text-gray-400 mt-4">
              Whether it's developing a website, creating a mobile app, designing graphics, or executing AI enabled solutions, HiTech Consulting Group is dedicated to delivering outstanding services that drive success and growth. Our commitment to quality.
            </p>
            <h3 className="text-2xl font-bold mt-8 mb-4">Our Mission & Vision</h3>
            <p className="text-gray-400">
              To empower businesses and organizations with cutting-edge technology solutions, enabling them to excel in the digital era and reach their full potential.
            </p>
            <p className="text-gray-400 mt-4">
              To be a premier technology partner, renowned for our expertise, innovation, and dedication to providing outstanding solutions that drive growth, efficiency, and success for our clients. Innovation, and customer satisfaction distinguishes us as a trusted partner in the technology industry.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-b border-gray-700 py-4 mt-8">
              <li className="text-gray-400"><span className="font-semibold">Branches:</span> 3</li>
              <li className="text-gray-400"><span className="font-semibold">1:</span> USA</li>
              <li className="text-gray-400"><span className="font-semibold">2:</span> Bengaluru</li>
              <li className="text-gray-400"><span className="font-semibold">3:</span> Hyderabad</li>
            </ul>
            <h3 className="text-2xl font-bold mt-8 mb-4">DEVELOPED BY HITECH CONSULTING GROUP</h3>
            <p className="text-gray-400">
              HiTech Consulting Group creates tailored software solutions to meet specific business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[branchImage1, branchImage2, branchImage3].map((img, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={img} alt={`Branch ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
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

export default AboutUs;