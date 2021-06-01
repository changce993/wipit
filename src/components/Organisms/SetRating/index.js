import React, { useState } from 'react';
import { Input, Label } from 'components/Atoms';
import { Container, Star } from './styled';

const Index = ({ rating = 1, onChange }) => {
  const finalRating = Math.round(rating);
  const [ratingState, setRatingState] = useState(finalRating);
  const [hover, setHover] = useState(null);
  return (
    <Container>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <Label
            key={index}
            margin="0"
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
            <Input
              display="none"
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRatingState(ratingValue)}
              onChange={e => onChange(e)}
            />
            <Star fill={ratingValue <= (hover || ratingState) ? 'warning' : 'gray'}/>
          </Label>
        )
      })}
    </Container>
  )
}

export default Index
