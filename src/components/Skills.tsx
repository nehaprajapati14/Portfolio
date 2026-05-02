import React from 'react';
import { SiLeetcode, SiHackerrank, SiGithub } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "TypeScript", level: 75 },
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Git & GitHub", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "REST APIs", level: 75 },
        { name: "Webpack", level: 65 },
        { name: "Testing", level: 60 },
      ]
    }
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-blue-600 to-teal-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  {category.title}
                </h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                'HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Node.js',
                'Tailwind CSS', 'Git', 'Webpack', 'REST APIs', 'Responsive Design', 'Testing'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Competitive Programming Profiles */}
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Profiles & Competitive Programming
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://leetcode.com/u/neha_praj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full hover:bg-yellow-200 transition-colors duration-300"
              >
                <SiLeetcode size={20} /> LeetCode
              </a>
              <a
                href="https://www.hackerrank.com/profile/2022b0121021"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors duration-300"
              >
                <SiHackerrank size={20} /> HackerRank
              </a>
              <a
                href="https://github.com/nehaprajapati14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-900 rounded-full hover:bg-gray-300 transition-colors duration-300"
              >
                <SiGithub size={20} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
