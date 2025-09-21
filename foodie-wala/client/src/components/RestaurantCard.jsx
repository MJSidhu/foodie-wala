import React from 'react'
import img from "../assets/forYou.jpg"
function RestaurantCard({classname="",title="TITLE OF RESTAURANT",cusine="Indian, Chinese, Continental",location="Gajuwaka, Vizag",distance="5km",small=false}) {
  return (
    <>
      <div className={`p-2  rounded-lg shadow-md  bg-white hover:scale-102 hover:shadow-xl transition-transform duration-300 ${classname}`}>
        
        {/* Image */}
        { !small && <div className="w-full">
          <img src={img} alt="Restaurant card" className="w-full h-40 object-cover rounded-md" />
        </div> }
        
        {/* Title and Rating */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-black font-semibold text-lg">{title}</p>
          <p className="text-white text-sm font-bold bg-green-600 px-2 py-1 rounded">
            4.5
          </p>
        </div>

        {/* Cuisine */}
        <div className="mt-1">
          <p className="text-gray-700 text-sm">{cusine}</p>
        </div>

        {/* Location and Distance */}
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <p>{location}</p>
          <p>{distance}</p>
        </div>
      </div>
    </>
  )
}

export default RestaurantCard