import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import SocialLinks from './components/SocialLinks';
import TypewriterEffect from './components/TypewriterEffect';
import ProjectPreview from './components/ProjectPreview';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaBrain, FaCode } from "react-icons/fa";

const getSkillLevel = (percentage: number) => {
  if (percentage >= 91) return "Proficiency";
  if (percentage >= 71) return "Advanced";
  if (percentage >= 41) return "Intermediate";
  return "Beginner";
};

const skills = [
  {
    category: "Frontend",
    items: [
      { name: 'HTML', level: 90, icon: FaHtml5},
      { name: 'CSS', level: 85, icon: FaCss3Alt },
      { name: 'JavaScript', level: 45, icon: FaJs },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: 'Python', level: 92, icon: FaPython },
      { name: 'ML', level: 25, icon: FaBrain },
      { name: 'App & Web Development', level: 74, icon: FaCode },
    ]
  }
];

const projects = [
  {
    title: 'NextPaper',
    description: 'AI-powered question paper prediction for competitive exams with detailed solutions and mock tests',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'Education', 'Web Development'],
  },
  {
    title: 'PerformX',
    description: 'Platform for performers to showcase talent and get opportunities with realtime leaderboard',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    tags: ['Mobile App', 'Entertainment', 'Social'],
  },
];
const scriptURL = 'https://script.google.com/macros/s/AKfycbzwHCinWDfBkGdFe5l9U0ew7AjqnDNBL13bG67I3ir4rfpG0fGVmswndepOjUO-MW6U/exec';

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Form submitted successfully!");
    } else {
      alert("Form submission failed!");
    }
  } catch (error) {
    console.error("Error!", error);
  }
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', contact: '', address: '' });

  return (
    <div className="min-h-screen bg-black text-white">
      <ParticlesBackground />
      <Navbar />

      {selectedProject && (
        <ProjectPreview
          title={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center z-10">
        <TypewriterEffect />
          <h1 className="text-2xl md:text-4xl mb-2 bg-clip-text mt-4 text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
            Milanjyoti Ray
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-2">Student at IIT Madras</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/photo.jpeg"
                alt="Profile"
                className="relative w-full h-[400px] object-cover object-top rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-gray-900/80 p-8 rounded-lg backdrop-blur-sm">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a student at IIT Madras pursuing a BS Degree in Data Science and Applications. 
                  My interests span across web development, startups, AI, technology, education, and entertainment.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  I'm passionate about creating innovative solutions that make a difference and constantly exploring new technologies to expand my skillset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          {skills.map((skillGroup, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">{skillGroup.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="skill-card bg-black p-6 rounded-xl border border-gray-800">
                    <div className="flex items-center gap-4 mb-4">
                    <skill.icon className="w-8 h-8 text-blue-500" />
                      <h4 className="text-xl font-medium">{skill.name}</h4>
                    </div>
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400 bg-blue-900">
                          {getSkillLevel(skill.level)}
                      </div>
                        <div className="text-xs font-semibold inline-block text-blue-400">
                          {skill.level}%
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-800">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-blue-400"
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project.title)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 border border-gray-800 border-t-0 rounded-b-xl">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-black p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Info</h3>
              <div className="space-y-4">
                <p className="text-gray-300">Feel free to reach out for collaborations or just a friendly hello</p>
                <div className="text-gray-300 space-y-2 mt-4">
                  <p><strong>📍 Address:</strong> Agomani, Assam, India-783335</p>
                  <p><strong>📞 Phone:</strong> +91 9678165375</p>
                  <p><strong>✉️ Email:</strong> milanjyotiray84@gmail.com</p>
                </div>
                <div className="mt-8">
                  <SocialLinks />
                </div>
              </div>
            </div>
            <div className="bg-black p-8 rounded-xl border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-800 text-gray-300 p-3 rounded-md border border-gray-700"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-800 text-gray-300 p-3 rounded-md border border-gray-700"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-400 mb-2">
                    Contact
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full bg-gray-800 text-gray-300 p-3 rounded-md border border-gray-700"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-400 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-gray-800 text-gray-300 p-3 rounded-md border border-gray-700"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-800 text-gray-300 p-3 rounded-md border border-gray-700"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;
