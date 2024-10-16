// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ListingCard from '../components/ListingCard'; // Import the ListingCard component
import { getListings } from '../services/listingService'; // Import the service to fetch listings

function Home() {
  const [listings, setListings] = useState([]); // State to hold listings data
  const [loading, setLoading] = useState(true); // State to show loading

  // Fetch listings when the component mounts
  useEffect(() => {
    async function fetchListings() {
      try {
        const data = await getListings(); // Fetch listings using the service
        setListings(data); // Set the fetched data to state
        setLoading(false); // Turn off the loading state
      } catch (error) {
        console.error('Error fetching listings:', error);
        setLoading(false); // Turn off the loading state in case of error
      }
    }

    fetchListings(); // Call the fetch function
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Welcome to Villabnb</Typography>
      {loading ? (
        <Typography variant="h6">Loading listings...</Typography>
      ) : (
        <Grid container spacing={2}>
          {listings.map((listing) => (
            <Grid item xs={12} sm={6} md={4} key={listing.id}>
              <ListingCard listing={listing} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Home;
