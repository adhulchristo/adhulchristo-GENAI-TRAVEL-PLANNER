import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link

function Hero() {
  const videoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensures the video covers the container
    zIndex: -1, // Places the video behind other content
  };

  const contentStyle = {
    position: "relative", // Allows for positioning child elements
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "white",
    textAlign: "center",
    padding: "20px", // Add padding for text
  };

  // Reviews array with more reviews
  const reviews = [
    {
      review:
        "I love knowing exactly when my flights are, when they are delayed, what gate to leave from, and all the other amazing TripIt Pro features.",
      author: "Ann B.",
    },
    {
      review:
        "TripEase made my travel experience smoother than ever. No more guessing with delays or cancellations!",
      author: "John D.",
    },
    {
      review:
        "This is my go-to app for all travel planning! It's so easy to use.",
      author: "Sarah K.",
    },
    {
      review:
        "Best travel app I've used. Keeps everything organized and up to date.",
      author: "Mike T.",
    },
    {
      review:
        "TripEase made my last vacation unforgettable! Highly recommend it.",
      author: "Emily R.",
    },
    {
      review:
        "Fantastic app! It saved me so much time on my travel arrangements.",
      author: "Tom W.",
    },
    {
      review: "The personalized recommendations were spot on. Loved it!",
      author: "Jessica L.",
    },
    {
      review: "Easy to navigate and so many features! Perfect for travelers.",
      author: "David M.",
    },
    {
      review:
        "I can't imagine planning my trips without TripEase. It's a lifesaver!",
      author: "Laura P.",
    },
    {
      review: "Excellent customer service and user-friendly design.",
      author: "Chris S.",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  // Change review every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div>
      {/* Video Background */}
      <video autoPlay loop muted style={videoStyle}>
        <source src="public\bgvideo.mp4" type="video/mp4" /> 
        Your browser does not support the video tag.
      </video>

      <div style={contentStyle}>
        <h1 className="font-extrabold text-[50px] mt-0">
          <span className="text-[#feffff]">
            Discover Your New Adventure with AI:
          </span>
          <div>Where Every Journey is Customized for You.</div>
        </h1>
        <br />

        <h4
          className="text-xl text-[#fdfcfc] font-bold"
          style={{ marginTop: "30px" }}
        >
          Unleash your new adventure with AI. TripEase uses advanced technology
          to craft unique travel experiences tailored to you, guiding you to
          unforgettable destinations.
        </h4>

        <Link to="/create-trip">
          <button
            className="bg-[#2ca7ff] text-white rounded"
            style={{
              marginTop: "40px",
              padding: "16px 32px",
              fontSize: "1.25rem",
              borderRadius: "8px",
            }}
          >
            Get Started
          </button>
        </Link>
      </div>

      {/* Feature Explanation Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Center-align the flex items
          marginTop: "50px",
          padding: "0 20px",
          textAlign: "center", // Center text for the whole section
        }}
      >
        <img
          src="public/feature1.avif"
          alt="Trip Planning"
          style={{ width: "40%", height: "auto", borderRadius: "10px" }}
        />
        <div style={{ marginLeft: "20px", textAlign: "left" }}>
          <h1 className="font-bold">Plan Your Trip with Ease</h1>
          <h2
            className="text-lg font-mono"
            style={{
              marginTop: "10px",
              fontSize: "1.1rem",
            }}
          >
            With TripEase, planning your next vacation has never been easier.
            <br />
            Our intelligent platform allows you to seamlessly organize all
            aspects of your trip,
            <br /> from booking flights and accommodations to crafting
            personalized itineraries that suit your preferences.
            <br />
            Let TripEase be your trusted travel companion, guiding you to
            discover hidden gems and must-visit
            <br /> attractions tailored just for you. Experience the joy of
            travel without the stress of planning!
          </h2>
        </div>
      </div>

      {/* Budget Estimation Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <div style={{ marginRight: "20px", textAlign: "left" }}>
          <h1 className="font-bold">
            Intelligent Budget Estimation & Management
          </h1>
          <h2
            className="text-lg font-mono"
            style={{
              marginTop: "10px",
              fontSize: "1.1rem",
            }}
          >
            With TripEase, you can effortlessly manage your travel budget using
            our <br /> AI-driven budget management system. This feature provides
            detailed cost breakdowns for <br /> transportation, accommodations,
            dining, and attractions while <br /> offering personalized
            suggestions for budget-friendly alternatives based on your
            preferences.
            <br />
          </h2>
        </div>
        <img
          src="public/aibudget.jpg"
          alt="Trip Budgeting"
          style={{ width: "40%", height: "auto", borderRadius: "10px" }}
        />
      </div>

      {/* AI-Generated Summaries Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <img
          src="public/feature3.avif"
          alt="AI-Generated Summaries"
          style={{ width: "25%", height: "auto", borderRadius: "10px" }}
        />
        <div style={{ marginLeft: "20px", textAlign: "left" }}>
          <h1 className="font-bold">AI-Generated Summaries</h1>
          <h2
            className="text-lg font-mono"
            style={{
              marginTop: "10px",
              fontSize: "1.1rem",
            }}
          >
            With TripEase, once you finalize your trip, our platform generates
            an AI-powered summary of your itinerary.<br /> This summary includes
            all bookings, personalized recommendations, and budget insights,<br />
            presented in an easy-to-digest format. Experience the convenience of
            having all your travel<br /> details consolidated, making planning and
            decision-making seamless and efficient.
          </h2>
        </div>
      </div>

      {/* Reviews Section */}
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h2
          className="text-3xl font-bold"
          style={{ backgroundColor: "#153c66", color: "white", padding: "20px" }}
        >
          Guest Satisfaction is Our Goal, Valuable Feedback Matters to Us
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            marginTop: "20px",
            position: "relative",
            overflow: "hidden", // Hide overflow to achieve slide effect
          }}
        >
          {/* Review Box */}
          <div
            style={{
              display: "flex", // Use flex to arrange reviews
              width: "80%",
              padding: "20px",
              border: "2px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Add shadow for better visibility
              transition: "transform 5s ease-in-out", // Smooth transition
              position: "absolute",
              left: `${-currentReview * 100}%`, // Slide effect
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                style={{
                  minWidth: "100%", // Ensure each review takes full width
                  padding: "20px",
                  boxSizing: "border-box", // Include padding in width
                }}
              >
                <p style={{ fontStyle: "italic", fontSize: "1.2rem" }}>
                  "{review.review}"
                </p>
                <p style={{ textAlign: "right", fontWeight: "bold" }}>
                  - {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
{/* Footer Section */}
        <footer
        style={{
            marginTop: "50px",
            padding: "20px",
            backgroundColor: "#153c66",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap", // Allow wrapping if the screen size is small
        }}
        >
        <div style={{ flex: "1 1 30%", minWidth: "200px" }}>
            <h5 style={{ fontWeight: "bold", fontSize: "18px" }}>Quick Links</h5>
            <div>
            <div style={{ marginBottom: "10px" }}>
                <a href="/register" style={{ color: "white", textDecoration: "none" }}>Register</a>
            </div>
            <div style={{ marginBottom: "10px" }}>
                <a href="/about" style={{ color: "white", textDecoration: "none" }}>About Us</a>
            </div>
            <div style={{ marginBottom: "10px" }}>
                <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</a>
            </div>
            </div>
        </div>

        
            <h5 style={{ fontWeight: "bold", fontSize: "18px" }}>Connect:</h5>
            
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
                <img src="public/linkedin.png" alt="LinkedIn" style={{ height: "24px" }} /><br></br>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
                <img src="public/instagram.png" alt="Instagram" style={{ height: "24px" }} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
                <img src="public/github.png" alt="GitHub" style={{ height: "24px" }} />
            </a>
            
        

        <div style={{ flex: "1 1 30%", minWidth: "200px", textAlign: "center" }}><br></br>
            <div style={{ marginTop: "20px" }}>
            <p>&copy; {new Date().getFullYear()} TripEase. All rights reserved.</p>
            <div>
                <a href="/privacy-policy" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Privacy Policy</a>
                <span style={{ margin: "0 15px", color: "white" }}> | </span>
                <a href="/terms-of-service" style={{ margin: "0 15px", color: "white", textDecoration: "none" }}>Terms of Service</a>
            </div>
            </div>
        </div>
        </footer>





    </div>
  );
}

export default Hero;