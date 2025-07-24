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
            Yuva STEM is a dynamic initiative founded by alumni of the Indian Institute of Information Technology (IIIT) Dharwad, driven by a vision to make coding, AI, and digital literacy accessible to every young learner. We believe coding and technology are not just skills — they are the language of tomorrow. In a rapidly changing technological world, Yuva STEM helps students from diverse backgrounds develop curiosity, creativity, and problem-solving abilities that will prepare them for future challenges.
          </p>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Our advisory committee comprises IT professionals with over decades of experience, many of whom currently serve as directors and senior leaders at prominent technology companies. Alongside, we are proud to have mentors who are alumni of prestigious institutes like IITs/IIITs, bringing real-world expertise and guidance to our learners.
          </p>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Yuva STEM's mission aligns with India's National Education Policy (NEP) 2020, which emphasizes experiential learning, critical thinking, coding, and digital literacy from an early age. We aim to complement this vision by offering equitable platforms through engaging competitions like the Jr Coder Hunt, free masterclasses, and practical challenges that spark lifelong learning.
          </p>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            Our commitment is to empower students not only with technical knowledge but also with essential life skills like financial literacy, enabling them to think smart, solve smart, and contribute meaningfully to society. Together, we are building a generation of confident innovators, ready to shape the future of technology.
          </p>
        </div>

        {/* Profile Card (Commented Out, but Styled for Future Use) */}
        {/* <div className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={process.env.PUBLIC_URL + "/assets/karthik.png"}
              alt="Karthik Sajjan"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-200">Karthik Sajjan</h3>
              <p className="text-gray-400 font-semibold">Founder</p>
              <ul className="text-gray-400 list-disc pl-5 mt-2">
                <li>An alumnus of the <strong>Indian Institute of Information Technology (IIIT) Dharwad</strong></li>
                <li>Secured Olympiad Rank 1 in Level 2 of the <strong>International Olympiad of Mathematics 2015</strong> conducted by SilverZone</li>
                <li>Secured a gold badge in Mathematica-2011 conducted by Karnataka Academy of Mathematics</li>
                <li>Worked on face recognition for an <strong>autonomous navigating humanoid</strong> for the funded research project at Humanoid AI Lab, IIIT Dharwad</li>
                <li>Co-authored a research paper titled "Investopolis: Decentralized Customer Loyalty Tokenization on the Blockchain," published at the <strong>IEEE</strong> International Conference on Consumer Electronics (ICCE)</li>
              </ul>
              <a
                href="https://in.linkedin.com/in/karthik-sajjan-3949691a6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <LinkedInIcon className="text-blue-600 hover:text-blue-500 transition" style={{ fontSize: 30 }} />
              </a>
            </div>
          </div>
        </div> */}
      </section>

  {/* Footer Call-to-Action */}
    <div className="flex flex-col items-center py-12 border-t border-gray-700 font-inter px-4 md:px-8" data-aos="zoom-in">
      <a
        href="https://forms.gle/1X2s81LZocPSbYc66"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-3 px-10 rounded-lg hover:opacity-90 transition duration-300 text-base md:text-lg w-full max-w-xs md:max-w-sm">
          Register Your School Today
        </button>
      </a>
      <div className="text-gray-500 mt-4 italic text-sm md:text-base text-center">
        Think. Solve. Code. Win. — Your logic today, your AI future tomorrow!
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
