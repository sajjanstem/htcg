import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-200 font-[Inter]">
      <Helmet>
        <title>HiTech Consulting Group | Contact Us</title>
        <meta name="description" content="HiTech Consulting Group Contact Page" />
        <meta
          name="keywords"
          content="HiTech Consulting Group, Contact, Software Development, AI Solutions, Cloud Services"
        />
        <meta name="author" content="HiTech Consulting Group" />
      </Helmet>

      {/* Header */}
      <div className="text-center py-20 px-4 border-b border-gray-700" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          Let’s start a conversation. We’re here to help you build the future with innovative technology.
        </p>
      </div>

      {/* Contact Info Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div
          className="bg-white/5 rounded-xl border border-gray-700 p-8 shadow-md hover:shadow-lg transition"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-yellow-500">
                Get in Touch
              </h2>
              <div className="space-y-6 text-gray-400">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Registered Office
                  </h3>
                  <p>
                    HiTech Consulting Group <br />
                    Nexus business centre <br />
                    11/G194 Plot no 803, 5th Floor <br />
                    Ayyappa society, Madhapur, Hyderabad, Telangana 500081 <br />
                    India
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:info@hitechconsultinggroup.com"
                    className="text-yellow-500 hover:underline"
                  >
                    info@hitechconsultinggroup.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Phone
                  </h3>
                  <p>+91 9666033029</p>
                  <p>+91 7975176756</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1693718218485!2d78.38922111043864!3d17.451605683377483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb911298f93d07%3A0x6176a920610553a7!2sNEXUS%20BUSINESS%20CENTRE!5e0!3m2!1sen!2sin!4v1753545701965!5m2!1sen!2sin"
                className="w-full h-96 rounded-lg border border-gray-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HiTech Consulting Group Location"
              ></iframe>
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

export default ContactUs;
