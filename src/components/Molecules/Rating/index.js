import React from 'react';
import { Container, Star } from './styled';

const index = ({ rating = 2 }) => {
  const finalRating = Math.round(rating);
  return (
    <Container>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <Star key={index} fill={ratingValue <= finalRating ? 'warning' : 'gray'}/>
        )
      })}
    </Container>
  )
}

export default index
