import React, { useState } from 'react';
import { LocateFixed } from 'lucide-react';
import img from '../assets/explore.jpg';
import StarRating from '../components/StarRating';
import ResDescription from '../restaurantTabs/ResDescription';
import ResMenu from '../restaurantTabs/ResMenu';
import ResReviews from '../restaurantTabs/ResReviews';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
function RestaurantComponent({id}) {
    const [activeTab, setactiveTab] = useState("Description");
    axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

    const [restaurant, setrestaurant] = useState(null);
    // const { restaurantId } = useParams();
    const getRestaurant = async () => {
        try {
            const  {data}  = await axios.get(`/api/restaurants/${id}`)
            console.log(data.success)
            console.log(data);
            if (data.success) {
                setrestaurant(data.restaurant);
                
                console.log(restaurant);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getRestaurant()
    }, [id])

    useEffect(() => {
  console.log("Updated restaurant:", restaurant);
}, [restaurant]);

    return restaurant ? (
        <div className='flex items-center justify-center w-full p-2 sm:p-4'>
            <div className='flex flex-col items-center justify-center w-full sm:w-11/12 md:w-10/12'>

                {/* title */}
                <div className='w-full mb-4'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-[#5c4033]'>{restaurant.title}</h1>
                </div>

                {/* tabs and navigation */}
                <div className='w-full flex flex-col sm:flex-row sm:justify-between gap-4 mb-4'>
                    <div className='flex gap-4 text-lg sm:text-xl'>
                        {["Description", "Menu", "Reviews", "Photos"].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setactiveTab(tab)}
                                className={`p-1 rounded-lg ${activeTab === tab ? 'border-b-4 border-yellow-500 transition-all duration-300 ease-in-out' : ''}`}>
                                {tab}
                            </button>
                        ))}
                    </div>

                    <button className="flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:shadow-md hover:scale-105 transition-transform duration-300">
                        <p className="text-base sm:text-lg">Navigate on Map</p>
                        <LocateFixed className="text-lg sm:text-xl" />
                    </button>
                </div>

                {/* Description Section */}

                {activeTab === "Description" && <ResDescription data={restaurant} />}
                {activeTab === "Menu" && <ResMenu data={restaurant} />}
                {activeTab === "Reviews" && <ResReviews data={restaurant} />}
            </div>
        </div>
    ) : <h1>loading</h1>;
}

export default RestaurantComponent;
