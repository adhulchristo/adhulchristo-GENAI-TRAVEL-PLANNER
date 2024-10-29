import React, { useState } from "react";
import { Link } from 'react-router-dom';

// Sample hotel data with images
const hotels = [
  { id: 1, name: 'Bedrock Boutique', location: 'Goa', rating: 4.5, price: '$200', image: 'https://tse1.mm.bing.net/th?id=OIP.Y4K9HPvD8GjRQIDdHbtXKgHaEv&pid=Api&P=0&h=180' },
  { id: 2, name: 'Santana Beach Resort', location: 'Goa', rating: 4.8, price: '$300', image: 'src/assets/santana beach resort.jpeg' },
  { id: 3, name: 'Ginger Panjim', location: 'Goa', rating: 4.7, price: '$250', image: 'src/assets/ginger panjim.jpeg' },
  { id: 4, name: 'The Aster', location: 'Goa', rating: 4.2, price: '$150', image: 'src/assets/the aster.jpeg' },
  { id: 5, name: 'Down da Goa', location: 'Goa', rating: 4.9, price: '$400', image: 'src/assets/hotel2.jpeg' },
];

const HotelRecommendation = () => {
  const [location, setLocation] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const handleSearch = () => {
    const filtered = hotels.filter(hotel => {
      return (
        hotel.location.toLowerCase().includes(location.toLowerCase()) &&
        hotel.rating >= minRating
      );
    });
    setFilteredHotels(filtered);
  };

  return (
    <div className="hotel-recommendation-container">
      <h1 className="title">Hotel Recommendations</h1>
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

      <h2 className="subtitle">Recommended Hotels based on your budget</h2>
      <div className="hotel-list">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              <h3 className="hotel-name">{hotel.name}</h3>
              <p className="hotel-location">📍 {hotel.location}</p>
              <p className="hotel-rating">⭐ {hotel.rating}</p>
              <p className="hotel-price">{hotel.price}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No hotels found matching your criteria.</p>
        )}
      </div>

      <Link to="/FoodRecommendation" className="next-button">
        Next
      </Link>
    </div>
  );
};

export default HotelRecommendation;