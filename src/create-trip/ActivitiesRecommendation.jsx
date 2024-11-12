import React, { useState } from 'react';

const ActivitiesRecommendation = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const activities = [
    { id: 'beaches', name: 'Beaches', img: 'https://picfiles.alphacoders.com/960/9601.jpg' },
    { id: 'nature', name: 'Nature', img: 'src/assets/nature.jpg' },
    { id: 'religious', name: 'Religious Visits', img: 'src/assets/religious.jpg' },
    { id: 'fun', name: 'Fun Activities', img: 'src/assets/fun.jpg' },
    { id: 'clubbing', name: 'Clubbing', img: 'src/assets/club.jpg' },
    { id: 'water_sports', name: 'Water Sports', img: 'src/assets/water act.jpg' },
    { id: 'historical_sites', name: 'Historical Sites', img: 'src/assets/historical.jpg' },
    { id: 'local_culture', name: 'Explore Local Culture', img: 'src/assets/local.jpg' },
  ];

  const activityOptions = {
    beaches: [
      { name: 'Baga Beach', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEoMxtfOlDn5NuCCuq0ErySVIxK0szrS6-Ig&s' },
      { name: 'Anjuna Beach', img: 'https://www.tourmyindia.com/states/goa/image/anjuna-beach-banner.webp' },
      { name: 'Palolem Beach', img: 'https://www.tourmyindia.com/states/goa/image/palolem-beach-banner.webp' },
      { name: 'Colva Beach', img: 'https://www.tourmyindia.com/states/goa/image/colva-beach-banner.webp' },
      { name: 'Calangute Beach', img: 'https://media1.thrillophilia.com/filestore/b8iqw6n62s37df5vqj13dpxr17cg_shutterstock_1850377780.jpg?w=400&dpr=2' },
    ],
    nature: [
      { name: 'Dudhsagar Waterfalls', img: 'https://tse2.mm.bing.net/th?id=OIP.I_pvz7WsIQ2naZ2tbeiu0wHaFj&pid=Api&P=0&h=180 ' },
      { name: 'Salim Ali Bird Sanctuary', img: 'https://thumbs.dreamstime.com/b/entrance-to-salim-ali-bird-sanctuary-chorao-goa-india-august-nature-trail-mangrove-forest-dr-island-near-103415039.jpg ' },
      { name: 'Mollem National Park', img: 'https://tse1.mm.bing.net/th?id=OIP.IvY0axtDoi1NgdVwRlndmgHaDu&pid=Api&P=0&h=180 s' },
      { name: 'Bhagwan Mahavir Wildlife Sanctuary', img: 'https://tse4.mm.bing.net/th?id=OIP.sMRG7ZG9fGw4ri0nf5a4iQHaE8&pid=Api&P=0&h=180' },
    ],
    religious: [
      { name: 'Basilica of Bom Jesus', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Basilica_of_bom_jesus_-_Front_View.jpg' },
      { name: 'Shanta Durga Temple', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Shantadurga_temple.jpg/640px-Shantadurga_temple.jpg' },
      { name: 'Se Cathedral', img: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Se%E2%80%99_Cathedral%2C_Goa.jpg' },
      { name: 'Mangeshi Temple', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6czsbGLQy_YcWCVp9rFd3yezrgBbzLopdhA&s' },
    ],
    fun: [
      { name: 'Go Karting', img: 'https://www.nj.com/resizer/T3eLklVuuZocnie_gE4-liR2Prk=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/PECKP56B65D4PPUNYOX5AS4JSM.JPG ' },
      { name: 'Casino Cruise', img: 'https://a.cdn-hotels.com/gdcs/production50/d340/8f71827f-b735-44b4-a68a-63d933da7952.jpg ' },
      { name: 'Parasailing', img: 'https://images.techyscouts.media/p3s8yP4-sPJgKptL/w:auto/h:auto/q:auto/https://keywestsebago.com/wp-content/uploads/2019/02/ParasailGallery2.jpg' },
    ],
    clubbing: [
      { name: 'Club Cubana', img: 'https://tse4.mm.bing.net/th?id=OIP.lvuEnFSdeW4pkb-g62idegHaE8&pid=Api&P=0&h=180 ' },
      { name: 'Tito’s', img: 'https://tse1.mm.bing.net/th?id=OIP.pEN4it195p10k2tvx9TqaQHaES&pid=Api&P=0&h=180' },
      { name: 'Mambo’s', img: 'https://tse2.mm.bing.net/th?id=OIP.2As5XLli10e4sHd_7a65VAHaE9&pid=Api&P=0&h=180 '},
    ],
    water_sports: [
      { name: 'Jet Skiing', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80rzD20rays4l-uOgMfK_6QkflI_eWhuBQw&s' },
      { name: 'Scuba Diving', img: 'https://assets.cntraveller.in/photos/632da314969e60ec08d35e8a/master/pass/498283106' },
      { name: 'Snorkeling', img: 'https://hawaiioceancharters.com/wp-content/uploads/sites/5165/2022/01/400B6314-15A8-491C-8D75-29E1EC0C90EB-scaled.jpg?w=1200&zoom=2' },
      { name: 'Banana Boat Ride', img: 'https://www.seawatersports.com/images/activies/slide/banana-ride-banana-boat-ride-in-goa.jpg' },
    ],
    historical_sites: [
      { name: 'Aguada Fort', img: 'https://tse3.mm.bing.net/th?id=OIP.DadC0CZzp3mMxb2Qa4ZBlQHaEK&pid=Api&P=0&h=180' },
      { name: 'Chapora Fort', img: 'https://tse1.mm.bing.net/th?id=OIP.u9B0bhzdkzlMwUIteDSt-gHaE5&pid=Api&P=0&h=180 ' },
      { name: 'Reis Magos Fort', img: 'https://www.soultravelling.in/blog/wp-content/uploads/2024/09/Reis-Magos-Fort-in-Goa.1.jpg' },
    ],
    local_culture: [
      { name: 'Fontainhas Latin Quarter', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWyviIDgVhuFeJJSnqC5HD9O5vYgW_9kooQ&s' },
      { name: 'Mapusa Market', img: 'https://media1.thrillophilia.com/filestore/1uveqtc9af7n3lq8ts1yaxzceonw_1575012488_market_80.jpeg' },
      { name: 'Anjuna Flea Market', img: 'https://www.tourmyindia.com/states/goa/image/anjuna-flea-market-do-goa.webp' },
    ],
  };

  const handleActivityChange = (event) => {
    const { value } = event.target;
    const updatedActivities = selectedActivities.includes(value)
      ? selectedActivities.filter((activity) => activity !== value)
      : [...selectedActivities, value];

    setSelectedActivities(updatedActivities);
  };

  const handleOptionChange = (event, activity) => {
    const { value } = event.target;
    const optionKey = `${activity}-${value}`;
    const updatedOptions = selectedOptions.includes(optionKey)
      ? selectedOptions.filter((option) => option !== optionKey)
      : [...selectedOptions, optionKey];

    setSelectedOptions(updatedOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected activities:', selectedActivities);
    console.log('Selected options:', selectedOptions);
  };

  // Function to handle search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter activities based on search term
  const filteredActivities = activities.filter(activity =>
    activity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="activities-page flex flex-col items-center p-6 bg-cover bg-center" style={{backgroundColor: 'light-blue', minHeight: '100vh' }}>
      <h2 className="text-3xl font-bold mb-6 text-black">Explore Activities for Your Trip</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for activities..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 border rounded p-2"
      />
      
      <form onSubmit={handleSubmit} className="w-full max-w-4xl">
        <div className="grid grid-cols-4 gap-6">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="activity-option flex flex-col items-center space-y-2">
              <img
                src={activity.img}
                alt={activity.name}
                className="w-32 h-32 md:w-36 md:h-36 rounded-md object-cover"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={activity.id}
                  value={activity.id}
                  onChange={handleActivityChange}
                  className="mr-2"
                />
                <label htmlFor={activity.id} className="text-lg text-black">
                  {activity.name}
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Options section for each selected activity */}
        {selectedActivities.map((activity) => (
          <div key={activity} className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-black">
              Choose options for {activity.charAt(0).toUpperCase() + activity.slice(1)}:
            </h3>
            <div className="grid grid-cols-4 gap-6">
              {(activityOptions[activity] || []).map((option, index) => (
                <div key={index} className="option-item flex items-center space-x-4">
                  <img
                    src={option.img}
                    alt={option.name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-md object-cover"
                  />
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      value={option.name}
                      onChange={(event) => handleOptionChange(event, activity)}
                      className="mr-2"
                    />
                    <label className="text-lg text-black">{option.name}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>

      {/* Featured Activities Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4 text-black">Featured Activities</h3>
        <div className="grid grid-cols-3 gap-6">
          {activities.slice(0, 3).map((activity) => (
            <div key={activity.id} className="flex flex-col items-center">
              <img
                src={activity.img}
                alt={activity.name}
                className="w-48 h-48 rounded-md object-cover mb-2"
              />
              <h4 className="text-lg font-semibold text-black">{activity.name}</h4>
              <p className="text-sm text-center text-black">
                {/* Explanation of why it's featured */}
                {activity.id === 'beaches' && 'Famous for its stunning sunsets and vibrant nightlife.'}
                {activity.id === 'nature' && 'Explore the lush landscapes and diverse wildlife.'}
                {activity.id === 'religious' && 'Visit iconic landmarks that showcase rich cultural heritage.'}
                {activity.id === 'fun' && 'Thrilling activities for adrenaline junkies!'}
                {activity.id === 'clubbing' && 'Experience the vibrant nightlife and dance the night away!'}
                {activity.id === 'water_sports' && 'Dive into adventure with thrilling water activities.'}
                {activity.id === 'historical_sites' && 'Discover the history and stories of the past.'}
                {activity.id === 'local_culture' && 'Immerse yourself in the local lifestyle and traditions.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-20 bg-gray-800 text-white p-4 w-full text-center">
        <p>&copy; 2024 Tripease. All Rights Reserved.</p>
        <p>Follow us on social media for more updates!</p>
      </footer>
    </div>
  );
};

export default ActivitiesRecommendation;
