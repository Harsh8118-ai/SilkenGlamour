import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS library for animations
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const SocialMediaLinks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const iconClasses =
    'transition duration-300 transform hover:scale-125 w-10 h-10';

  return (
  <>
  {/* .......... MOBILE VIEW .......... */}
    <div className="sm:hidden flex flex-row sm:flex-col justify-center space-x-8 sm:space-x-0 sm:space-y-4 py-8 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
      {/* Instagram */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="bg-MainBGColorYellow rounded-full p-2 shadow-lg hover:bg-[#635a4f] hover:text-white"
      >
        <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.svg" alt="Instagram" className={iconClasses} />
        </a>
      </div>

      {/* Facebook */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="bg-MainBGColorYellow rounded-full p-2 shadow-lg hover:bg-[#635a4f] hover:text-white"
      >
        <a href="https://www.facebook.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook.svg" alt="Facebook" className={iconClasses} />
        </a>
      </div>

      {/* LinkedIn */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="bg-MainBGColorYellow rounded-full p-2 shadow-lg hover:bg-[#635a4f] hover:text-white"
      >
        <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className={iconClasses} />
        </a>
      </div>

      {/* WhatsApp */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="bg-MainBGColorYellow rounded-full p-2 shadow-lg hover:bg-[#635a4f] hover:text-white"
      >
        <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer">
          <img src="/icons/whatsapp.svg" alt="WhatsApp" className={iconClasses} />
        </a>
      </div>
    </div>

  {/* .......... WEB VIEW .......... */}

    <div className="hidden sm:block fixed bottom-0 left-0 m-4 z-[999]">
      {/* Mobile: Flex-row for horizontal layout, Desktop: Flex-col for vertical layout */}
      <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-MainBGColorYellow rounded-full p-2 sm:p-3 shadow-lg hover:bg-[#635a4f] hover:text-white"
          data-aos="fade-up"
        >
          <FaInstagram className={`${iconClasses} w-6 h-6 sm:w-8 sm:h-8`} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-MainBGColorYellow rounded-full p-2 sm:p-3 shadow-lg hover:bg-[#635a4f] hover:text-white"
          data-aos="fade-up"
        >
          <FaFacebookF className={`${iconClasses} w-6 h-6 sm:w-8 sm:h-8`} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-MainBGColorYellow rounded-full p-2 sm:p-3 shadow-lg hover:bg-[#635a4f] hover:text-white"
          data-aos="fade-up"
        >
          <FaLinkedinIn className={`${iconClasses} w-6 h-6 sm:w-8 sm:h-8`} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/yournumber"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-MainBGColorYellow rounded-full p-2 sm:p-3 shadow-lg hover:bg-[#635a4f] hover:text-white"
          data-aos="fade-up"
        >
          <FaWhatsapp className={`${iconClasses} w-6 h-6 sm:w-8 sm:h-8`} />
        </a>
      </div>
    </div>
    </>
  );
};

export default SocialMediaLinks;
