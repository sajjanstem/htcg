import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter] relative overflow-hidden">
        <Helmet>
          <title>HiTech Consulting Group</title>
          <meta
            name="description"
            content="HiTech Consulting Group"
          />
          <meta
            name="keywords"
            content="HiTech Consulting Group"
          />
          <meta name="author" content="HiTech Consulting Group" />
        </Helmet>

      {/* Header Section */}
      <div className="text-center py-12 border-b border-gray-700" data-aos="fade-down">
        <h1 className="text-4xl md:text-6xl font-extrabold">About Us</h1>
      </div>

      {/* Main Content Section */}
      <section className="max-w-5xl mx-auto py-12 px-4 space-y-8">
        <div
          className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md"
          data-aos="fade-up"
        >
          <p className="text-gray-400 text-sm md:text-base">
            HiTech Consulting Group is a forward-thinking technology consulting and development company driven by innovation, agility, and real-world impact. We specialize in delivering scalable software solutions across domains such as education, healthcare, enterprise SaaS, and AI-based platforms.
          </p>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Our core team includes alumni from premier institutions such as <strong>IITs, IIITs, and BITS Pilani</strong>, bringing a wealth of technical expertise and research-driven development. With a strong background in both academia and industry, our engineers and consultants deliver systems that are both innovative and production-grade.
          </p>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            With a combined experience of over a decade in building full-stack platforms, AI systems, blockchain integrations, and scalable web architectures, we help institutions, startups, and enterprises bridge the gap between vision and execution.
          </p>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            We believe in problem-first thinking, lean development, and outcome-focused delivery. Every project we take on is backed by data, design, and deep domain understanding.
          </p>
        </div>
      </section>

  {/* Footer Call-to-Action */}
    <div className="flex flex-col items-center py-12 border-t border-gray-700 font-inter px-4 md:px-8" data-aos="zoom-in">
      <a
        href="mailto:info@hitechconsulting.in"
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
