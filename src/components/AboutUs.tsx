import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaMobileAlt, FaCloud, FaRobot, FaDatabase } from "react-icons/fa";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter]">
      <Helmet>
        <title>HiTech Consulting Group | About Us</title>
        <meta name="description" content="HiTech Consulting Group - About Us" />
        <meta
          name="keywords"
          content="HiTech Consulting Group, Software Development, AI Solutions, Cloud Services, Web Development, Mobile App Development, Digital Transformation, IT Consulting, Technology Partners"
        />
        <meta name="author" content="HiTech Consulting Group" />
      </Helmet>

      {/* Header */}
      <div
        className="text-center py-20 px-4 border-b border-gray-700"
        data-aos="fade-down"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold">
          About Us
        </h1>
        <p className="mt-4 text-gray-400 text-lg max-w-3xl mx-auto">
          Your trusted technology partner driving innovation, scalability, and
          digital transformation worldwide.
        </p>
      </div>

      {/* About Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h5
            className="text-yellow-500 text-lg font-semibold mb-3"
            data-aos="fade-up"
          >
            WHO WE ARE
          </h5>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Driving Digital Innovation with Web, Cloud, and AI
          </h2>
          <p
            className="text-gray-400 text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We are a next-generation technology company enabling businesses
            around the globe to build scalable, intelligent, and high-performance
            solutions. Our mission is to accelerate enterprise innovation by
            leveraging cloud, AI, and software engineering excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Innovation First",
                text: "Delivering modern, user-focused solutions that open new opportunities.",
              },
              {
                title: "Deep Expertise",
                text: "Decades of experience across industries with precision and reliability.",
              },
              {
                title: "Client Partnership",
                text: "Long-term collaboration ensuring our technology drives growth.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-xl border border-gray-700 shadow hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h4 className="text-xl font-bold text-yellow-500">
                  {card.title}
                </h4>
                <p className="text-gray-400 mt-3">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            data-aos="fade-up"
          >
            Our Core Services
          </h2>
          <p
            className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We deliver value through a full spectrum of services designed to
            create secure, scalable, and innovative technology solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaCode as IconComponent,
                title: "Web Development",
                description:
                  "Responsive, scalable websites and enterprise-grade platforms.",
              },
              {
                icon: FaMobileAlt as IconComponent,
                title: "App Development",
                description:
                  "High-performance mobile apps with world-class UI/UX.",
              },
              {
                icon: FaCloud as IconComponent,
                title: "Cloud Engineering",
                description:
                  "Cloud-native solutions to optimize cost, scale, and security.",
              },
              {
                icon: FaRobot as IconComponent,
                title: "AI & Automation",
                description:
                  "AI-powered workflows for smarter operations and insights.",
              },
              {
                icon: FaDatabase as IconComponent,
                title: "Data Engineering",
                description:
                  "Secure data architecture, migration, and advanced analytics.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-yellow-500 text-4xl mb-4">
                  <service.icon />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            data-aos="fade-up"
          >
            Industries We Serve
          </h2>
          <p
            className="text-gray-400 max-w-3xl mx-auto mb-10 text-center text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our tailored solutions empower businesses across industries to
            embrace innovation and growth in a digital-first world.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[
              "Healthcare",
              "Fintech",
              "Education",
              "E-commerce",
              "Logistics",
              "Retail",
              "Media",
              "Travel & Hospitality",
            ].map((industry, index) => (
              <div
                key={industry}
                className="bg-gray-700 py-4 px-6 rounded-md shadow hover:shadow-lg transition"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="bg-white/5 rounded-xl border border-gray-700 p-8 shadow-md"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Our Offices</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="bg-white/5 rounded-xl border border-gray-700 p-6 shadow-md"
                data-aos="fade-up"
              >
                <h4 className="text-xl font-semibold text-yellow-500 mb-3">Hyderabad Office</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Nexus Business Centre,<br />
                  11/G194 Plot No 803, 5th Floor,<br />
                  Ayyappa Society, Madhapur,<br />
                  Hyderabad, Telangana 500081 - India
                </p>
              </div>
              <div
                className="bg-white/5 rounded-xl border border-gray-700 p-6 shadow-md"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h4 className="text-xl font-semibold text-yellow-500 mb-3">Bengaluru Office</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  131/A, 3rd Floor, NGEF Layout, Outer Ring Road,<br />
                  Near Grand Seasons Business Hotel,<br />
                  East of NGEF Layout, Kasturi Nagar,<br />
                  Bengaluru, Karnataka 560043 - India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div
        className="flex flex-col items-center py-12 border-t border-gray-700 px-6"
        data-aos="zoom-in"
      >
        <a
          href="mailto:info@hitechconsultinggroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
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
