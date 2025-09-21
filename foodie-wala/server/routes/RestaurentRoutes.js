import {getAllRestaurants,getRestaurantFromId} from '../controllers/RestaurentController.js'
import express from 'express'
const restaurantRouter = express.Router();
restaurantRouter.get("/", getAllRestaurants);
restaurantRouter.get("/:id", getRestaurantFromId);


export default restaurantRouter;