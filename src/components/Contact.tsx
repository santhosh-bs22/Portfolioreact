import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:santhosh220506@gmail.com"
              className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <FiMail className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">Email</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Send me a message</div>
                </div>
              </div>
              <div className="text-primary-600 dark:text-primary-400 group-hover:underline">
                santhosh220506@gmail.com
              </div>
            </a>

            <a
              href="tel:+917695801106"
              className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <FiPhone className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">Phone</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Call or WhatsApp</div>
                </div>
              </div>
              <div className="text-primary-600 dark:text-primary-400 group-hover:underline">
                +91 7695801106
              </div>
            </a>

            <div className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <FiMapPin className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">Location</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Based in</div>
                </div>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Chennai, India
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <div className="mb-6">
              <div className="text-gray-600 dark:text-gray-400 mb-4">Connect with me</div>
              <div className="flex justify-center gap-6">
                <a
                  href="https://linkedin.com/in/santhosh-b-s-ab6256278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/santhosh-bs22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-colors"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="mailto:santhosh220506@gmail.com"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or creative partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 