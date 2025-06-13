import { BookOpen, Award, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    period: "2016 - 2018",
    description: "Specialized in Machine Learning and Distributed Systems. Graduated Magna Cum Laude with a GPA of 3.8/4.0.",
    achievements: ["Research Assistant in AI Lab", "Published 3 research papers", "Dean's List for 4 consecutive semesters"]
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "University of California, Berkeley",
    period: "2012 - 2016",
    description: "Comprehensive foundation in software development, algorithms, and system design. Active in various tech clubs and hackathons.",
    achievements: ["Summa Cum Laude Graduate", "President of Programming Club", "Winner of 2 Hackathons"]
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    school: "General Assembly",
    period: "2012",
    description: "Intensive 12-week program covering modern web development technologies and best practices.",
    achievements: ["Top 5% of cohort", "Built 3 full-stack applications", "Received job placement assistance"]
  }
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <BookOpen className="text-purple-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Education</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl text-blue-400 mb-2">{edu.school}</h4>
                    <div className="flex items-center space-x-2 text-gray-400 mb-4">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 mb-3">
                    <Award className="text-yellow-400" size={20} />
                    <h5 className="text-white font-semibold">Key Achievements</h5>
                  </div>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;