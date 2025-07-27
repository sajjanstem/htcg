import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaDatabase,
  FaProjectDiagram,
  FaUsersCog,
  FaCogs,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const IconWrapper: React.FC<{ Icon: IconComponent; className?: string }> = ({
  Icon,
  className,
}) => <Icon className={className} />;

type Service = {
  title: string;
  description: string;
  icon: IconComponent;
};

type Advantage = {
  title: string;
  description: string;
  icon: IconComponent;
};

const Software = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services: Service[] = [
    {
      title: "Custom Software Development",
      description:
        "Secure, scalable software tailored for your enterprise, startup, or institution.",
      icon: FaCode as IconComponent,
    },
    {
      title: "AI & ML Solutions",
      description:
        "Intelligent platforms for automation, prediction, NLP, and more.",
      icon: FaRobot as IconComponent,
    },
    {
      title: "Web & Mobile Apps",
      description:
        "Seamless cross-platform apps with modern UI and robust performance.",
      icon: FaMobileAlt as IconComponent,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Deploy faster with CI/CD, containerization, monitoring, and cloud-native design.",
      icon: FaCloud as IconComponent,
    },
    {
      title: "Data Migration & Integration",
      description:
        "Smooth, secure migration from legacy to modern systems and cloud infrastructure.",
      icon: FaDatabase as IconComponent,
    },
    {
      title: "Digital Transformation Consulting",
      description:
        "Aligning business strategy with tech solutions to drive innovation and growth.",
      icon: FaProjectDiagram as IconComponent,
    },
  ];

  const advantages: Advantage[] = [
    {
      title: "Expert Engineering Team",
      description:
        "Our team brings together diverse industry experience and exceptional problem-solving skills to deliver impactful results.",
      icon: FaUsersCog as IconComponent,
    },
    {
      title: "Cutting-Edge Tech Stack",
      description:
        "We utilize modern technologies like React, Next.js, Python, Docker, AWS & Azure to build future-proof platforms.",
      icon: FaCogs as IconComponent,
    },
    {
      title: "Agile & Transparent Execution",
      description:
        "Our agile approach ensures continuous delivery, fast iterations, and clear communication throughout the project lifecycle.",
      icon: FaRocket as IconComponent,
    },
    {
      title: "End-to-End Ownership",
      description:
        "We manage everything—from UI/UX design and architecture to launch and post-deployment support.",
      icon: FaCode as IconComponent,
    },
    {
      title: "Client-Centric Collaboration",
      description:
        "We work closely with you at every stage to ensure the solution aligns perfectly with your business goals.",
      icon: FaHandshake as IconComponent,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-gray-200 font-[Inter] min-h-screen">
      <Helmet>
        <title>HiTech Consulting Group | Software Services</title>
        <meta
          name="description"
          content="HiTech Consulting Group offers enterprise-grade software solutions, AI-powered platforms, and cutting-edge cloud services tailored for businesses and institutions."
        />
        <meta
          name="keywords"
          content="software, enterprise, AI, cloud, devops, digital transformation, consulting"
        />
        <meta name="author" content="HiTech Consulting Group" />
      </Helmet>

      {/* Header */}
      <div className="text-center py-20 px-4 border-b border-gray-700" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Enterprise-Grade Software Solutions
        </h1>
        <p className="text-gray-400 text-lg mt-4 max-w-3xl mx-auto">
          We empower organizations with scalable, secure, and intelligent software solutions built for the future.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-yellow-400 text-4xl mb-4 mx-auto w-fit">
                <IconWrapper Icon={service.icon} />
              </div>
              <h4 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h4>
              <p className="text-gray-300 text-sm text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-900 border-t border-gray-700 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose HiTech Consulting Group?
          </h3>
          <p className="text-gray-400 text-lg md:text-xl">
            We blend domain expertise, agile practices, and deep tech capabilities to deliver digital solutions that scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {advantages.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-yellow-400 text-4xl mb-4">
                <IconWrapper Icon={item.icon} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-12 border-t border-gray-700 px-4" data-aos="fade-up">
        <h4 className="text-2xl font-bold mb-4">
          Let’s Discuss Your Software Goals
        </h4>
        <p className="text-lg text-gray-400 mb-6 max-w-xl mx-auto">
          Partner with us to unlock your organization’s full digital potential through technology.
        </p>
        <a href="mailto:info@hitechconsultinggroup.com">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:opacity-90 transition duration-300">
            Get in Touch →
          </button>
        </a>
      </div>
    </section>
  );
};

export default Software;
