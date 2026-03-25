import { motion } from 'motion/react';
import { Code2, Database, Wrench, Layers, BookOpen } from 'lucide-react';

interface Skill {
  name: string;
  label?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: Code2,
      skills: [
        { name: 'Python', label: 'Strong Proficiency' },
        { name: 'JavaScript', label: 'ES6+ Expert' },
        { name: 'HTML5', label: 'Expert' },
        { name: 'CSS3', label: 'Expert' },
      ]
    },
    {
      title: 'Frameworks',
      icon: Layers,
      skills: [
        { name: 'Django', label: 'Production Experience' },
        { name: 'Django REST Framework', label: 'Production Experience' },
        { name: 'React.js', label: 'Basic Experience' },
        { name: 'Tailwind CSS', label: 'Proficient' },
      ]
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MySQL', label: 'Hands-on Experience' },
        { name: 'Django ORM', label: 'Production Experience' },
      ]
    },
    {
      title: 'Tools & APIs',
      icon: Wrench,
      skills: [
        { name: 'Git', label: 'Production Exposure' },
        { name: 'REST APIs', label: 'Production Experience' },
        { name: 'CairoSVG', label: 'Project Experience' },
        { name: 'GSAP', label: 'Project Experience' },
      ]
    },
    {
      title: 'Core Concepts',
      icon: BookOpen,
      skills: [
        { name: 'RESTful APIs', label: 'Production Experience' },
        { name: 'Authentication', label: 'Hands-on Experience' },
        { name: 'RBAC', label: 'Production Experience' },
        { name: 'Database Design', label: 'Hands-on Experience' },
        { name: 'OOP Principles', label: 'Strong Understanding' },
        { name: 'Responsive Design', label: 'Expert' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 text-white">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-blue-500/10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 group-hover:border-blue-400/50 transition-colors">
                    <category.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group/skill"
                    >
                      <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-lg px-4 py-3 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20 cursor-default">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-200 group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          {skill.label && (
                            <span className="text-xs text-blue-400/80 bg-blue-500/10 px-2 py-1 rounded-full border border-blue-500/20">
                              {skill.label}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
            <p className="text-gray-300 text-sm">
              🚀 Continuously learning and expanding my technical skill set
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
