import React, { useState, useEffect } from 'react';

function App() {
  // State to hold the dog image URL
  const [dogImage, setDogImage] = useState(null);
  // State to indicate whether data is loading
  const [loading, setLoading] = useState(true);

  // Fetch data from the API using useEffect
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        // Parse JSON response
        const data = await response.json();
        // Update state with the dog image URL
        setDogImage(data.message);
        // Set loading to false
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Optionally handle error
      }
    };

    // Call fetchData function when component mounts
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <div>
      {/* Conditional rendering based on loading state */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Render dog image when data is loaded
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
