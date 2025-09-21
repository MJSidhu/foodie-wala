import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import MenuItemCard from './MenuItemCard';

function MenuSection({ title, vegItems = [], nonVegItems = [] }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm">
            {/* Section Header */}
            <button
                onClick={toggleSection}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition duration-200"
            >
                <h2 className="text-lg sm:text-xl font-semibold text-[#5c4033]">{title}</h2>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>

            {/* Collapsible Content */}
            {isOpen && (
                <div className="p-4 space-y-6 bg-white">
                    {/* Veg Items */}
                    {vegItems.length > 0 && (
                        <div>
                            <h3 className="text-base font-semibold text-green-700 mb-2">Veg</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {vegItems.map((item, idx) => (
                                    <MenuItemCard key={idx} {...item} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Non-Veg Items */}
                    {nonVegItems.length > 0 && (
                        <div>
                            <h3 className="text-base font-semibold text-red-700 mb-2">Non-Veg</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {nonVegItems.map((item, idx) => (
                                    <MenuItemCard key={idx} {...item} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default MenuSection;
