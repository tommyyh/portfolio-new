import React, { useEffect } from 'react';
import css from './final.module.scss';

const Final = ({ data, setData }) => {
  useEffect(() => {
    setData({
      name: '',
      action: '',
      priceRange: '',
      msg: '',
      email: '',
    });
  }, []);

  return (
    <div className={css['form']}>
      <h2>Thank you!</h2>

      <p>
        Your message was successfully sent. We will try and get back to you as
        soon as we can.
      </p>

      <p>Enjoy the rest of your day</p>
    </div>
  );
};

export default Final;
