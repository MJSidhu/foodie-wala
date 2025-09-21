import { useState } from "react";
import React from 'react'
import { Link } from "react-router-dom";

function TrendingPage() {
  const [trendType, setTrendType] = useState("Eatery+foods");

  // test data
  const data = [
    {
      _id: { eatery: "Paradise", food: "Biriyani" },
      count: 86,
    },
    {
      _id: { eatery: "Mehfil", food: "Chicken65" },
      count: 54,
    },
    {
      _id: { eatery: "Kritunga", food: "PaneerTikka" },
      count: 48,
    },
    {
      _id: { eatery: "BarbequeNation", food: "ButterNaan" },
      count: 42,
    },
    {
      _id: { eatery: "ShahGhouse", food: "MuttonBiriyani" },
      count: 39,
    },
  ];

  return (
    <div className="flex items-center w-full  justify-center m-7 ">
      <div className="flex  flex-col border-0 w-full items-center justify-center gap-10 p-4" >


        {/* type */}
        <div className="flex rounded-full bg-gray-200 w-fit">
          <button
            onClick={(e) => setTrendType(e.target.value)}
            value="Eatery+foods"
            className={`transition-all duration-300 ease-in-out px-4 py-2 rounded-full ${trendType === "Eatery+foods" ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-black'
              }`}
          >
            Combo
          </button>
          <button
            onClick={(e) => setTrendType(e.target.value)}
            value="Eatery"
            className={`transition-all duration-300 ease-in-out px-4 py-2 rounded-full ${trendType === "Eatery" ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-black'
              }`}
          >
            Eatery
          </button>
          <button
            onClick={(e) => setTrendType(e.target.value)}
            value="Foods"
            className={`transition-all duration-300 ease-in-out px-4 py-2 rounded-full ${trendType === "Foods" ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-black'
              }`}
          >
            Foods
          </button>
        </div>


        {/* display */}
         <div className="flex items-center justify-center w-full p-4">
      <ul className="flex flex-col gap-4 w-full max-w-2xl">
        {trendType === "Eatery+foods" &&
          data.map((item, index) => (
            <li
              key={index}
              className="bg-white shadow-md p-4 rounded-2xl flex justify-between items-center hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <span className="text-xl font-bold text-gray-400">#{index + 1}</span>
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    🍽️{" "}
                    <Link
                      to={`/explore?search=${item._id.food}`}
                      className="text-yellow-600 hover:underline"
                    >
                      #{item._id.food}
                    </Link>{" "}
                    at{" "}
                    <Link
                      to={`/explore?search=${item._id.eatery}`}
                      className="text-blue-600 hover:underline"
                    >
                      @{item._id.eatery}
                    </Link>
                  </p>
                  <p className="text-sm text-gray-500">{item.count} reviews</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>


      </div>
    </div>
  )
}

export default TrendingPage