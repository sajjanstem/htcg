import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-inter relative overflow-hidden">
        <Helmet>
          <title>HiTech Consulting Group</title>
          <meta
            name="description"
            content="HiTech Consulting Group - Empowering Innovation Through Technology"
          />
          <meta
            name="keywords"
            content="HiTech Consulting, Technology Solutions, Software Development, AI, Blockchain"
          />
          <meta name="author" content="HiTech Consulting Group" />
        </Helmet>

    {/* Hero Section */}
    <div className="font-poppins">
      <div className="text-center py-8 border-b border-gray-700" data-aos="fade-down">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
          HiTech Consulting Group
        </div>
      </div>

      <div className="text-center py-6 max-w-5xl mx-auto space-y-3">
        <div
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Delivering Future-Ready Tech Solutions
        </div>
        <div
          className="text-sm sm:text-base md:text-lg text-gray-400"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          From AI to Blockchain, we engineer digital innovation for the modern world.
        </div>
        <div className="mt-4" data-aos="zoom-in" data-aos-delay="400">
          <a
            href="#projects"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-10 rounded-lg hover:opacity-90 transition duration-300">
              Explore Our Projects
            </button>
          </a>
        </div>
      </div>
    </div>

    {/* Project Highlights Section */}
    <div id="projects" className="max-w-5xl mx-auto pt-8 pb-12 px-4 space-y-8 font-inter">
      <div className="text-3xl font-bold text-center mb-6" data-aos="fade-down">🚀 Project Highlights</div>

      <div className="space-y-8">
        <div className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-xl border border-gray-700" data-aos="fade-up">
          <div className="text-2xl font-semibold mb-2">Face Recognition System with RGB-D Intelligence</div>
          <div className="text-gray-400 mb-2">An advanced AI-powered vision system tailored for humanoid robots that leverages RGB-D data for enhanced accuracy in face recognition under varying lighting and distance conditions.</div>
          <ul className="list-disc pl-5 text-sm text-gray-400">
            <li><strong>Tech Stack:</strong> Python, OpenCV, TensorFlow, Intel RealSense SDK, PyTorch</li>
            <li><strong>Key Features:</strong> Face detection using RGB-D input, real-time tracking, embedded hardware integration</li>
            <li><strong>Impact:</strong> Improved human-robot interaction with 3D-aware recognition accuracy</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-xl border border-gray-700" data-aos="fade-up">
          <div className="text-2xl font-semibold mb-2">Real-Time ASL to Speech Web Application</div>
          <div className="text-gray-400 mb-2">A real-time translation tool that interprets American Sign Language through computer vision and delivers synthesized speech for improved communication accessibility.</div>
          <ul className="list-disc pl-5 text-sm text-gray-400">
            <li><strong>Tech Stack:</strong> Python, Flask, OpenCV, MediaPipe, TensorFlow.js, WebRTC</li>
            <li><strong>Key Features:</strong> Hand gesture recognition, speech synthesis, real-time webcam integration</li>
            <li><strong>Impact:</strong> Facilitated communication for the deaf and hard-of-hearing community</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-xl border border-gray-700" data-aos="fade-up">
          <div className="text-2xl font-semibold mb-2">Investopolis – Blockchain-based Investment and Loyalty Platform</div>
          <div className="text-gray-400 mb-2">A secure, transparent platform that combines blockchain-based investment tracking with tokenized customer rewards, ensuring accountability and user retention.</div>
          <ul className="list-disc pl-5 text-sm text-gray-400">
            <li><strong>Tech Stack:</strong> Solidity, React, Ethereum (Polygon), Web3.js, MongoDB, Node.js</li>
            <li><strong>Key Features:</strong> Tokenized rewards, secure wallets, smart contract-based transactions</li>
            <li><strong>Impact:</strong> Enabled seamless digital investments and increased brand loyalty</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-xl border border-gray-700" data-aos="fade-up">
          <div className="text-2xl font-semibold mb-2">Graphy – Handwritten Equation to Graph Web Tool</div>
          <div className="text-gray-400 mb-2">An intuitive application that extracts polynomial equations from images using AWS Textract and visualizes them using Desmos Graph API.</div>
          <ul className="list-disc pl-5 text-sm text-gray-400">
            <li><strong>Tech Stack:</strong> React, AWS Textract, Desmos API, Node.js</li>
            <li><strong>Key Features:</strong> Image-to-equation recognition, graph rendering, real-time interface</li>
            <li><strong>Impact:</strong> Improved accessibility in math education through visual aids</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-xl border border-gray-700" data-aos="fade-up">
          <div className="text-2xl font-semibold mb-2">Yuva STEM Educational Platform (Ongoing)</div>
          <div className="text-gray-400 mb-2">A web-based initiative to support school students in coding, AI, and digital skills. The platform emphasizes NEP 2020-aligned experiential learning and is currently under development.</div>
          <ul className="list-disc pl-5 text-sm text-gray-400">
            <li><strong>Tech Stack:</strong> React, Tailwind CSS, Node.js, MongoDB (Backend in progress)</li>
            <li><strong>Frontend:</strong> Completed</li>
            <li><strong>Backend:</strong> Development ongoing</li>
            <li><strong>Goal:</strong> To enable future-ready skills for school students in coding and technology</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer CTA */}
    <div className="flex flex-col items-center py-12 border-t border-gray-700 font-inter px-4 md:px-8" data-aos="zoom-in">
      <a
        href="#projects"
      >
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 px-10 rounded-lg hover:opacity-90 transition duration-300 text-base md:text-lg w-full max-w-xs md:max-w-sm">
          View All Projects
        </button>
      </a>
      <div className="text-gray-500 mt-4 italic text-sm md:text-base text-center">
        Innovate. Build. Deliver. — HiTech Consulting Group
      </div>
    </div>
    </div>
  );
};

export default Home;
