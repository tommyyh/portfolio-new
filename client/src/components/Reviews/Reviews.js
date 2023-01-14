import React, { useRef, useState } from 'react';
import css from './reviews.module.scss';
import Review from './components/Review';
import { useSwipeable } from 'react-swipeable';
import { useMediaQuery } from 'react-responsive';

const Reviews = () => {
  const [counter, setCounter] = useState(1);
  const [reviewsTrans, setReviewsTrans] = useState(false);
  const firstRef = useRef();
  const reviewAmount = 4;
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const leftSwipe = () => {
    if (counter < reviewAmount) {
      if (isTabletOrMobile) {
        document.body.style.overflowY = 'hidden';
      }
      setReviewsTrans(true);

      const imgWidth = firstRef.current.offsetWidth;
      const divMargin = 0;
      const newMargin = counter * (imgWidth + divMargin + 1);

      firstRef.current.style.marginLeft = `-${newMargin}px`;

      setTimeout(() => {
        document.body.style.overflowY = 'initial';
      }, 200);

      setTimeout(() => {
        setReviewsTrans(false);
      }, 300);

      setCounter(counter + 1);
    }
  };

  const rightSwipe = () => {
    if (counter > 1) {
      setReviewsTrans(true);

      if (isTabletOrMobile) {
        document.body.style.overflowY = 'hidden';
      }

      const imgWidth = firstRef.current.offsetWidth;
      const divMargin = 0;
      const newMargin = (counter - 2) * (imgWidth + divMargin + 1);

      firstRef.current.style.marginLeft = `-${newMargin}px`;

      setTimeout(() => {
        document.body.style.overflowY = 'initial';
      }, 200);

      setTimeout(() => {
        setReviewsTrans(false);
      }, 300);

      setCounter(counter - 1);
    }
  };

  // Handlers - detect if user swiped left or right
  const handlers = useSwipeable({
    onSwipedLeft: () => leftSwipe(),
    onSwipedRight: () => rightSwipe(),
  });

  return (
    <section className={css['reviews-cont']}>
      <div className={css['reviews']}>
        <div className={css['reviews-title']}>
          <div>
            <h5>Don’t take our word for it (swipe)</h5>
            <h2>
              Trust our past customers<span>.</span>
            </h2>
          </div>

          {isDesktopOrLaptop && (
            <div className={css['reviews-buttons']}>
              <div
                className={
                  counter === 1
                    ? css['reviews-button']
                    : `${css['reviews-button']} ${css['reviews-button-active']}`
                }
                onClick={rightSwipe}
              >
                Previous
              </div>
              <div
                className={
                  counter === 4
                    ? css['reviews-button']
                    : `${css['reviews-button']} ${css['reviews-button-active']}`
                }
                onClick={leftSwipe}
              >
                Next
              </div>
            </div>
          )}
        </div>

        {/* Slideshow */}
        <div className={css['reviews-list-cont']}>
          <div
            className={`${css['reviews-box']} ${css['reviews-box-left']}`}
          ></div>

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
              reviewsTrans={reviewsTrans}
            />
            <Review
              text={
                'Tommy was able to nicely present our brand online. He was a pleasure to work with'
              }
              rating={'4.8'}
              signature={'Mark Zuckerberg, CEO Of Facebook'}
              position={counter}
              amount={reviewAmount}
              reviewsTrans={reviewsTrans}
            />
            <Review
              text={
                'Tommy was able to nicely present our brand online. He was a pleasure to work with'
              }
              rating={'4.8'}
              signature={'Andrew Tate, CEO Of Academy'}
              position={counter}
              amount={reviewAmount}
              reviewsTrans={reviewsTrans}
            />
            <Review
              text={
                'Tommy was able to nicely present our brand online. He was a pleasure to work with'
              }
              rating={'4.8'}
              signature={'Barack Obama, CEO Of Something'}
              position={counter}
              amount={reviewAmount}
              reviewsTrans={reviewsTrans}
            />
          </div>

          <div
            className={`${css['reviews-box']} ${css['reviews-box-right']}`}
          ></div>
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
      </div>
    </section>
  );
};

export default Reviews;
