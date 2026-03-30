import { motion } from 'motion/react';
import { Code2, GraduationCap, Award, Target } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '3+' },
    { icon: Award, label: 'Years Experience', value: '1' },
    { icon: Target, label: 'Technical Skills', value: '6+' },
    { icon: GraduationCap, label: 'Degrees', value: '2' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM5MDQ4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="About Me"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl">Full Stack Developer</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a Junior Full Stack Developer with 7 months of professional experience at Ninestars Information Technologies, 
              specializing in Django, MySQL, and modern frontend technologies. I hold a Master's in Computer Applications (75%) 
              and a Bachelor's in Science (80%) from Yogi Vemana University.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My passion lies in building end-to-end web applications, from database design to responsive user interfaces. 
              I have hands-on experience developing RESTful APIs, implementing authentication systems, and creating automated solutions 
              for enterprise clients like Adobe, Microsoft, and Audible.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">Django</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">React.js</span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full">MySQL</span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full">Python</span>
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full">JavaScript</span>
              <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full">REST APIs</span>
            </div>
          </motion.div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <div className="text-3xl mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
