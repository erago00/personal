import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo - connect your backend)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in">
            <div className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/20 rounded-xl hover:border-blue-400/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:mathijs.schaepdryver@gmail.com"
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    mathijs.schaepdryver@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/20 rounded-xl hover:border-blue-400/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-slate-300">
                    Your City, Country
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/70 backdrop-blur-sm border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-400/40 transition-all hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mathijs-schaepdryver-356586292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/70 backdrop-blur-sm border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-400/40 transition-all hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:mathijs.schaepdryver@gmail.com"
                  className="w-12 h-12 bg-slate-800/70 backdrop-blur-sm border border-blue-500/20 rounded-lg flex items-center justify-center text-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-400/40 transition-all hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 bg-slate-800/50 backdrop-blur-sm border-2 border-blue-500/20 rounded-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                />
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </div>
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