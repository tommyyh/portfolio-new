import React from 'react';
import css from './form3.module.scss';

const Form3 = ({ data, setData, setStage }) => {
  const onContinue = (priceRange) => {
    setData({ ...data, priceRange: priceRange });
    setStage(4);
  };

  return (
    <div className={css['form']}>
      <h2>What is is your current budget range?</h2>

      <div className={css['form-buttons']}>
        <button onClick={() => onContinue('Less than $250')}>
          Less than $250
        </button>
        <button onClick={() => onContinue('$250 - $1,000')}>
          $250 - $1,000
        </button>
        <button onClick={() => onContinue('$1,000 - $2,500')}>
          $1,000 - $2,500
        </button>
        <button onClick={() => onContinue('More than $2,500')}>
          More than $2,500
        </button>
      </div>
    </div>
  );
};

export default Form3;
