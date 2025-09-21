import React from 'react'
import HomeCarousel from '../components/homeCarousel'
import RestaurantCard from '../components/RestaurantCard'

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center '>
      <HomeCarousel />
      <div className='w-full px-4 sm:px-8 mt-6'>
        <h1 className='text-2xl sm:text-3xl font-semibold text-[#5c4033] border-l-4 border-[#f5b423] pl-4'>
          Suggested for you
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 my-10'>
        
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
  )
}

export default HomePage