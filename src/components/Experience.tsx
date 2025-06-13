import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experienceData = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: "Leading a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Implemented microservices architecture that improved system performance by 40%.",
    achievements: [
      "Led the development of 3 major client projects worth $2M+",
      "Mentored 8 junior developers and improved team productivity by 30%",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Architected microservices solution serving 100k+ daily users"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
  },
  {
    title: "Full Stack Developer",
    company: "InnovateTech",
    location: "Austin, TX",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client-facing web applications. Collaborated with design teams to create intuitive user interfaces and robust backend systems.",
    achievements: [
      "Built 15+ responsive web applications from scratch",
      "Reduced application load time by 50% through optimization",
      "Integrated third-party APIs and payment systems",
      "Maintained 99.9% uptime across all applications"
    ],
    technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe API"]
  },
  {
    title: "Frontend Developer",
    company: "DigitalCraft Agency",
    location: "Remote",
    period: "2018 - 2019",
    description: "Specialized in creating responsive, pixel-perfect user interfaces for various clients. Worked closely with UX designers to implement complex animations and interactions.",
    achievements: [
      "Delivered 20+ pixel-perfect responsive websites",
      "Improved client satisfaction scores by 25%",
      "Implemented advanced CSS animations and interactions",
      "Collaborated with 10+ designers on diverse projects"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "SASS", "Webpack", "Git"]
  }
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Briefcase className="text-purple-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>

            <div className="space-y-12">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-4 border-gray-900 z-10"></div>

                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="group bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-blue-400 mb-2">{exp.company}</h4>
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3">Key Achievements</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-300 flex items-start space-x-3">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-white font-semibold mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;