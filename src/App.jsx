import React, { useState } from 'react'; // Import React and useState
import "./App.css";
import { Button } from "./components/ui/button";
import Hero from "./components/custom/Hero.jsx"; 
import HotelRecommendation from './create-trip/HotelRecommendation';
import FoodRecommendation from './create-trip/FoodRecommendation'; // Updated import path
import ActivitiesRecommendation from './create-trip/ActivitiesRecommendation';
// import Navigation from './create-trip/Navigation';

function App() {
  const [count, setCount] = useState(0); // Now this will work

  return (
    <>
      {/* hero */}
      <Hero />
      
      
    </>
  );
}

export default App;
