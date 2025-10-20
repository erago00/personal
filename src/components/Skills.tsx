import { Code, Database, Globe, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C#", level: 70 },
        { name: "PHP", level: 60 },
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "View.js/React", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 80 },
      ],
    },
    {
      title: "Databases & Backend",
      icon: Database,
      skills: [
        { name: "SQL/PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 85 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Cpu,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS/Cloud", level: 65 },
        { name: "Linux", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/20 rounded-xl hover:border-blue-400/40 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                      <span className="text-sm text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(idx * 0.1) + (skillIdx * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-2 border-blue-400/20 rounded-xl backdrop-blur-sm">
            <p className="text-white font-medium">
              Always learning and expanding my skill set with the latest technologies
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}