import React,{ useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link }  from 'react-router-dom';
import img3 from '../assets/forYou.jpg'
import img2 from '../assets/trending.jpg'
import img1 from '../assets/explore.jpg'
const slides = [
  {
    image: img1,
    title: "Discover Local Food Gems",
    link: "/explore"
  },
  {
    image: img2,
    title: "Top-Rated Restaurants",
    link: "/trending"
  },
  {
    image: img3,
    title: "Recomended For You",
    link: "/home"
  }
];
function HomeCarousel() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setIndex((prev) => (prev + 1) % slides.length);

   return (
    <div className="relative w-full h-[450px] sm:h-[600px] overflow-hidden shadow-lg ">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
           <Link to={slide.link}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded shadow-md">
              Learn More
            </button>
            </Link> 
          </div>
         </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full text-white"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 p-2 rounded-full text-white"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HomeCarousel