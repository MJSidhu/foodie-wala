import React from 'react';
import MenuSection from '../components/MenuSection';

// Sample dynamic menu data (can come from props or API later)
const menuData = [
    {
        title: "Starters",
        vegItems: [
            { name: "Paneer Tikka", description: "Grilled paneer cubes with spices", price: 180, isVeg: true, badge: "Must-Try" },
            { name: "Veg Manchurian", description: "Fried veggie balls in spicy sauce", price: 160, isVeg: true }
        ],
        nonVegItems: [
            { name: "Chicken Lollipop", description: "Crispy deep-fried wings", price: 220, isVeg: false },
            { name: "Prawns Fry", description: "Spicy golden-fried prawns", price: 280, isVeg: false, badge: "Hot" }
        ]
    },
    {
        title: "Biryanis",
        vegItems: [
            { name: "Veg Biryani", description: "Mixed vegetable biryani", price: 190, isVeg: true }
        ],
        nonVegItems: [
            { name: "Chicken Biryani", description: "Traditional Hyderabadi biryani", price: 230, isVeg: false, badge: "Popular" },
            { name: "Mutton Biryani", description: "Slow-cooked spicy mutton biryani", price: 280, isVeg: false }
        ]
    },
    {
        title: "Desserts",
        vegItems: [
            { name: "Gulab Jamun", description: "Soft and sweet fried balls", price: 80, isVeg: true },
            { name: "Ice Cream", description: "Vanilla, Chocolate, Strawberry", price: 100, isVeg: true }
        ],
        nonVegItems: [] // Optional if not available
    }
];

function ResMenu({data}) {
    return data? (
        <div className="w-full flex flex-col gap-4 px-2 sm:px-4 py-4">
            {/* Optional Search bar can go here */}
            {/* <SearchBar /> */}

            {data.menu.map((section, index) => (
                <MenuSection
                    key={index}
                    title={section.sectionName}
                    vegItems={section.vegItems}
                    nonVegItems={section.nonVegItems}
                />
            ))}
        </div>
    ): <h1>loading menu</h1>
}

export default ResMenu;
