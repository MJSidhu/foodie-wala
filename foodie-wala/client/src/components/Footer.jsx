import React from 'react'
import logo from '../assets/slogo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
function Footer() {
  return (
    <div>
        <footer className="bg-[#2c2c2c] text-white text-sm">
              <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* About */}
                <div>
                  <h2 className="text-lg font-bold mb-3">ABOUT FOODIE WAALA</h2>
                  <p className="text-gray-300 leading-6">
                    Foodie Waala helps you discover the best dishes and trending restaurants in your area. Read genuine reviews, explore food maps, and become a verified food explorer. Your taste adventure starts here!
                  </p>
                </div>
        
                {/* Logo Center */}
                <div className="flex flex-col items-center">
                  <img src={logo} alt="Foodie Waala Logo" className="w-24 mb-4" />
                  <div className="flex space-x-4">
                    <a href="#" className="bg-[#f5b423] p-3 rounded-full text-black hover:bg-yellow-500"><FaFacebookF /></a>
                    <a href="#" className="bg-[#f5b423] p-3 rounded-full text-black hover:bg-yellow-500"><FaTwitter /></a>
                    <a href="#" className="bg-[#f5b423] p-3 rounded-full text-black hover:bg-yellow-500"><FaInstagram /></a>
                    <a href="#" className="bg-[#f5b423] p-3 rounded-full text-black hover:bg-yellow-500"><FaYoutube /></a>
                  </div>
                </div>
        
                {/* Contact Info */}
                <div>
                  <h2 className="text-lg font-bold mb-3">CONTACT US</h2>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2"><FaPhone /> +91 98765 43210</li>
                    <li className="flex items-center gap-2"><FaMapMarkerAlt /> Hyderabad, India - 500001</li>
                    <li className="flex items-center gap-2"><FaEnvelope /> support@foodiewaala.com</li>
                    <li className="flex items-center gap-2"><FaGlobe /> www.foodiewaala.com</li>
                  </ul>
                </div>
              </div>
        
              {/* Bottom bar */}
              <div className="text-center border-t border-gray-700 py-4 text-gray-400 text-xs">
                © {new Date().getFullYear()} Foodie Waala. All rights reserved.
              </div>
            </footer>
    </div>
  )
}

export default Footer