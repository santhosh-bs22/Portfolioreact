import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    { 
      icon: <FiMail size={24} />, 
      title: 'Email Address', 
      details: 'santhosh220506@gmail.com',
      link: 'mailto:santhosh220506@gmail.com',
      color: 'text-primary-600 dark:text-primary-400'
    },
    { 
      icon: <FiPhone size={24} />, 
      title: 'Phone Number', 
      details: '+91 7695801106',
      link: 'tel:+917695801106',
      color: 'text-green-600 dark:text-green-400'
    },
    { 
      icon: <FiMapPin size={24} />, 
      title: 'Location', 
      details: 'Chennai, India',
      color: 'text-blue-600 dark:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-28 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Let's <span className="text-primary-600 dark:text-primary-500">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I’m currently available for freelance projects and new opportunities. Drop me a line!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
          
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Details
            </h3>
            
            <div className="space-y-6">
                {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                        <div className={`w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color.replace('text', 'bg').replace('-600', '-100').replace('-400', '-900/30')}`}>
                            {React.cloneElement(item.icon, { className: item.color })}
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.title}</div>
                            {item.link ? (
                                <a href={item.link} className="font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                                    {item.details}
                                </a>
                            ) : (
                                <div className="font-semibold text-gray-900 dark:text-white">
                                    {item.details}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Find Me Online</h4>
                <div className="flex gap-4">
                    <a
                        href="https://linkedin.com/in/santhosh-b-s-ab6256278"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                        title="LinkedIn"
                    >
                        <FiLinkedin size={18} />
                    </a>
                    <a
                        href="https://github.com/santhosh-bs22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-600/10 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
                        title="GitHub"
                    >
                        <FiGithub size={18} />
                    </a>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="I'm interested in..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg shadow-lg shadow-primary-500/30"
              >
                Send Message
                <FiSend size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;