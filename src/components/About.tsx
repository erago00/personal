import { GraduationCap, Code2, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              description: "Pursuing a Bachelor's degree in Software Engineering with a focus on backend and ERP's.",
              delay: "0s"
            },
            {
              icon: Code2,
              title: "Experience",
              description: "Hands-on experience with modern web technologies, data structures, and building full-stack applications.",
              delay: "0.1s"
            },
            {
              icon: Lightbulb,
              title: "Interests",
              description: "Passionate about cloud solutions, problem-solving and staying updated with the latest tech trends.",
              delay: "0.2s"
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="group p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/20 rounded-xl hover:border-blue-400/40 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20"
              style={{ animationDelay: item.delay }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/20 rounded-2xl p-8 shadow-xl animate-fade-in">
          <h3 className="text-2xl font-semibold mb-4 text-white">Background</h3>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I'm studying software engineering. It all started with 
              being curious about how tech works, 
              and now I'm focused on building things that can make a real difference.
            </p>
            <p>
              Through my studies and personal projects, 
              I've gotten comfortable with several programming languages and frameworks. 
              The best part? Taking on tough problems and watching an idea transform into something real.
            </p>
            <p>
              When I'm not buried in coursework or coding, 
              you'll catch me exploring new tech, jumping into open-source projects,
              or diving down AI and machine learning rabbit holes. 
              The field moves fast, and I like staying in the loop.
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