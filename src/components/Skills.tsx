import { Code, Database, Cloud, Palette, Monitor } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "SASS/SCSS", level: 85 }
    ]
  },
  {
    title: "Backend Development",
    icon: Code,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express.js", level: 90 },
      { name: "Django", level: 80 },
      { name: "RESTful APIs", level: 95 },
      { name: "GraphQL", level: 75 }
    ]
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "Prisma", level: 75 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "Nginx", level: 80 },
      { name: "Linux", level: 85 }
    ]
  },
  {
    title: "Design & Tools",
    icon: Palette,
    skills: [
      { name: "Figma", level: 80 },
      { name: "Adobe XD", level: 75 },
      { name: "Git", level: 95 },
      { name: "Webpack", level: 85 },
      { name: "Vite", level: 90 },
      { name: "Jest", level: 80 }
    ]
  }
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Code className="text-purple-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Skills</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-gray-700/50 to-gray-600/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {skill.name}
                  </h4>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                <h4 className="text-2xl font-bold text-white mb-2">8+</h4>
                <p className="text-gray-400">Programming Languages</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
                <h4 className="text-2xl font-bold text-white mb-2">15+</h4>
                <p className="text-gray-400">Frameworks & Libraries</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                <h4 className="text-2xl font-bold text-white mb-2">10+</h4>
                <p className="text-gray-400">Development Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;