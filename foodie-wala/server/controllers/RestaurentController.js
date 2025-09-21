import Restaurant from '../models/Restaurants.js'
import mongoose from 'mongoose'
const getAllRestaurants = async (req,res) => {
    try {
        const allRestaurants = await Restaurant.find();
        res.json(allRestaurants);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching restaurants' });
    }
};
const getRestaurantFromId = async (req, res) => {
  const { id } = req.params;
  console.log("Requested id:", id);
  console.log("Connected DB name:", mongoose.connection.name);
  console.log("Collections:", Object.keys(mongoose.connection.collections));

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, error: "Invalid restaurant id format" });
  }

  try {
    const restaurant = await Restaurant.findById(id);
    console.log("Restaurant result:", restaurant);
    if (!restaurant) {
      return res.status(404).json({ success: false, error: "Restaurant not found" });
    }
    res.json({ success: true, restaurant });
  } catch (error) {
    console.error("Error fetching restaurant:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
export {getAllRestaurants,getRestaurantFromId} 