
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-900 to-purple-800 text-purple-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-purple-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Neha Prajapati
            </span>
          </h1>

          <h2 className="text-xl md:text-3xl text-purple-300 mb-8 animate-fadeInUp animation-delay-500">
            Full Stack Web Developer
          </h2>

          <p className="text-lg md:text-xl text-purple-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-1000">
            I design and develop beautiful, responsive websites and web applications using modern technologies, with a passion for clean code, seamless user experiences, and turning ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp animation-delay-1500">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
<a
  href="/href="Neha_Prajapati_Resume.pdf""
  download="Neha_Prajapati_Resume.pdf"
  className="px-8 py-4 border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
>
  Download Resume
</a>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-fadeInUp animation-delay-2000">
            <a
              href="https://github.com/nehaprajapati14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-700/20 hover:bg-purple-700/40 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} className="text-purple-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/neha-prajapati-028242354/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-700/20 hover:bg-purple-700/40 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} className="text-purple-300" />
            </a>
            <a
              href="mailto:nehaprajapati8545@gmail.com"
              className="p-3 bg-purple-700/20 hover:bg-purple-700/40 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} className="text-purple-300" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:animate-none transition-all duration-300 opacity-70 hover:opacity-100 text-purple-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

