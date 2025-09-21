import { useState } from 'react';
import RestaurantComponent from './RestaurantComponent';
import axios from "axios"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
function RestaurantPage() {
    const {id}=useParams()
    return (
        <div>
            <RestaurantComponent id={id}/>
        </div>
    )
}

export default RestaurantPage