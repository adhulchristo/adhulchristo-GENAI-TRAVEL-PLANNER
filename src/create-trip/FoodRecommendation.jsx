import React, { useState } from "react";
import { Link } from 'react-router-dom';

// Sample restaurant data with images
const restaurants = [
    { id: 1, name: 'Taco Heaven', location: 'Goa', rating: 4.6, priceRange: '$50', image: 'https://tse1.mm.bing.net/th?id=OIP.DKK2SeSR79f-DTeeHmqc-QHaE7&pid=Api&P=0&h=180' },
    { id: 2, name: 'Seafood Paradise', location: 'Goa', rating: 4.8, priceRange: '$70', image: 'https://tse3.mm.bing.net/th?id=OIP.HRemfWMkwx6zVH-bCHns9wHaFj&pid=Api&P=0&h=180' },
    { id: 3, name: 'Curry Delight', location: 'Goa', rating: 4.7, priceRange: '$78', image: 'https://tse2.mm.bing.net/th?id=OIP.3fROpInSzgY--B1msdJITQHaHa&pid=Api&P=0&h=180' },
    { id: 4, name: 'Chaat Corner', location: 'Goa', rating: 4.4, priceRange: '68', image: 'https://tse3.mm.bing.net/th?id=OIP.el2CcF-_TSvmlhopwnHdTAHaHa&pid=Api&P=0&h=180' },
    { id: 5, name: 'Biryani Bistro', location: 'Goa', rating: 4.9, priceRange: '$50', image: 'https://tse2.mm.bing.net/th?id=OIP.LadujoU81UAUhQjy9gElUwHaHa&pid=Api&P=0&h=180' },
];

const FoodRecommendation = () => {
    const [location, setLocation] = useState('');
    const [minRating, setMinRating] = useState(0);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

    const handleSearch = () => {
        const filtered = restaurants.filter(restaurant => {
            return (
                restaurant.location.toLowerCase().includes(location.toLowerCase()) &&
                restaurant.rating >= minRating
            );
        });
        setFilteredRestaurants(filtered);
    };

    const handleNext = () => {
        // Logic for next action, e.g., navigate to the next page, load more restaurants, etc.
        console.log("Next button clicked");
    };

    return (
        <div className="food-recommendation-container">
            <h1 className="title">Restaurant Recommendations</h1>
            <div className="search-container">
                <input
                    className="input-field"
                    type="text"
                    placeholder="Enter location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <select
                    className="dropdown"
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                >
                    <option value={0}>Any Rating</option>
                    <option value={4}>4 Stars & Above</option>
                    <option value={4.5}>4.5 Stars & Above</option>
                    <option value={5}>5 Stars</option>
                </select>
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>

            <h2 className="subtitle">Recommended Restaurants based on your criteria</h2>
            <div className="food-list">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant) => (
                        <div key={restaurant.id} className="food-card">
                            <img src={restaurant.image} alt={restaurant.name} className="food-image" />
                            <h3 className="food-name">{restaurant.name}</h3>
                            <p className="food-location">📍 {restaurant.location}</p>
                            <p className="food-rating">⭐ {restaurant.rating}</p>
                            <p className="food-price-range">{restaurant.priceRange}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No restaurant options found matching your criteria.</p>
                )}
            </div>

            <Link to="/ActivitesRecommendation" className="next-button">
        Next
      </Link>
    </div>
        
    );
};

export default FoodRecommendation;
