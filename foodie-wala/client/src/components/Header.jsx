import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/slogo.png'
import { useUser, useClerk, UserButton } from '@clerk/clerk-react';
import SaveUser from './SaveUser';

function Header() {
  const [menuOpen,setMenuOpen]=useState(false);
  const {user}=useUser()
  const {openSignIn}=useClerk()
  return (

    <div>
      <SaveUser />
        <nav className="bg-white border-b border-[#5c4033] text-[#5c4033] m-2">
              <div className="max-w-7xl mx-auto px-0 py-0 relative flex items-center justify-center">
        
                {/* Left Nav */}
                <div className="hidden md:flex absolute left-1/3 -translate-x-full space-x-10  gap-10  text-lg font-semibold">
                 <Link to="/home" ><li className="cursor-pointer list-none">Home</li></Link>
                 <Link to="/explore" ><li className="cursor-pointer list-none">Explore</li></Link>
                 <Link to="/trending" > <li className="cursor-pointer list-none">Trending</li></Link>
                </div>
        
                {/* Center Logo */}
                <div className="h-30 w-30 z-10">
                  <img src={logo} alt="Logo" className="h-full w-full object-contain" />
                </div>
        
                {/* Right Nav */}
                <div className="hidden md:flex absolute right-1/3 translate-x-full space-x-10 gap-10 text-lg font-semibold">
                  <li className="cursor-pointer list-none"> <Link to="/foodmap">FoodMap</Link></li>
                  <li className="cursor-pointer list-none"><Link to="/profile">Profile</Link></li>
                </div>
        
                {/* Logout Button (Always rightmost) */}
                <div className="hidden md:block absolute right-4">
                  {user ? (<UserButton />) :(<button onClick={openSignIn} className="bg-[#f5b423] hover:bg-[#e0a615] text-white text-sm font-semibold py-2 px-4 rounded">
                    LOGIN
                  </button>) }
                </div>
        
                {/* Mobile Menu Button */}
                <div className="md:hidden absolute right-4 z-20">
                  <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none">
                    ☰
                  </button>
                </div>
              </div>
        
              {/* Mobile Dropdown */}
              {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-3 text-center text-lg font-semibold">
                  <div className="space-y-2">
                    <div className="cursor-pointer">Home</div>
                    <div className="cursor-pointer">Explore</div>
                    <div className="cursor-pointer">Trending</div>
                    <div className="cursor-pointer">FoodMap</div>
                    <div className="cursor-pointer">Profile</div>
                  </div>
                  <button className="bg-[#f5b423] hover:bg-[#e0a615] text-white text-sm font-semibold py-2 px-4 rounded">
                    LOGOUT
                  </button>
                </div>
              )}
            </nav>
    </div>
  )
}

export default Header