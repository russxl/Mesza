import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

interface FooterProps {
  textColor?: 'white' | 'black';
}

export default function Footer({ textColor = 'white' }: FooterProps) {
    const textColorClass = textColor === 'black' ? 'text-[#000000]' : 'text-white';
    const borderColorClass = textColor === 'black' ? 'border-[#000000]' : 'border-white';
    const placeholderColorClass = textColor === 'black' ? 'placeholder-[#000000]' : 'placeholder-white';

    return (
        <footer className="sticky bottom-0 w-full px-4 py-3">
          <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
            {/* Email Subscription */}
            <div className="w-full sm:w-auto">
              <div className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Subscribe to our newsletter"
                  className={`bg-transparent border ${borderColorClass}/${textColor === 'black' ? '100' : '20'} rounded-full px-4 py-2 text-sm ${textColorClass} ${placeholderColorClass}/${textColor === 'black' ? '100' : '50'} focus:outline-none focus:border-${textColor}/${textColor === 'black' ? '100' : '40'} w-full sm:w-[245px]`}
                />
                <button className={`${textColor === 'white' ? 'opacity-100 hover:opacity-40' : ''} transition-opacity`}>
                  <FiArrowRight className={`w-6 h-6 sm:w-8 sm:h-8 ${textColorClass}`} />
                </button>
              </div>
            </div>

            {/* Social Media Icons and Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mb-4 sm:mb-0">
              <div className="flex gap-6 sm:gap-5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColor === 'white' ? 'opacity-100 hover:opacity-40' : ''} transition-opacity`}
                >
                  <FaFacebook className={`w-7 h-7 sm:w-7 sm:h-7 ${textColorClass}`} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColor === 'white' ? 'opacity-100 hover:opacity-40' : ''} transition-opacity`}
                >
                    <FaInstagram className={`w-7 h-7 sm:w-7 sm:h-7 ${textColorClass}`} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColor === 'white' ? 'opacity-100 hover:opacity-40' : ''} transition-opacity`}
                >
                  <FaTwitter className={`w-7 h-7 sm:w-7 sm:h-7 ${textColorClass}`} />
                </a>
              </div>
              <div className="text-center sm:text-left">
                <span className={`${textColorClass} ${textColor === 'white' ? 'opacity-100 hover:opacity-40' : ''} transition-opacity text-sm`}>
                  © 2025 Your Company Name. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </footer>
    );
}
