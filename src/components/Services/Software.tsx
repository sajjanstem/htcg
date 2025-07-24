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
} from "@mui/material";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const Software = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter] relative overflow-hidden">
      <Helmet>
        <title>HiTech Consulting Group | Enterprise Software Services</title>
        <meta name="description" content="HiTech Consulting Group offers robust software services, digital solutions, and enterprise transformation for businesses and institutions." />
        <meta name="keywords" content="software development, enterprise solutions, AI, IT consulting, HiTech" />
        <meta name="author" content="HiTech Consulting Group" />
      </Helmet>

      <div className="text-center py-12 border-b border-gray-700" data-aos="fade-down">
        <h1 className="text-4xl md:text-6xl font-extrabold">Transforming Ideas into Innovative Digital Solutions</h1>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Empowering institutions, enterprises, and startups with end-to-end custom software development, AI integration, and digital modernization services.</p>
      </div>

      <section className="max-w-6xl mx-auto py-12 px-4 space-y-12">
        {/* Our Services */}
        <Box className="bg-gray-900/80 rounded-xl border border-gray-700 p-6 shadow-lg" data-aos="fade-up">
          <Typography variant="h4" className="text-3xl font-bold mb-4 text-center">Our Core Services</Typography>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li><strong>Custom Software Development:</strong> From enterprise portals to tailored SaaS solutions, we build secure, scalable applications.</li>
            <li><strong>AI & ML Solutions:</strong> Intelligent systems for automation, data prediction, NLP, and real-time decision-making.</li>
            <li><strong>Web & Mobile Applications:</strong> Cross-platform applications using React, Flutter, and Next.js with modern UI/UX.</li>
            <li><strong>Cloud & DevOps:</strong> Azure, AWS, and GCP architecture, CI/CD pipelines, containerization & monitoring services.</li>
            <li><strong>Consulting & IT Transformation:</strong> Strategy, modernization, and digital transformation for organizations of all sizes.</li>
          </ul>
        </Box>

        {/* Project Portfolio */}
        <Box className="bg-gray-900/80 rounded-xl border border-gray-700 p-6 shadow-lg" data-aos="fade-up">
          <Typography variant="h4" className="text-3xl font-bold mb-4 text-center">Our Project Portfolio</Typography>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li><strong>School Resource Management System</strong> – A robust web-based platform for administrative automation across 50+ schools.</li>
            <li><strong>Online Coding Olympiad Platform</strong> – Nationwide AI-powered MCQ + coding competition engine with live ranking & analytics.</li>
            <li><strong>Smart Healthcare Dashboard</strong> – Real-time health records, patient monitoring, and AI-based diagnosis aid for clinics.</li>
            <li><strong>Cloud-Based Accounting Suite</strong> – An enterprise-level accounting and billing system for SMBs and startups.</li>
          </ul>
        </Box>

        {/* Why Choose Us */}
        <Box className="bg-gray-900/80 rounded-xl border border-gray-700 p-6 shadow-lg" data-aos="fade-up">
          <Typography variant="h4" className="text-3xl font-bold mb-4 text-center">Why Choose HiTech?</Typography>
          <ul className="space-y-3 text-gray-300 text-lg">
            <li>🔹 Experienced team from IITs, NITs, and top-tier engineering backgrounds.</li>
            <li>🔹 Agile methodologies, rapid prototyping, and pixel-perfect delivery.</li>
            <li>🔹 Transparent process, documentation, and unmatched post-deployment support.</li>
            <li>🔹 Trusted by educational institutions, NGOs, startups, and businesses across India.</li>
          </ul>
        </Box>

        {/* Call to Action */}
        <Box className="text-center py-8 border-t border-gray-700" data-aos="fade-up">
          <Typography variant="h5" className="text-2xl font-bold mb-4">Let’s Build Something Exceptional Together</Typography>
          <p className="text-lg text-gray-400 mb-6">Schedule a free consultation and discover how HiTech Consulting Group can elevate your digital journey.</p>
          <a href="mailto:info@hitechconsulting.in">
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-bold py-3 px-10 rounded-lg hover:opacity-90 transition duration-300 text-base md:text-lg">
              Contact Us Today
            </button>
          </a>
        </Box>
      </section>
    </Box>
  );
};

export default Software;
