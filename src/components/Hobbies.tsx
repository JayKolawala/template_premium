import { Heart, Camera, Music, Plane, Book, Gamepad2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const hobbiesData = [
  {
    title: "Photography",
    icon: Camera,
    description: "Capturing moments and exploring the world through my lens. Specialized in landscape and street photography.",
    image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
  },
  {
    title: "Music Production",
    icon: Music,
    description: "Creating electronic music and experimenting with sound design. Love working with synthesizers and DAWs.",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
  },
  {
    title: "Travel",
    icon: Plane,
    description: "Exploring different cultures and gaining new perspectives. Visited 25+ countries across 5 continents.",
    image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
  },
  {
    title: "Reading",
    icon: Book,
    description: "Passionate about sci-fi novels, tech books, and philosophy. Currently reading about quantum computing.",
    image: "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Strategy games and indie titles enthusiast. Also interested in game development and interactive storytelling.",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
  }
];

const Hobbies = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="hobbies" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="text-purple-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Hobbies & Interests</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond coding, I'm passionate about exploring creativity and pushing boundaries in various fields. 
              These hobbies keep me inspired and bring fresh perspectives to my work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbiesData.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 p-3 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
                      <Icon className="text-purple-400" size={24} />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {hobby.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Personal Philosophy */}
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Life Philosophy</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                "I believe that curiosity is the engine of creativity. Whether I'm debugging code, 
                capturing a sunset, or exploring a new city, I approach everything with the same 
                sense of wonder and desire to understand. These diverse interests don't just make 
                me a more well-rounded person—they make me a better developer by constantly 
                challenging me to think differently and find innovative solutions."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;