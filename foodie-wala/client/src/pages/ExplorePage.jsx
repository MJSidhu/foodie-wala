import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import { LocateFixed } from 'lucide-react';
import Tab from '../components/Tab';
import RestaurantCard from '../components/RestaurantCard';
import { useNavigate, useLocation } from 'react-router-dom';



function ExplorePage() {
  const [searchActive, setsearchActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/explore?search=${encodeURIComponent(query)}`);
    setsearchActive(!searchActive);
    // fetch should be written here
    console.log("Search triggered for:", query);
  }

  const clearSearch = () => {
    setsearchActive(false);
    //results should be made empty here
  }
  const [searchTerm, setsearchTerm] = useState("");

  const category = ["Indian", "Italian", "Cafe", "Bakery", "Family-Friendly", "Budget-Friendly", " Vegan/Healthy", "Top Rated", " Recently-Added", "chineese", "clean", "hello", "brooo", "byeee"]

  useEffect(() => {
    console.log(location);
    const params = new URLSearchParams(location.search)
    const initialValue = params.get("search") || "";
    setsearchTerm(initialValue);                        // Set it to state
    if (initialValue) {
      handleSearch(initialValue);                       // Optionally trigger search
    }
  }, [location.search]);

  return (
    <div className='flex flex-col justify-center items-center my-4 w-full'>

      {/* searchbar and location */}
      <div className='flex flex-col items-center justify-center gap-3 my-4 w-full'>

        <SearchBar onSearch={handleSearch} className='' initialValue={searchTerm} />

        {/* search results */}

        

        {searchActive && (
  <div className="mt-2 flex justify-center w-full">
    {/* Scrollable card section */}
    <div
      className="w-[70%] max-w-xl max-h-[300px] overflow-y-auto bg-white rounded-lg shadow-lg px-4 py-2 space-y-4"
      onClick={(e) => e.stopPropagation()}
    >
      <RestaurantCard small={true} />
      <RestaurantCard small={true} />
      <RestaurantCard small={true} />
      <RestaurantCard small={true} />
      <RestaurantCard small={true} />
      <RestaurantCard small={true} />
    </div>
  </div>
)}





        <div className="flex  items-center justify-center gap-2">
          <div className='w-[75px] h-[75px] flex items-center justify-center bg-gray-100 rounded-full hover:scale-105 transition-transform duration-300'>
            <LocateFixed className='h-[50px] w-[50px]  text-gray-300 hover:text-gray-400' />
          </div>
          <p className='text-[#5c4033] text-lg font-medium'>Explore food near you</p>
        </div>
      </div>

      <div className='w-full px-4 sm:px-8 m-4'>
        <h1 className='text-2xl sm:text-3xl font-semibold text-[#5c4033] border-l-4 border-[#f5b423] pl-4'>
          Categories
        </h1>
      </div>

      {/* categories */}
      <div className='flex gap-2 mx-7 my-2 flex-wrap'>
        {category.map((item) => <Tab key={item} text={item} className=' ' />)}
      </div>
      {/* restaurants list */}
      <div className="w-full px-4 sm:px-8 lg:px-16">
        {/* Top bar with heading and Sort/Filter */}
        <div className="flex justify-between items-center border-b-2 border-yellow-500 py-4 mb-6">
          <h2 className="text-2xl font-semibold text-[#5c4033]">Suggested results</h2>
          <div className="flex gap-4">
            <button className="bg-yellow-500 text-white font-medium px-4 py-2 rounded hover:bg-yellow-600 transition">Sort</button>
            <button className="bg-yellow-500 text-white font-medium px-4 py-2 rounded hover:bg-yellow-600 transition">Filter</button>
          </div>
        </div>

        {/* Grid of Restaurant Cards */}
        <div className='flex items-center justify-center my-5'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </div>
        </div>
      </div>
      {/* new  */}
      <div className='felx w-11/12 border-b-2 border-yellow-500 py-4 '>
        <h2 className='text-2xl font-semibold text-[#5c4033]'>Newly launched</h2>
      </div>
      <div className=' w-[70%] overflow-x-auto whitespace-nowrap px-4 py-4 scroll-smooth scrollbar-hide'>
        <div className='flex gap-10 w-max'>
          {/* test cards */}
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>


    </div>
  )
}

export default ExplorePage