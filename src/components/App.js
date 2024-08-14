import React, { useState, useEffect } from 'react';

const App = () => {
  // State to store the dog image URL and loading status
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect to fetch the dog image when the component is mounted
  useEffect(() => {
    // Define the fetch function
    const fetchDogImage = async () => {
      try {
        // Fetch the dog image from the API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        
        // Update state with the image URL and stop loading
        setDogImage(data.message);
        setLoading(false);
      } catch (error) {
        // Handle any errors (optional)
        console.error('Error fetching dog image:', error);
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchDogImage();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Display loading message while fetching data
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the dog image after data is fetched
      )}
    </div>
  );
};

export default App;