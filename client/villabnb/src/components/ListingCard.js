// src/components/ListingCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

const ListingCard = ({ listing }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardMedia
        component="img"
        height="140"
        image={listing.image_url}
        alt={listing.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {listing.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {listing.description}
        </Typography>
        <Typography variant="body1">
          Price per night: ${listing.price_per_night}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
        <Button size="small">Book Now</Button>
      </CardActions>
    </Card>
  );
};

export default ListingCard;
