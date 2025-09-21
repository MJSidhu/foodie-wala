import express from 'express'
import { getReviews, postReview } from '../controllers/ReviewController.js'

const reviewRouter=express.Router()

reviewRouter.post("/",postReview);
reviewRouter.get("/:restaurantId",getReviews)
export default reviewRouter