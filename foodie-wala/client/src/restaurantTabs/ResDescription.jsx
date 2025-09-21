import React from 'react'
 import img from '../assets/explore.jpg';
 import StarRating from '../components/StarRating';
function ResDescription({data}) {
  return data? (
    <div className='w-full'>

                        {/* Image Gallery + Ratings */}
                        <div className='flex flex-col lg:flex-row gap-4 mb-6'>
                            <div className='w-full lg:w-9/12 flex flex-col lg:flex-row gap-4'>
                                {/* Left large image */}
                                <div className='w-full lg:w-2/3'>
                                    <img src={data.image} className='w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg' alt="main" />
                                </div>

                                {/* Right two small stacked images */}
                                <div className='w-full lg:w-1/3 flex flex-col gap-4'>
                                    <img src={data.image} className='w-full h-32 sm:h-40 lg:h-1/2 object-cover rounded-lg' alt="sub1" />
                                    <img src={data.image} className='w-full h-32 sm:h-40 lg:h-1/2 object-cover rounded-lg' alt="sub2" />
                                </div>
                            </div>

                            {/* Review Box */}
                            <div className="w-full lg:w-3/12 flex flex-col items-center justify-center bg-white rounded-xl p-6 gap-4 shadow-md">
                                <div className="flex flex-col items-center bg-yellow-400 rounded-lg px-4 py-2">
                                    <p className="text-2xl font-bold text-black">400+</p>
                                    <p className="text-lg font-semibold text-gray-800">Reviews</p>
                                </div>
                                <StarRating rating={4} />
                            </div>
                        </div>


                        {/* Text Info */}
                        <div className="space-y-6">
                            {/* Cuisine */}
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-2">Cuisine</h2>
                                <div className="flex flex-wrap gap-2 text-gray-700">
                                    {data.cuisine.map((item, idx) => (
                                        <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm sm:text-base">{item}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-2">Tags</h2>
                                <div className="flex flex-wrap gap-2 text-blue-500 font-medium">
                                    {data.tags.map((tag, idx) => (
                                        <span key={idx} className="text-sm sm:text-base">#{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Location */}
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-2">Location</h2>
                                <div className="flex items-start gap-2 text-gray-700">
                                    <span>📍</span>
                                    <p className="text-base sm:text-lg">{data.location}</p>
                                </div>
                                <a href="#" className="text-orange-600 font-semibold text-sm sm:text-base">View on Maps</a>
                            </div>

                            {/* Timings */}
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-2">Timings</h2>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <span>⏰</span>
                                    <p className='text-base sm:text-lg'>{data.timings}</p>
                                </div>
                                <p className='text-sm px-1 text-gray-500'>any exceptions here</p>
                            </div>

                            {/* Contact */}
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-2">Contact</h2>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <span>📞</span>
                                    <p className='text-base sm:text-lg'>{data.contact}</p>
                                </div>
                            </div>
                        </div>

                    </div>
  ): <h1>loading restaurant description</h1>
}

export default ResDescription;