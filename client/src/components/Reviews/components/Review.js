import React from 'react';
import css from './review.module.scss';
import { FaQuoteLeft } from 'react-icons/fa';

const Review = ({ text, rating, signature, position, amount, myRef }) => {
  return (
    <div className={css['review']} ref={myRef ? myRef : null}>
      <h6>
        {position}/{amount}
      </h6>

      <div className={css['review-main']}>
        <FaQuoteLeft size={'2.1rem'} color={'#4B4B4B'} />
        <p>{text}</p>
        <h4>{rating}/5</h4>
      </div>

      <h3>- {signature}</h3>
    </div>
  );
};

export default Review;
