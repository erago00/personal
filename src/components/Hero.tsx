import { ArrowRight, Sparkles, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-sm font-medium text-blue-300">
            <Sparkles className="h-4 w-4" />
            Available for opportunities
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Mathijs Schaepdryver
              </span>
            </h1>
            <p className="text-3xl lg:text-4xl font-semibold text-blue-100">
              Software Engineering Student
            </p>
          </div>
          
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
            I love turning ideas into working solutions and exploring 
            what technology can do. I'm currently pursuing my degree while building projects 
            that genuinely excite me and help me grow.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
            >
              Get In Touch
              <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-slate-800/50 border-2 border-blue-500/30 text-blue-100 rounded-lg font-medium hover:border-blue-400/50 hover:bg-slate-800/70 transition-all hover:-translate-y-1 shadow-sm backdrop-blur-sm"
            >
              View My Work
            </button>
          </div>

          {/* Social links with hover effects */}
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-slate-800/70 backdrop-blur-sm border border-blue-500/20 shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:bg-blue-600 transition-all hover:-translate-y-1"
            >
              <Github className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="www.linkedin.com/in/mathijs-schaepdryver-356586292" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-slate-800/70 backdrop-blur-sm border border-blue-500/20 shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:bg-blue-600 transition-all hover:-translate-y-1"
            >
              <Linkedin className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="mailto:mathijs.schaepdryver@gmail.com"
              className="group p-3 rounded-full bg-slate-800/70 backdrop-blur-sm border border-blue-500/20 shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:bg-blue-600 transition-all hover:-translate-y-1"
            >
              <Mail className="h-5 w-5 text-blue-200 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right content - Enhanced image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glowing rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full border-2 border-blue-400/20 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute -inset-8 rounded-full border-2 border-blue-500/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            
            {/* Image container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full blur-xl"></div>
              <div className="relative rounded-full w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-slate-800 to-slate-700 border-4 border-blue-400/20 shadow-2xl shadow-blue-500/20 flex items-center justify-center text-blue-200/50 hover:-translate-y-2 transition-transform duration-300 backdrop-blur-sm">
                <p className="text-center px-8">Your professional headshot here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400/50 rounded-full mt-2 animate-pulse"></div>
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

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
      `}</style>
    </section>
  );
}