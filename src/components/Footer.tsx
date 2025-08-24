import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black-800 text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Left Section with Logo */}
        <div className="w-full md:w-1/3 text-center md:text-left">
  <div className="flex justify-center md:justify-start m-4">
    {/* <Image 
      src="/SSITLogo.png" 
      alt="SRI SAI RAM INSTITUTE OF TECHNOLOGY Logo" 
      width={250} 
      height={250} 
      className="mb-2" 
    /> */}
  </div>
  <div className="flex justify-center md:justify-center space-x-4 ml-0 md:ml-2">
    <a href="https://www.facebook.com/SairamInstituteOfTechnology?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="text-2xl" />
    </a>
    <a href="https://x.com/sairam_it" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-2xl" />
    </a>
    <a href="https://www.instagram.com/praestantia_2k24?igsh=MTV0NmJlM2cxaHNyMA==" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-2xl" />
    </a>
  </div>
</div>


        {/* Center Section (Responsive Map) */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative h-0 pb-[40%] w-full max-w-sm mx-auto overflow-hidden rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1750647706494!2d80.0506575751227!3d12.960647087353676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f51f638ddfbb%3A0xf3aef7ec7c8979ba!2sSri%20Sairam%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1727280188360!5m2!1sen!2sin"
              allowFullScreen={false}
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0 rounded-md"
            ></iframe>
          </div>
        </div>

        {/* Right Section (Quick Links) */}
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="https://ece.sairamit.edu.in/department/" className="hover:underline">About Us</a></li>
            <li><a href="https://ece.sairamit.edu.in/research-projects/" className="hover:underline">Research</a></li>
            <li><a href="https://ece.sairamit.edu.in/achievement/" className="hover:underline">Achievement</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
