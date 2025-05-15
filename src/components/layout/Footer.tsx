import React from 'react';
import { footerSections, socialMedia } from '../../data';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'facebook':
        return <Facebook size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      default:
        return <Instagram size={20} />;
    }
  };

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container-padding mx-auto">
        {/* Newsletter */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-medium mb-4">Join our mailing list</h3>
          <p className="text-gray-600 mb-6">Be the first to know about new collections and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-medium text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.url}
                      className="text-gray-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-medium text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              {socialMedia.map((item) => (
                <a
                  key={item.platform}
                  href={item.url}
                  className="text-gray-600 hover:text-primary-700 transition-colors duration-200"
                  aria-label={item.platform}
                >
                  {renderSocialIcon(item.icon)}
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              123 Main Street<br />
              New York, NY 10001<br />
              info@impulse.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Impulse. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="/pages/privacy-policy" className="hover:text-primary-700 transition-colors duration-200">Privacy Policy</a>
            <a href="/pages/terms-of-service" className="hover:text-primary-700 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;