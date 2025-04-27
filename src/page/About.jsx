import React from 'react';

function About() {
  return (
        <section className="bg-[var(--background)] text-[var(--foreground)] py-16 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Passionate Web Developer crafting modern and responsive websites.
              </p>
            </div>
    
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <div data-aos="fade-right" className="flex justify-center">
                <img 
                  src="https://via.placeholder.com/400x400" 
                  alt="Developer" 
                  className="rounded-2xl shadow-lg" 
                />
              </div>
    
              {/* Right Side - Text */}
              <div data-aos="fade-left">
                <h3 className="text-2xl font-semibold mb-4">Hi, I'm Omolewa Adeniji 👋</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm a highly motivated software developer specializing in building exceptional digital experiences. 
                  With strong skills in modern web technologies like React, Tailwind CSS, and JavaScript, 
                  I bring both design and functionality together to create seamless user interactions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My passion lies in learning new technologies, solving real-world problems, and collaborating with teams 
                  to deliver outstanding projects. I strive to write clean, efficient, and maintainable code, always aiming 
                  for high performance and best practices.
                </p>
    
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-block bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-6 py-3 rounded-lg shadow transition-colors duration-300"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    Let's Work Together 🚀
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}

export default About;