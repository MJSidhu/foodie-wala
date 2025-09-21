import mongoose from "mongoose";
import Restaurant from "../models/Restaurants.js";
import dotenv from "dotenv";
dotenv.config();
async function seed() {
    await mongoose.connect(process.env.MONGO_URI)
    console.log( "Connected to MongoDB" );

    const restaurantData = [
  {
    title: "Spicy Garden",
    restaurantTag: "@spicy-garden-gajuwaka-vizag",
    image: "https://content3.jdmagicbox.com/comp/ferozepur/x1/9999p1632.1632.171206130118.w1x1/catalogue/the-spicy-garden-jalalabad-ferozepur-restaurants-fktadkm68w.jpg",
    cuisine: ["Indian", "South Indian"],
    tags: ["budget", "veg-friendly"],
    location: "Gajuwaka, Vizag",
    contact: "9876543210",
    timings: "11:00 AM - 11:00 PM",
    avgRating: 0,
    totalReviews: 0,
    menu: [
      {
        sectionName: "Starters",
        vegItems: [
          {
            name: "Paneer Tikka",
            price: 160,
            isVeg: true,
            popularity: 4.5,
            description: "Grilled paneer with spices"
          }
        ],
        nonVegItems: [
          {
            name: "Chicken 65",
            price: 180,
            isVeg: false,
            popularity: 4.2,
            description: "Spicy fried chicken"
          }
        ]
      }
    ]
  },
  {
    title: "Ocean Breeze",
    restaurantTag: "@ocean-breeze-rk-beach-vizag",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/99/b8/84/welcomcafe-oceanic.jpg?w=900&h=500&s=1",
    cuisine: ["Seafood", "Chinese"],
    tags: ["rooftop", "romantic"],
    location: "RK Beach, Vizag",
    contact: "9876501234",
    timings: "12:00 PM - 10:30 PM",
    avgRating: 0,
    totalReviews: 0,
    menu: [
      {
        sectionName: "Main Course",
        vegItems: [],
        nonVegItems: [
          {
            name: "Grilled Fish",
            price: 250,
            isVeg: false,
            popularity: 4.7,
            description: "Fresh grilled fish with herbs"
          }
        ]
      }
    ]
  },
  {
    title: "Vegan Delight",
    restaurantTag: "@vegan-delight-siripuram-vizag",
    image: "https://b.zmtcdn.com/data/pictures/0/20066560/5cb8035bb6ccd043e599e7e35dd565e3.jpg?fit=around|960:500&crop=960:500;*,*",
    cuisine: ["Vegan", "Healthy"],
    tags: ["veg-only", "organic"],
    location: "Siripuram, Vizag",
    contact: "9998877665",
    timings: "9:00 AM - 9:00 PM",
    avgRating: 0,
    totalReviews: 0,
    menu: [
      {
        sectionName: "Salads",
        vegItems: [
          {
            name: "Quinoa Bowl",
            price: 200,
            isVeg: true,
            popularity: 4.1,
            description: "Fresh greens with quinoa and avocado"
          }
        ],
        nonVegItems: []
      }
    ]
  },
  {
    title: "Biryani Nation",
    restaurantTag: "@biryani-nation-dwaraka-nagar-vizag",
    image: "https://b.zmtcdn.com/data/pictures/chains/9/19957029/1035ac036d304a357739fe295d9827a6.jpeg?fit=around|960:500&crop=960:500;*,*",
    cuisine: ["Indian", "Hyderabadi"],
    tags: ["spicy", "biryani-special"],
    location: "Dwaraka Nagar, Vizag",
    contact: "9123456780",
    timings: "11:30 AM - 11:00 PM",
    avgRating: 0,
    totalReviews: 0,
    menu: [
      {
        sectionName: "Biryanis",
        vegItems: [
          {
            name: "Veg Dum Biryani",
            price: 180,
            isVeg: true,
            popularity: 3.8,
            description: "Slow-cooked veg biryani with herbs"
          }
        ],
        nonVegItems: [
          {
            name: "Chicken Biryani",
            price: 220,
            isVeg: false,
            popularity: 4.6,
            description: "Authentic Hyderabadi chicken biryani"
          }
        ]
      }
    ]
  },
  {
    title: "Sweet Cravings",
    restaurantTag: "@sweet-cravings-seethammadhara-vizag",
    image: "https://content3.jdmagicbox.com/comp/visakhapatnam/a4/0891px891.x891.211114012105.z6a4/catalogue/sweet-india-foods-ram-nagar-visakhapatnam-sweet-shops-z3y6o1emt9.jpg",
    cuisine: ["Desserts", "Bakery"],
    tags: ["family", "desserts"],
    location: "Seethammadhara, Vizag",
    contact: "9988776655",
    timings: "10:00 AM - 9:30 PM",
    avgRating: 0,
    totalReviews: 0,
    menu: [
      {
        sectionName: "Desserts",
        vegItems: [
          {
            name: "Chocolate Lava Cake",
            price: 120,
            isVeg: true,
            popularity: 4.9,
            description: "Warm chocolate cake with gooey center"
          }
        ],
        nonVegItems: []
      }
    ]
  }
];

await Restaurant.deleteMany({})
.then(() => console.log("All record are deleted "))
await Restaurant.insertMany(restaurantData);
}

seed()
    .then(() => console.log("Seeding completed"))
    .catch((err) => console.log(err))