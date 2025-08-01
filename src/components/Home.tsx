import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCloud, FaRobot, FaGlobe, FaSearch, FaPaintBrush, FaCode } from "react-icons/fa";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

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
        {/* Basic Meta */}
        <title>HiTech Consulting Group</title>
        <meta
          name="description"
          content="HiTech Consulting Group offers innovative web development, scalable cloud solutions, and AI-driven platforms to power your digital growth."
        />
        <meta
          name="keywords"
          content="HiTech Consulting, Web Development, Cloud Solutions, AI, Machine Learning, DevOps, Software Services, IT Consulting"
        />
        <meta name="author" content="HiTech Consulting Group" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="HiTech Consulting Group | Web, Cloud & AI Solutions" />
        <meta
          property="og:description"
          content="Transform your business with expert-led software, cloud, and artificial intelligence services. Discover future-ready tech today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hitechconsultinggroup.com/" />
        <meta property="og:image" content="https://hitechconsultinggroup.com/logo512.png" />
        <meta property="og:site_name" content="HiTech Consulting Group" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HiTech Consulting Group | Web, Cloud & AI Solutions" />
        <meta
          name="twitter:description"
          content="HiTech Consulting Group helps startups, enterprises, and institutions thrive with full-stack digital solutions."
        />
        <meta name="twitter:image" content="https://hitechconsultinggroup.com/logo512.png" />

        {/* Favicon (optional if you already have in index.html, but good to duplicate here) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://hitechconsultinggroup.com/" />
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
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Smart IT Solutions for a Smarter Future</h2>
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
                icon: FaGlobe as IconComponent,
                title: "Web Development",
                description:
                  "Responsive, scalable, and modern websites tailored to drive your business success in the digital world.",
              },
              {
                icon: FaRobot as IconComponent,
                title: "AI & ML Solutions",
                description:
                  "Leverage Artificial Intelligence to automate, predict, and optimize business operations with smart algorithms.",
              },
              {
                icon: FaCloud as IconComponent,
                title: "Cloud & DevOps",
                description:
                  "Cloud-native applications and DevOps automation that ensure agility, speed, and seamless deployment.",
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
              <img
                src={process.env.PUBLIC_URL + "/assets/aboutImage2.png"}
                alt="About us decorative"
                className="hidden md:block absolute bottom-0 left-0 w-1/2 h-auto rounded-xl shadow-lg z-10 transform md:-translate-x-16 md:-translate-y-6 opacity-50"
              />
              <img
                src={process.env.PUBLIC_URL + "/assets/aboutImage1.png"}
                alt="About us"
                className="relative rounded-xl shadow-lg h-auto max-h-[500px] object-cover z-20 w-full mx-auto md:w-[85%] md:translate-x-10 md:mx-0"
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
                Driving Digital Innovation with Web, Cloud, and AI
              </h2>
              <p className="text-gray-400 mb-4">
                HiTech Consulting Group is a future-ready tech company offering full-stack web development, cloud engineering, and intelligent AI-driven solutions. Our mission is to empower businesses to embrace the digital future efficiently.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-4 shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h4 className="font-bold text-white">Scalable Tech Stack</h4>
                  <p className="text-gray-400">From startups to enterprises, our technology adapts and grows with your business.</p>
                </div>
                <div
                  className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-4 shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h4 className="font-bold text-white">Innovation Driven Approach</h4>
                  <p className="text-gray-400">
                    We embrace emerging technologies and creative strategies to deliver solutions that keep your business ahead of the curve.
                  </p>
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
            How We Build Next-Gen Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: FaSearch as IconComponent,
                title: "Requirement Discovery",
                description:
                  "Understanding your business needs thoroughly to align solutions with long-term success.",
              },
              {
                icon: FaPaintBrush as IconComponent,
                title: "Prototyping & Design",
                description:
                  "Crafting UI/UX and flows before development begins, ensuring clarity and alignment.",
              },
              {
                icon: FaCode as IconComponent,
                title: "Development & Deployment",
                description:
                  "Building secure, scalable, and reliable systems using the best industry practices.",
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
          Powering your digital transformation with precision, passion, and performance.
        </div>
      </div>
    </div>
  );
};

export default Home;
