import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Your Name</h1>
          <div className="space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="/terms" className="text-gray-600 hover:text-gray-900">Terms</a>
          </div>
        </nav>  
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hi, I'm Your Name 👋
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="p-2 rounded-full hover:bg-gray-100">
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-100">
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-100">
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Project Title
              </h3>
              <p className="text-gray-600 mb-4">
                Brief description of the project and the technologies used.
              </p>
              <div className="flex justify-between items-center">
                <div className="space-x-2">
                  <span className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full">
                    React
                  </span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full">
                    Node.js
                  </span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              I'm a passionate developer with a focus on creating clean, efficient, and user-friendly applications. 
              Currently exploring new technologies and always eager to learn more.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Frontend</h3>
                <p className="text-gray-600">React, HTML, CSS</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Backend</h3>
                <p className="text-gray-600">Node.js, Express</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Database</h3>
                <p className="text-gray-600">MongoDB, SQL</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Tools</h3>
                <p className="text-gray-600">Git, VS Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Get In Touch
        </h2>
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;