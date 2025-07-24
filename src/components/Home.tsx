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
            content="HiTech Consulting Group"
          />
          <meta
            name="keywords"
            content="HiTech Consulting Group"
          />
          <meta name="author" content="HiTech Consulting Group" />
        </Helmet>

    {/* Hero Section */}
    <div className="font-poppins">
      {/* Main title with full-width border below */}
      <div className="text-center py-8 border-b border-gray-700" data-aos="fade-down">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Yuva STEM Organisation
        </div>
      </div>

      {/* Rest of hero content */}
      <div className="text-center py-6 max-w-5xl mx-auto space-y-3">
        <div
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Junior Coder Hunt 2025
        </div>
        <div
          className="text-sm sm:text-base md:text-lg text-gray-400"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Think. Solve. Code. Win.
        </div>
        <div className="mt-4" data-aos="zoom-in" data-aos-delay="400">
          <a
            href="https://forms.gle/1X2s81LZocPSbYc66"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-10 rounded-lg hover:opacity-90 transition duration-300">
              Register School
            </button>
          </a>
        </div>
      </div>
    </div>


      {/* Content Sections */}
      <div className="max-w-5xl mx-auto pt-4 pb-12 px-2 sm:px-4 space-y-8 font-inter">
        {/* Empowering Coders Section */}
        <div
          className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 flex flex-col justify-center min-h-[400px]"
          data-aos="fade-up"
        >
          <div className="text-2xl md:text-3xl font-bold text-center mb-6" data-aos="fade-down" data-aos-delay="100">
            💻 Empowering the Coders of Tomorrow
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-[35%] order-2 md:order-1" data-aos="fade-left" data-aos-delay="200">
              <img
                src={process.env.PUBLIC_URL + "/assets/roboface_compressed.jpg"}
                alt="AI and Coding Innovation"
                className="w-full max-w-xs h-48 object-cover object-center rounded shadow-md mx-auto"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-[65%] order-1 md:order-2 space-y-4" data-aos="fade-right" data-aos-delay="200">
              <div className="text-sm md:text-base text-gray-400">
                YuvaStem is a pioneering organization dedicated to equipping school students with essential 21st-century skills: digital literacy, coding proficiency, AI awareness, and financial literacy. Aligned with the transformative vision of the National Education Policy (NEP) 2020, we emphasize experiential learning, critical thinking, and innovation to prepare students for a technology-driven future.
              </div>
              <div className="text-sm md:text-base text-gray-400">
                By fostering early exposure to coding and AI, we empower students to navigate and shape a rapidly evolving digital world with confidence and creativity. Our mission is to bridge the gap between traditional education and the skills needed to thrive in tomorrow’s innovation economy, ensuring every student is future-ready.
              </div>
            </div>
          </div>
        </div>

      {/* Jr Coder Hunt Exam Section */}
      <div
        className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
        data-aos="fade-up"
      >
        <div className="space-y-6">
          <div className="text-2xl md:text-3xl font-bold text-center mb-6" data-aos="fade-down" data-aos-delay="100">
            💰 Jr Coder Hunt Exam 2025
          </div>
          <div className="text-sm md:text-base text-gray-400">
            <p className="mb-4">
              Ignite your passion for technology with the <span className="font-semibold">Jr Coder Hunt Exam 2025</span>, a talent hunt for students in <span className="font-semibold">classes 6 to 10</span>. Designed to spark curiosity and build essential technical skills, this exciting competition offers a platform to showcase logical thinking, problem-solving, and coding potential, aligned with the transformative vision of NEP 2020.
            </p>
            <div className="relative space-y-6">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-6 top-4 h-[calc(100%-1rem)] w-1 bg-gray-600"></div>
              
              {/* Step 1: Level 1 Exam */}
              <div className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="200">
                <div className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(111, 176, 127, 0.8)' }}></div>
                <div className="font-semibold" style={{ color: 'rgba(111, 176, 127, 0.8)' }}>Step 1: Level 1 Exam – Reasoning & Aptitude</div>
                <p>
                  Kickstart your journey with an <span className="font-semibold">OMR-based MCQ exam</span> testing logical reasoning and aptitude, aligned with <span className="font-semibold">Olympiad exam standards</span>, this level is open to all students from classes 6 to 10, regardless of coding experience, ensuring equal opportunity to shine.
                </p>
              </div>

              {/* Step 2: Shortlisting */}
              <div className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="300">
                <div className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(111, 176, 127, 0.8)' }}></div>
                <div className="font-semibold" style={{ color: 'rgba(111, 176, 127, 0.8)' }}>Step 2: Shortlisting for Level 2</div>
                <p>
                  Top performers from Level 1 will be <span className="font-semibold">shortlisted</span> to advance to the next stage, unlocking exclusive opportunities to enhance their coding and AI skills.
                </p>
              </div>

              {/* Step 3: Masterclasses */}
              <div className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="400">
                <div className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(111, 176, 127, 0.8)' }}></div>
                <div className="font-semibold" style={{ color: 'rgba(111, 176, 127, 0.8)' }}>Step 3: Free Masterclasses by Alumni of IIT/IIIT</div>
                <p>
                  Shortlisted students gain access to <span className="font-semibold">free online live masterclasses</span> led by <span className="font-semibold">IIT/IIIT alumni.</span> Learn hands-on coding with <span className="font-semibold">Python</span> and explore the <span className="font-semibold">basics of AI</span> through engaging, practical sessions.
                </p>
              </div>

              {/* Step 4: Level 2 Exam */}
              <div className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="500">
                <div className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(111, 176, 127, 0.8)' }}></div>
                <div className="font-semibold" style={{ color: 'rgba(111, 176, 127, 0.8)' }}>Step 4: Level 2 Exam – Python & AI</div>
                <p>
                  Compete in an <span className="font-semibold">online exam</span> testing <span className="font-semibold">Python</span> and <span className="font-semibold">basic AI concepts</span>. Showcase your coding skills and problem-solving abilities in a dynamic, tech-driven challenge.
                </p>
              </div>

              {/* Step 5: Rewards */}
              <div className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="600">
                <div className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(111, 176, 127, 0.8)' }}></div>
                <div className="font-semibold" style={{ color: 'rgba(111, 176, 127, 0.8)' }}>Step 5: Win Big!</div>
                <p>
                  Top performers in Level 2 will be celebrated with <span className="font-semibold">cash prizes, trophies, and medals</span>, recognizing their excellence and potential as future tech leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prizes & Recognition Section */}
      <div
        className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
        data-aos="fade-up"
      >
        <div className="space-y-4">
          <div className="text-center text-2xl md:text-3xl font-bold">🏆 Prizes & Recognition</div>
          <div className="text-sm md:text-base text-gray-400">
            Celebrate your achievement with exciting rewards! <br /><br />
            💰 <strong>₹50,000+ Cash Pool</strong> distributed among the top winners.<br />
            🏆 Stunning trophies for outstanding performers.<br />
            🏅 Medals and certificates to honor your hard work and talent.<br />
            🎉 A memorable experience that recognizes your dedication to coding and innovation.
          </div>
          <div className="flex justify-center">
            <span className="border border-yellow-500 text-yellow-500 rounded-md px-4 py-2 text-sm md:text-base font-semibold">
              ₹50,000+ Cash Pool
            </span>
          </div>
        </div>
      </div>

      {/* Why Join Section */}
      <div
        className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
        data-aos="fade-up"
      >
        <div className="space-y-2">
          <div className="text-2xl md:text-3xl font-bold text-center">🤝 Why Join Jr Coder Hunt?</div>
          <div className="text-sm md:text-base text-gray-400">
            🚀 <strong>Shape Your Future in the Digital Age!</strong><br /><br />
            The world is transforming faster than ever with technology like AI, robotics, and data science leading the way. <strong>Jr Coder Hunt</strong> gives you the chance to start early, build essential coding and problem-solving skills, and prepare for tomorrow’s innovations.<br /><br />

            🧠 <strong>Think Smart, Solve Smart:</strong> Sharpen your logical, computational, and creative thinking.<br />
            💡 <strong>Learn from the Best:</strong> Get free masterclasses from IIT/IIIT alumni, mentored by experienced IT professionals and directors.<br />
            🏅 <strong>Get Rewarded:</strong> Stand out with medals, trophies, certificates — and grab your share of ₹50,000+ in cash prizes!<br />
            💻 <strong>Be Future-Ready:</strong> Discover how coding and AI can help you solve real-world problems, innovate, and lead in any career you choose.<br />
            🎓 <strong>Tailored for School Students:</strong> Specially designed to nurture talent in school learners who aspire to excel in coding and AI.
          </div>
        </div>
      </div>

      {/* About Yuva STEM Section */}
      <div
        className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
        data-aos="fade-up"
      >
        <div className="space-y-2">
          <div className="text-2xl md:text-3xl font-bold text-center">🌱 About Yuva STEM</div>
          <div className="text-sm md:text-base text-gray-400 space-y-4">
            <p>
              Yuva STEM is a dynamic initiative committed to bridging the gap between classroom learning and essential skills. Our vision is to democratize coding, AI, and digital literacy, enabling every young mind to explore, create, and lead in the digital future. We believe in nurturing curiosity and innovation, ensuring that students from diverse backgrounds gain access to quality technology education. With the guidance of experienced mentors from IITs, IIITs, and industry leaders, we aim to spark lifelong learning and critical thinking in every participant.
            </p>
            <p>
              Our mission is to provide equitable platforms that promote coding, AI awareness, and financial literacy, empowering students to think smart, solve smart, and contribute meaningfully to society. Through engaging competitions like the Jr Coder Hunt, free masterclasses, and hands-on challenges, Yuva STEM is building a generation of confident, future-ready innovators. Join us in this journey to shape tomorrow’s digital leaders today!
            </p>
          </div>
        </div>
      </div>

      {/* Mentors Section */}
      <div
        className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
        data-aos="fade-up"
      >
        <div className="space-y-2">
          <div className="text-2xl md:text-3xl font-bold text-center">👨‍💻 Who Mentors Yuva STEM Participants?</div>
          <div className="text-sm md:text-base text-gray-400 space-y-4">
            <p>
              Yuva STEM is guided by an advisory committee consisting of highly accomplished technology professionals with decades of experience in the IT industry. These leaders currently serve as directors and senior experts in renowned technology companies, bringing a wealth of practical knowledge and strategic vision to the initiative.
            </p>
            <p>
              Our mentors are passionate educators and innovators, many of whom are proud alumni of prestigious institutions such as IITs and IIITs. Their mission is to inspire, guide, and support participants, helping them build essential skills and confidence to thrive in a technology-driven world.
            </p>
          </div>
        </div>
      </div>


        {/* How It Works Section */}
        {/* <div
          className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6"
          data-aos="fade-up"
        >
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold">📣 How It Works</div>
            <div className="text-sm md:text-base text-gray-400">
              1️⃣ Register via YuvaStem website (individuals or schools)<br />
              2️⃣ Take Level 1 reasoning + aptitude exam online<br />
              3️⃣ Get shortlisted and attend free masterclasses<br />
              4️⃣ Take Level 2 coding + AI exam<br />
              5️⃣ Win cash prizes, certificates & national recognition
            </div>
          </div>
        </div> */}
      </div>

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

export default Home;