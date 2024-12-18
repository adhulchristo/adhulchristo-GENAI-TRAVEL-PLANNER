import React, { useState } from "react";
import { Link } from 'react-router-dom';

// Sample hotel data with images
const hotels = [
  { id: 1, name: 'Bedrock Boutique', location: 'Goa', rating: 4.5, price: '$200', image: 'https://tse1.mm.bing.net/th?id=OIP.Y4K9HPvD8GjRQIDdHbtXKgHaEv&pid=Api&P=0&h=180' },
  { id: 2, name: 'Santana Beach Resort', location: 'Goa', rating: 4.8, price: '$300', image: 'https://i.pinimg.com/originals/b7/1b/17/b71b17ff3c2bcd3cf6f4ec850f8e7ad1.jpg' },
  { id: 3, name: 'Ginger Panjim', location: 'Goa', rating: 4.7, price: '$250', image: 'https://th.bing.com/th/id/OIP.IH84fNXa_n6M7vze-hizeQHaEo?w=337&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 4, name: 'The Aster', location: 'Goa', rating: 4.2, price: '$150', image: 'https://img.freepik.com/premium-photo/luxury-hotel-lobby-with-furniture-large-window-generative-ai_634358-381.jpg' },
  { id: 5, name: 'Down da Goa', location: 'Goa', rating: 4.9, price: '$400', image: 'https://th.bing.com/th/id/OIP.eplfQ52GC6KwxgirR1ZuLgHaEK?rs=1&pid=ImgDetMain' },
  { id: 5, name: 'Urban vibrant', location: 'Goa', rating: 4.9, price: '$400', image: 'https://wallpaperaccess.com/full/658385.jpg' },
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