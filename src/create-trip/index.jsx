import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"; 
import moneyIcon from '../assets/fiat-money.png';
import soloIcon from '../assets/solo.png';
import coupleIcon from '../assets/couple.png';
import familyIcon from '../assets/family.png';
import friendsIcon from '../assets/friend.png';

function CreateTrip() {
  const [formData, setFormData] = useState({
    destination: '',
    days: '',
    budget: '',
    companion: '',
    priorities: {
      hotel: '',
      shopping: '',
      food: '',
      activities: '',
      transport: '',
    },
  });
  const [suggestions, setSuggestions] = useState([]); // Store suggestions for autocomplete

  // Handle form changes for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Fetch suggestions when typing in the destination field
    if (name === 'destination' && value.length > 2) {
      fetchPlaceSuggestions(value);
    }
  };

  // Fetch place suggestions from Nominatim API
  const fetchPlaceSuggestions = async (query) => {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: query,
          format: 'json',
          addressdetails: 1,
          limit: 3,
        },
      });
      setSuggestions(response.data); // Update suggestions with API response
    } catch (error) {
      console.error('Error fetching place suggestions', error);
    }
  };

  // Handle the selection of a suggestion
  const handleSelectSuggestion = (suggestion) => {
    setFormData({ ...formData, destination: suggestion.display_name });
    setSuggestions([]); // Clear suggestions after selection
  };

  // Handle budget selection
  const handleBudgetSelect = (budget) => {
    setFormData({ ...formData, budget });
  };

  // Handle companion selection
  const handleCompanionSelect = (companion) => {
    setFormData({ ...formData, companion });
  };

  // Handle priority ranking
  const handlePriorityChange = (category, rank) => {
    setFormData((prevData) => ({
      ...prevData,
      priorities: { ...prevData.priorities, [category]: rank },
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Plan with ease, travel with confidence.</h1>
      <p>Start planning your dream vacation now. Fill out our simple form and let the adventure begin.</p>
      <div style={styles.formContainer}>
        <form style={styles.form} onSubmit={handleSubmit}>
          {/* Destination Input */}
          <div style={styles.formGroup}>
            <label style={styles.label}>What is your destination of choice?</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter destination"
            />
            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <ul style={styles.suggestionsList}>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.place_id}
                    style={styles.suggestionItem}
                    onClick={() => handleSelectSuggestion(suggestion)}
                  >
                    {suggestion.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Divider Line */}
          <hr style={styles.divider} />

          {/* Number of Days Input */}
          <div style={styles.formGroup}>
            <label style={styles.label}>How many days are you planning your trip?</label>
            <input
              type="number"
              name="days"
              value={formData.days}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter number of days"
            />
          </div>

          {/* Divider Line */}
          <hr style={styles.divider} />

          {/* Budget Selection */}
          <div style={styles.formGroup}>
            <label style={styles.label}>What is your budget?</label>
            <p style={styles.subLabel}>The budget is exclusively allocated for activities and dining purposes.</p>
            <div style={styles.budgetOptions}>
              <div
                style={formData.budget === 'Affordable' ? styles.selectedCard : styles.card}
                onClick={() => handleBudgetSelect('Affordable')}
              >
                <img src={moneyIcon} alt="Affordable Budget" style={styles.icon} />
                <p style={styles.iconText}>Affordable</p>
                <p style={styles.iconText}>Less than ₹20,000 per person</p>
              </div>
              <div
                style={formData.budget === 'Medium' ? styles.selectedCard : styles.card}
                onClick={() => handleBudgetSelect('Medium')}
              >
                <img src={moneyIcon} alt="Medium Budget" style={styles.icon} />
                <p style={styles.iconText}>Moderate</p>
                <p style={styles.iconText}>₹20,000 - ₹40,000 per person</p>
              </div>
              <div
                style={formData.budget === 'High' ? styles.selectedCard : styles.card}
                onClick={() => handleBudgetSelect('High')}
              >
                <img src={moneyIcon} alt="High Budget" style={styles.icon} />
                <p style={styles.iconText}>Luxury</p>
                <p style={styles.iconText}>More than ₹1,00,000 per person</p>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <hr style={styles.divider} />

          {/* Companion Selection */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Who do you plan on traveling with?</label>
            <div style={styles.companionOptions}>
              <div
                style={formData.companion === 'Solo' ? styles.selectedCard : styles.card}
                onClick={() => handleCompanionSelect('Solo')}
              >
                <img src={soloIcon} alt="Solo" style={styles.icon} />
                <p style={styles.iconText}>Solo</p>
              </div>
              <div
                style={formData.companion === 'Couple' ? styles.selectedCard : styles.card}
                onClick={() => handleCompanionSelect('Couple')}
              >
                <img src={coupleIcon} alt="Couple" style={styles.icon} />
                <p style={styles.iconText}>Couple</p>
              </div>
              <div
                style={formData.companion === 'Family' ? styles.selectedCard : styles.card}
                onClick={() => handleCompanionSelect('Family')}
              >
                <img src={familyIcon} alt="Family" style={styles.icon} />
                <p style={styles.iconText}>Family</p>
              </div>
              <div
                style={formData.companion === 'Friends' ? styles.selectedCard : styles.card}
                onClick={() => handleCompanionSelect('Friends')}
              >
                <img src={friendsIcon} alt="Friends" style={styles.icon} />
                <p style={styles.iconText}>Friends</p>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <hr style={styles.divider} />

          {/* Priority Selection */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Rank your priorities for this trip:</label>
            <p style={styles.subLabel}>Rank from 1 (highest) to 5 (lowest).</p>
            <div style={styles.priorityOptions}>
              {['hotel', 'shopping', 'food', 'activities', 'transport'].map((category) => (
                <div key={category} style={styles.priorityOption}>
                  <label style={styles.iconText}>{category.charAt(0).toUpperCase() + category.slice(1)}</label>
                  <select
                    name={category}
                    value={formData.priorities[category]}
                    onChange={(e) => handlePriorityChange(category, e.target.value)}
                    style={styles.dropdown}
                  >
                    <option value="">Rank</option>
                    {[1, 2, 3, 4, 5].map((rank) => (
                      <option key={rank} value={rank}>
                        {rank}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* Divider Line */}
          <hr style={styles.divider} />

          {/* Submit Button */}
          <Link to="/HotelRecommendation">
          <button type="submit" style={styles.button}>Submit</button></Link>
        </form>
        
        
          
      </div>
      
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '100%', // Adjusted to allow full width of container
    margin: '0 auto',
    backgroundColor: '#E7F3FF', // Light blue background
    minHeight: '100vh', // Ensures the container takes the full height of the viewport
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  formContainer: {
    backgroundColor: 'white', // White background for the form container
    border: '1px solid #007BFF', // Blue border
    borderRadius: '8px',
    padding: '20px', // Padding for the inner white container
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
    width: '100%',
    maxWidth: '600px', // Adjusted max width for form container
  },
  form: {
    width: '100%',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  suggestionsList: {
    listStyleType: 'none',
    padding: '0',
    border: '1px solid #ccc',
    marginTop: '5px',
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 1000,
    width: '30%',
  },
  suggestionItem: {
    padding: '10px',
    cursor: 'pointer',
  },
  suggestionItemHover: {
    backgroundColor: '#f0f0f0',
  },
  divider: {
    border: '1px solid #ccc',
    margin: '20px 0',
  },
  budgetOptions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    margin: '0 10px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  selectedCard: {
    flex: 1,
    padding: '20px',
    border: '1px solid #007BFF',
    borderRadius: '4px',
    margin: '0 10px',
    cursor: 'pointer',
    textAlign: 'center',
    backgroundColor: '#E7F3FF', // Keeping light blue for the selected state
  },
  icon: {
    width: '50px',
    height: '50px',
  },
  iconText: {
    marginTop: '5px',
    fontSize: '14px',
  },
  companionOptions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  priorityOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Allow wrapping if necessary
  },
  priorityOption: {
    flex: '1 1 15%', // Adjusted width for transport
    margin: '0 5px',
  },
  dropdown: {
    padding: '5px',
    width: '100%',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007BFF', // Button background color
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  subLabel: {
    fontSize: '12px',
    color: '#666',
    marginTop: '5px',
  },
};

export default CreateTrip;
