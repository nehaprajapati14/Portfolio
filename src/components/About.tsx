import React from 'react';
import myPicture from '../assets/mypic.jpg';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-10 h-10 text-blue-500" />,
      title: "Strong Programming",
      description:
        "Proficient in C++, Java, and Python with a solid understanding of data structures, algorithms, and problem-solving.",
    },
    {
      icon: <Palette className="w-10 h-10 text-teal-500" />,
      title: "Web Development",
      description:
        "Experienced in building responsive web applications using HTML, CSS, JavaScript, and modern UI design principles.",
    },
    {
      icon: <Zap className="w-10 h-10 text-orange-500" />,
      title: "Real-World Projects",
      description:
        "Developed a healthcare-based recommendation system that suggests doctors and medicines based on user needs and reviews.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl ml-auto mr-0 pl-12">
          {/* Header */}
          <div className="text-left mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Profile photo */}
            <div className="order-2 lg:order-1 flex justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative">
                  <img
                    src={myPicture}
                    alt="Profile"
                    className="w-80 h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I am a final-year B.Tech Computer Science student at ABES Engineering College with a strong foundation in programming, data structures, and web development. I have hands-on experience in C++, Java, Python, JavaScript, HTML, CSS, and MySQL.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I have developed a healthcare-based e-commerce recommendation system that suggests doctors and medicines based on user needs and reviews. This project gave me practical experience in handling data, building user-centric applications, and implementing recommendation logic to solve real-world problems.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  I actively participate in coding contests and continuously improve my problem-solving skills. I am passionate about building scalable applications and learning new technologies.
                </p>

                <p className="text-lg text-gray-800 font-medium">
                  I am currently seeking opportunities as a Software Engineer where I can apply my skills and grow in a challenging environment.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    {highlight.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {highlight.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;