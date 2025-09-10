import React, { useState, useRef } from 'react';
import { Menu, X, Linkedin, Github } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";

import Login from './login';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const eventsRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); 
  };

 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  const clubDetails = [
    {
      id: 1,
      title: "Workshops and Seminars",
      description: "Regular sessions hosted by industry experts and faculty provide students with technical knowledge and practical skills to apply in their projects. These workshops cover a wide range of topics, ensuring students stay up-to-date with emerging trends and technologies."
    },
    {
      id: 2,
      title: "Networking and Resource Sharing",
      description: "iCreate connects students with alumni, professionals, and peers, creating opportunities for knowledge exchange and collaboration. In addition, the community offers access to essential tools, software, and mentorship to help students develop their projects and enhance their technical abilities."
    },
    {
      id: 3,
      title: "Project Showcases and Mega Events",
      description: "Students can showcase their projects, receive feedback, and gain recognition during regular presentations and competitions such as RoboWar not only inspire creativity and competition but also allow students to collaborate and test their skills in real-world scenarios."
    }
  ];

  const teamMembers = [
    {
      id: 1,
      initials: "AV",
      name: "Alex Volkov",
      role: "President",
      linkedin: "#",
      github: "#",
      color: "bg-blue-500"
    },
    {
      id: 2,
      initials: "BC",
      name: "Ben Carter",
      role: "Vice President",
      linkedin: "#",
      github: "#",
      color: "bg-pink-500"
    },
    {
      id: 3,
      initials: "CD",
      name: "Chloe Davis",
      role: "Events Lead",
      linkedin: "#",
      github: "#",
      color: "bg-purple-500"
    },
    {
      id: 4,
      initials: "DL",
      name: "David Lee",
      role: "Tech Lead",
      linkedin: "#",
      github: "#",
      color: "bg-orange-500"
    },
    {id: 5,
      initials: "AV",
      name: "joe smith",
      role: "President",
      linkedin: "#",
      github: "#",
      color: "bg-blue-500"
    },
    {
      id: 6,
      initials: "BC",
      name: "Ben Carter",
      role: "Vice President",
      linkedin: "#",
      github: "#",
      color: "bg-pink-500"
    },
    {
      id: 7,
      initials: "CD",
      name: "Chloe Davis",
      role: "Events Lead",
      linkedin: "#",
      github: "#",
      color: "bg-purple-500"
    },
    {
      id: 8,
      initials: "DL",
      name: "David Lee",
      role: "Tech Lead",
      linkedin: "#",
      github: "#",
      color: "bg-orange-500"
    },
    
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="relative z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">

                <img src="src\images\icreatelogo-removebg-preview.png" alt="iCreate Logo" className="h-10 w-auto logo-image" />

              <span className="text-white text-xl font-semibold">iCreate</span>
            </div>

    {/* Desktop Navigation */}
    <nav className={`hidden md:flex sticky top-0 z-50 bg-gray-800/70 backdrop-blur-md rounded-full border border-gray-700 px-6 py-2 space-x-6 shadow-md transition-all duration-300 ${
      window.scrollY > 50 ? 'py-1 px-4 text-sm' : 'py-2 px-6 text-base'
    }`}>
      <button 
        onClick={() => scrollToSection(eventsRef)} 
        className="text-gray-300 hover:text-white transition-colors font-medium"
      >
        EVENTS
      </button>
      <button 
        onClick={() => scrollToSection(teamRef)} 
        className="text-gray-300 hover:text-white transition-colors font-medium"
      >
        TEAM
      </button>
      <button 
        onClick={() => scrollToSection(contactRef)} 
        className="text-gray-300 hover:text-white transition-colors font-medium"
      >
        CONTACT
      </button>
    </nav>





            {/* Log In Button */}
            <button
              onClick={() => setShowLogin(true)}
              className="hidden md:block border border-gray-600 px-4 py-2 rounded text-white text-sm hover:border-gray-400 transition-colors"
            >
              Log In
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 md:hidden">
            <nav className="container mx-auto px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection(eventsRef)} className="block text-gray-300 hover:text-white transition-colors text-sm font-medium">EVENTS</button>
              <button onClick={() => scrollToSection(teamRef)} className="block text-gray-300 hover:text-white transition-colors text-sm font-medium">TEAM</button>
              <button onClick={() => scrollToSection(contactRef)} className="block text-gray-300 hover:text-white transition-colors text-sm font-medium">CONTACT</button>
              <button
                onClick={() => setShowLogin(true)}
                className="w-full border border-gray-600 px-4 py-2 rounded text-white text-sm"
              >
                Log In
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Bring Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Boldest</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ideas</span> to Life.<br />
              Instantly.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-gray-400 text-lg leading-relaxed max-w-md"
            >
              iCreate is the ultimate platform for innovators and thinkers. 
              Stop planning and start building with tools designed to 
              accelerate your creative process.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <button onClick={() => scrollToSection(eventsRef)} className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
                Explore Events
              </button>
            </motion.div>
          </div>

          {/* ✅ Carousel for Events */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative bg-gray-800 rounded-lg p-8 border-l-4 border-pink-500">
            <Slider {...settings}>
              <div>
                <h3 className="text-white text-2xl font-semibold mb-2"> RoboWar</h3>
                <p className="text-gray-400 text-sm">Battle of bots — build, fight, and innovate.</p>
              </div>
              <div>
                <h3 className="text-white text-2xl font-semibold mb-2"> Project Showcase</h3>
                <p className="text-gray-400 text-sm">Display your projects and inspire innovation.</p>
              </div>
              <div>
                <h3 className="text-white text-2xl font-semibold mb-2"> Workshop Day</h3>
                <p className="text-gray-400 text-sm">Hands-on learning with experts and mentors.</p>
              </div>
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* Club Details Section (EVENTS) */}
      <section ref={eventsRef} className="container mx-auto px-6 py-16">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl font-bold text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Club Details</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {clubDetails.map((detail, index) => (
            <motion.div
              key={detail.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 * index }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-800 rounded-lg p-6 relative"
            >
              <div className={`absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                detail.id === 1 ? 'bg-blue-500' : detail.id === 2 ? 'bg-purple-500' : 'bg-pink-500'
              }`}>
                {detail.id}
              </div>
              <div className="mt-8">
                <h3 className="text-white text-lg font-semibold mb-4">{detail.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{detail.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet The Team Section */}
      <section ref={teamRef} className="container mx-auto px-6 py-16">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl font-bold text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Meet The Team</span>
        </motion.h2>
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

...

{/* Team Section */}
<Slider
  dots={true}
  infinite={true}
  speed={500}
  slidesToShow={4} // ✅ Show 4 members at a time
  slidesToScroll={1}
  responsive={[
    {
      breakpoint: 1024, // tablets
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768, // mobile
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480, // small mobile
      settings: { slidesToShow: 1 },
    },
  ]}
>
  {teamMembers.map((member, index) => (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.06 * index }}
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 text-center" // ✅ padding for spacing in carousel
    >
      <div
        className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`}
      >
        {member.initials}
      </div>
      <h4 className="text-white font-semibold mb-1">{member.name}</h4>
      <p className="text-gray-400 text-sm mb-3">{member.role}</p>
      <div className="flex justify-center space-x-2">
        <a href={member.linkedin} aria-label={`${member.name}'s LinkedIn`}>
          <Linkedin size={16} className="text-gray-400 hover:text-white cursor-pointer" />
        </a>
        <a href={member.github} aria-label={`${member.name}'s Github`}>
          <Github size={16} className="text-gray-400 hover:text-white cursor-pointer" />
        </a>
      </div>
    </motion.div>
  ))}
</Slider>

        
      </section>

      {/* Got a Query Section (CONTACT) */}
      <section ref={contactRef} className="container mx-auto px-6 py-16">
        <div className="text-center">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl font-bold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Got a Query?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Fire away with your technical questions, project ideas, or collaboration 
            requests. Let's build something great together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
              Contact Us →
            </button>
          </motion.div>
        </div>
        
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">iC</span>
              </div>
              <span className="text-white font-semibold">iCreate</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 iCreate. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ✅ Login Popup */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-gray-900 rounded-lg w-[90%] md:w-[60%] lg:w-[40%] p-6 text-white"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setShowLogin(false)}
                className="absolute right-1 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
              <Login /> {/* ✅ your login form */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
