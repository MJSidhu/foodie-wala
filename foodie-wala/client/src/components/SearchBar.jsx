import React, { useEffect, useState } from 'react'
import { Search } from "lucide-react";
const SearchBar = ({ placeholder = "Search..", onSearch, className = "", type = "text", initialValue = "" }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) onSearch(query);
    }

    useEffect(() => {
        setQuery(initialValue);
    }, [initialValue]);

    return (
        <div className="w-full max-w-md mx-auto my-2">
            <form
                onSubmit={handleSubmit}
                className={`flex items-center bg-gray-100 border-1 border-gray-300 rounded-full shadow-sm overflow-hidden ${className}`}
            >
                <input
                    type={type}
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 px-5 py-2 text-gray-700 focus:outline-none"
                />
                <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full mr-2 transition duration-200"
                >
                    <Search className="h-5 w-5" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar