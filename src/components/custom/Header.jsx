import React from "react";
import { Button } from '../ui/button'; // Adjust the path if necessary

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5 w-full bg-[#ffffff00]"> 
      {/* Flex container to hold the logo and title */}
      <div className="flex items-center">
        <img 
          
          src="/Trip Ease.png" // Ensure the correct path for the image
          alt="Trip Ease Logo" 
          style={{ width: '70px', height: 'auto' }} // Fixed width for better alignment
          loading="lazy" // Lazy load for performance
        />
        {/* Title next to the logo */}
        <h5 className="font-bold font-serif text-[30px] ml-3 ">Trippy</h5> {/* Adjusted margin for spacing */}
      </div>

      {/* Sign In button */}
      <div>
        <Button className="bg-[#3490f2] text-black px-6 py-2 rounded"
          style={{
            fontSize: "1.5rem",
            borderRadius: "8px",
            padding: "10px 20px", // Adjusted padding for better size balance
          }}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Header;
