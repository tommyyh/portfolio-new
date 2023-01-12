import React, { useRef, useState } from 'react';
import css from './reviews.module.scss';
import Review from './components/Review';
import { useSwipeable } from 'react-swipeable';

const Reviews = () => {
  const [counter, setCounter] = useState(1);
  const firstRef = useRef();
  const reviewAmount = 4;

  const leftSwipe = () => {
    if (counter < reviewAmount) {
      document.body.style.overflowY = 'hidden';

      const imgWidth = firstRef.current.offsetWidth;
      const divMargin = 0;
      const newMargin = counter * (imgWidth + divMargin);

      firstRef.current.style.marginLeft = `-${newMargin}px`;

      setTimeout(() => {
        document.body.style.overflowY = 'initial';
      }, 200);
      setCounter(counter + 1);
    }
  };

  const rightSwipe = () => {
    if (counter > 1) {
      document.body.style.overflowY = 'hidden';

      const imgWidth = firstRef.current.offsetWidth;
      const divMargin = 0;
      const newMargin = (counter - 2) * (imgWidth + divMargin);

      firstRef.current.style.marginLeft = `-${newMargin}px`;

      document.body.style.overflowY = 'initial';
      setCounter(counter - 1);
    }
  };

  // Handlers - detect if user swiped left or right
  const handlers = useSwipeable({
    onSwipedLeft: () => leftSwipe(),
    onSwipedRight: () => rightSwipe(),
  });

  return (
    <section className={css['reviews']}>
      <div className={css['reviews-title']}>
        <h5>Don’t take our word for it (swipe)</h5>
        <h2>
          Trust our past customers<span>.</span>
        </h2>
      </div>

      {/* Slideshow */}
      <div {...handlers} className={css['reviews-list']}>
        <Review
          text={
            'Tommy was able to nicely present our brand online. He was a pleasure to work with'
          }
          rating={'4.8'}
          signature={'Elon Musk, CEO Of Tesla'}
          position={counter}
          amount={reviewAmount}
          myRef={firstRef}
        />
        <Review
          text={
            'Tommy was able to nicely present our brand online. He was a pleasure to work with'
          }
          rating={'4.8'}
          signature={'Mark Zuckerberg, CEO Of Facebook'}
          position={counter}
          amount={reviewAmount}
        />
        <Review
          text={
            'Tommy was able to nicely present our brand online. He was a pleasure to work with'
          }
          rating={'4.8'}
          signature={'Andrew Tate, CEO Of Academy'}
          position={counter}
          amount={reviewAmount}
        />
        <Review
          text={
            'Tommy was able to nicely present our brand online. He was a pleasure to work with'
          }
          rating={'4.8'}
          signature={'Barack Obama, CEO Of Something'}
          position={counter}
          amount={reviewAmount}
        />
      </div>

      <div className={css['reviews-lamp']}>
        <svg
          width='0.4375rem'
          height='6.1875rem'
          viewBox='0 0 7 99'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 0H7V90H0V0Z' fill='#161616' />
          <rect y='92' width='7' height='7' rx='1' fill='white' />
        </svg>
        <div className={css['reviews-lamp-light']}></div>
      </div>
    </section>
  );
};

export default Reviews;
