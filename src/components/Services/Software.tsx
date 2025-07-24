import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import SyllabusTable from "../SyllabusTable";

const Stem = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter] relative overflow-hidden">
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


      {/* Banner Section */}
      <div className="text-center py-12 border-b border-gray-700" data-aos="fade-down">
        <h1 className="text-4xl md:text-6xl font-extrabold"> Junior Coder Hunt 2025</h1>
      </div>


      {/* Main Content Section */}
      <section className="max-w-5xl mx-auto py-12 px-2 space-y-12">
        {/* Introduction */}
        <Box
          className="backdrop-blur-sm bg-gray-900/80 rounded-xl border border-gray-700 p-6 shadow-lg"
          sx={{ backdropFilter: "blur(4px)" }}
          data-aos="fade-up"
        >
          <Typography variant="body1" className="text-gray-300 text-lg leading-relaxed">
            Unleash your coding potential with the <strong>Jr Coder Hunt Exam 2025</strong>, a transformative competition for <strong>classes 6 to 10</strong> students. Designed to align with <strong>NEP 2020</strong>, this prestigious talent hunt ignites passion for technology, sharpens logical reasoning, and builds foundational coding skills. Compete to unlock <strong>exclusive masterclasses by IIT/IIIT alumni</strong>, earn <strong>cash prizes, trophies, and medals</strong>, and take your first step toward becoming a global tech innovator.
          </Typography>
        </Box>

       {/* Exam Process Timeline */}
        <div
          className="backdrop-blur-sm bg-white bg-opacity-5 rounded-xl border border-gray-700 p-6 shadow-md"
          data-aos="fade-up"
        >
          <Typography variant="h4" className="text-2xl md:text-3xl font-bold mb-4 text-gray-200 text-center flex items-center justify-center">
            Exam Process
          </Typography>
          <Box className="relative space-y-6">
            {/* Timeline Line */}
            <Box
              className="absolute left-4 md:left-6 top-4 w-1 bg-gray-600"
              sx={{ height: "calc(100% - 1rem)" }}
            ></Box>

            {/* Step 0: Registration */}
            <Box className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="100">
              <Box
                className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full"
                sx={{ backgroundColor: "rgba(111, 176, 127, 0.8)" }}
              ></Box>
              <Typography
                className="font-semibold"
                sx={{ color: "rgba(111, 176, 127, 0.8)" }}
              >
                Step 0: Register Your School & Students
              </Typography>
              <Typography variant="body1" className="text-gray-400">
                Open the door to a unique opportunity by registering your school and students today! With a minimal exam fee of <strong>₹300 per student</strong>, you can kickstart this exciting journey. Reach out to <a href="mailto:info@yuvastem.org" className="text-green-300 underline">info@yuvastem.org</a> for a hassle-free registration process—let’s get started!
              </Typography>
            </Box>

            {/* Step 1: Level 1 Exam */}
            <Box className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="200">
              <Box
                className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full"
                sx={{ backgroundColor: "rgba(111, 176, 127, 0.8)" }}
              ></Box>
              <Typography
                className="font-semibold"
                sx={{ color: "rgba(111, 176, 127, 0.8)" }}
              >
                Step 1: Level 1 Exam – Reasoning & Aptitude
              </Typography>
              <Typography variant="body1" className="text-gray-400">
                Kickstart your journey with an <strong>OMR-based MCQ exam</strong> testing logical reasoning and aptitude, aligned with <strong>Olympiad exam standards</strong>, this level is open to all students from classes 6 to 10, regardless of coding experience, ensuring equal opportunity to shine.
              </Typography>
            </Box>

            {/* Step 2: Shortlisting */}
            <Box className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="300">
              <Box
                className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full"
                sx={{ backgroundColor: "rgba(111, 176, 127, 0.8)" }}
              ></Box>
              <Typography
                className="font-semibold"
                sx={{ color: "rgba(111, 176, 127, 0.8)" }}
              >
                Step 2: Shortlisting for Level 2
              </Typography>
              <Typography variant="body1" className="text-gray-400">
                Top performers from Level 1 will be <strong>shortlisted</strong> to advance to the next stage, unlocking exclusive opportunities to enhance their coding and AI skills.
              </Typography>
            </Box>

            {/* Step 3: Masterclasses */}
            <Box className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="400">
              <Box
                className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full"
                sx={{ backgroundColor: "rgba(111, 176, 127, 0.8)" }}
              ></Box>
              <Typography
                className="font-semibold"
                sx={{ color: "rgba(111, 176, 127, 0.8)" }}
              >
                Step 3: Free Masterclasses by Alumni of IIT/IIIT
              </Typography>
              <Typography variant="body1" className="text-gray-400">
                Shortlisted students gain access to <strong>free online live masterclasses</strong> led by <strong>IIT/IIIT alumni.</strong> Learn hands-on coding with <strong>Python</strong> and explore the <strong>basics of AI</strong> through engaging, practical sessions.
              </Typography>
            </Box>

            {/* Step 4: Level 2 Exam */}
            <Box className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="500">
              <Box
                className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full"
                sx={{ backgroundColor: "rgba(111, 176, 127, 0.8)" }}
              ></Box>
              <Typography
                className="font-semibold"
                sx={{ color: "rgba(111, 176, 127, 0.8)" }}
              >
                Step 4: Level 2 Exam – Python & AI
              </Typography>
              <Typography variant="body1" className="text-gray-400">
                Compete in an <strong>online exam</strong> testing <strong>Python</strong> and <strong>basic AI concepts</strong>. Showcase your coding skills and problem-solving abilities in a dynamic, tech-driven challenge.
              </Typography>
            </Box>

            {/* Step 5: Rewards */}
            <Box className="relative pl-12 md:pl-16" data-aos="fade-right" data-aos-delay="600">
              <Box
                className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full"
                sx={{ backgroundColor: "rgba(111, 176, 127, 0.8)" }}
              ></Box>
              <Typography
                className="font-semibold"
                sx={{ color: "rgba(111, 176, 127, 0.8)" }}
              >
                Step 5: Win Big!
              </Typography>
              <Typography variant="body1" className="text-gray-400">
                Top performers in Level 2 will be celebrated with <strong>cash prizes, trophies, and medals</strong>, recognizing their excellence and potential as future tech leaders.
              </Typography>
            </Box>
          </Box>
        </div>

        {/* Level 1 Syllabus */}
        <SyllabusTable />

{/* Exam Pattern before Level 1 Syllabus */}
   <Box
      className="backdrop-blur-sm bg-gray-900/80 rounded-xl border border-gray-700 p-6 shadow-lg"
      data-aos="fade-up"
    >
      <Typography variant="h5" className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-gray-200  text-center flex items-center justify-center">
         Level 1 Exam Pattern
      </Typography>
        <Typography className="text-sm text-gray-400 mb-4 italic text-center flex items-center justify-center">
        (OMR-based MCQ questions)
      </Typography>
  <TableContainer
    className="bg-gray-900/80 border border-gray-700 rounded-lg"
    sx={{ backdropFilter: "blur(4px)" }}
  >
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ color: '#f9fafb', fontWeight: '600' }}>
            Classes
          </TableCell>
          <TableCell sx={{ color: '#f9fafb', fontWeight: '600' }} align="center">
            Number of Questions
          </TableCell>
          <TableCell sx={{ color: '#f9fafb', fontWeight: '600' }} align="center">
            Duration
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow className="hover:bg-gray-800/80 transition-all bg-gray-800/50">
          <TableCell sx={{ color: '#f9fafb' }}>
            Classes 6th to 8th
          </TableCell>
          <TableCell sx={{ color: '#f9fafb' }} align="center">
            25
          </TableCell>
          <TableCell sx={{ color: '#f9fafb' }} align="center">
            35 minutes
          </TableCell>
        </TableRow>
        <TableRow className="hover:bg-gray-800/80 transition-all">
          <TableCell sx={{ color: '#f9fafb' }}>
            Classes 9th & 10th
          </TableCell>
          <TableCell sx={{ color: '#f9fafb' }} align="center">
            30
          </TableCell>
          <TableCell sx={{ color: '#f9fafb' }} align="center">
            40 minutes
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
</Box>


{/* Level 2 Syllabus Summary */}
 <Box
      className="backdrop-blur-sm bg-gray-900/80 rounded-xl border border-gray-700 p-6 shadow-lg"
      data-aos="fade-up"
    >
      <Typography variant="h5" className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-gray-200  text-center flex items-center justify-center">
         Level 2 Exam Overview
      </Typography>
        <Typography className="text-sm text-gray-400 mb-4 italic text-center flex items-center justify-center">
        (online coding based exam)
      </Typography>


  <Typography className="text-gray-300 mb-4">
    <strong>
      Level 2 will be conducted online and will include:
    </strong>
  </Typography>
  <Box component="ul" className="text-gray-300 pl-5 mt-2 space-y-2">
    <li>
      <strong>Python Coding</strong>:
      <ul className="pl-5 list-disc">
        <li>Topics like variables, conditional statements, loops, file handling, etc.</li>
        <li>Output-based questions</li>
        <li>Syntax error identification</li>
        <li>Pseudo code logic</li>
        <li>Basic Python coding problems</li>
      </ul>
    </li>
    <li>
      <strong>Basics of AI</strong>:
      <ul className="pl-5 list-disc">
        <li>AI applications</li>
        <li>How AI works</li>
        <li>Theoretical questions about AI systems</li>
      </ul>
    </li>
  </Box>
  <Typography className="text-gray-300 mb-2">
    <strong>
      Detailed syllabus will be shared during the masterclasses for all shortlisted students.
    </strong>
  </Typography>
</Box>



      <Box
        className="backdrop-blur-sm bg-gray-900/80 rounded-xl border border-gray-700 p-6 shadow-lg font-inter"
        sx={{ backdropFilter: "blur(4px)" }}
        data-aos="fade-up"
      >
        <Typography
          variant="h5"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
          sx={{ color: '#f9fafb' , mb: 4}}
        >
          🏆 Winners
        </Typography>

        {[
          {
            className: "Class 10 (Cash Prize + Trophy)",
            prizes: [
              { pos: "1st", award: "₹6,000", type: "trophy" },
              { pos: "2nd", award: "₹5,000", type: "trophy" },
              { pos: "3rd", award: "₹4,000", type: "trophy" },
            ],
          },
          {
            className: "Class 9 (Cash Prize + Trophy)",
            prizes: [
              { pos: "1st", award: "₹5,000", type: "trophy" },
              { pos: "2nd", award: "₹4,000", type: "trophy" },
              { pos: "3rd", award: "₹3,000", type: "trophy" },
            ],
          },
          {
            className: "Class 8 (Cash Prize + Medal)",
            prizes: [
              { pos: "1st", award: "₹4,000", type: "medal" },
              { pos: "2nd", award: "₹3,000", type: "medal" },
              { pos: "3rd", award: "₹2,000", type: "medal" },
            ],
          },
          {
            className: "Class 7 (Cash Prize + Medal)",
            prizes: [
              { pos: "1st", award: "₹3,500", type: "medal" },
              { pos: "2nd", award: "₹2,500", type: "medal" },
              { pos: "3rd", award: "₹1,500", type: "medal" },
            ],
          },
          {
            className: "Class 6 (Cash Prize + Medal)",
            prizes: [
              { pos: "1st", award: "₹3,500", type: "medal" },
              { pos: "2nd", award: "₹2,500", type: "medal" },
              { pos: "3rd", award: "₹1,500", type: "medal" },
            ],
          },
        ].map((group, idx) => (
          <Box key={idx} sx={{ mb: 6 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#f9fafb',
                mb: 4,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                fontWeight: 550,
                textAlign: 'center'
              }}
            >
              {group.className}
            </Typography>
            <Box className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {group.prizes.map((prize, i) => (
                <Box
                  key={i}
                  className="bg-gray-800/70 border border-gray-700 rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col items-center justify-center text-center"
                >
                  <Typography sx={{ color: '#f9fafb', fontWeight: 600, mb: 1 }}>
                    {prize.pos}
                  </Typography>
                  <Typography sx={{ color: '#f9fafb' }}>
                    {prize.award}{" "}
                    {prize.type === "medal" ? (
                      <MilitaryTechIcon className="inline text-yellow-500" />
                    ) : (
                      <EmojiEventsIcon className="inline text-yellow-500" />
                    )}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}

        <Typography
          variant="body1"
          className="text-center text-sm sm:text-base mt-6 text-gray-400 italic"
        >
          All Level 2 shortlisted students get a Certificate of Appreciation.
        </Typography>
      </Box>

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
      </section>
    </Box>
  );
};

export default Stem;