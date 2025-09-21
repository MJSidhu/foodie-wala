import React from 'react';

function MenuItemCard({ name, description, price, isVeg = true, badge }) {
    return (
        <div className="border rounded-lg p-3 bg-white shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-start justify-between">
                {/* Left: Veg Icon + Name */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full border-2 ${isVeg ? 'border-green-600' : 'border-red-600'}`} />
                        <h3 className="text-base sm:text-lg font-medium text-gray-800">{name}</h3>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-1">
                        <p className="text-sm text-gray-600 flex-1">{description}</p>
                        {badge && (
                            <span className="text-xs bg-yellow-100 text-yellow-800 font-semibold px-2 py-0.5 rounded">
                                {badge}
                            </span>
                        )}
                    </div>
                </div>

                {/* Right: Price */}
                <div className="text-sm sm:text-base font-semibold text-gray-700 whitespace-nowrap ml-4">
                    ₹{price}
                </div>
            </div>
        </div>
    );
}

export default MenuItemCard;
