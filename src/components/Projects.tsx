import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack online shopping platform with user authentication, product management, and payment integration. Built with React, Node.js, and MongoDB.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "AI Task Manager",
      description: "An intelligent task management application that uses machine learning to prioritize tasks and suggest optimal schedules. Features natural language processing.",
      tags: ["Python", "TensorFlow", "Flask", "React"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for tracking social media metrics across multiple platforms with real-time data visualization.",
      tags: ["TypeScript", "Next.js", "PostgreSQL", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application with location-based forecasts, interactive maps, and historical weather data analysis.",
      tags: ["JavaScript", "React", "API Integration", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-4">Projects & Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            A showcase of my work, including personal projects, internships, and academic achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/20 rounded-xl hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/30"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 border border-blue-500/20 text-blue-300 rounded-lg hover:bg-slate-700 hover:border-blue-400/40 transition-all text-sm font-medium"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all text-sm font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </div>
            </div>
          ))}
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