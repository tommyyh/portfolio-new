import React, { useState } from 'react';
import css from './form5.module.scss';

const Form5 = ({ data, setData, setStage }) => {
  const [error, setError] = useState('');

  const onContinue = () => {
    const re = /\S+@\S+\.\S+/;

    if (!data.email) {
      return setError('Please fill out your email address.');
    }

    if (!re.test(data.email)) {
      return setError('Email address is not valid.');
    }

    setStage(6);
  };

  return (
    <div className={css['form']}>
      <h2>Great! Lastly fill out your email address so i can contact you.</h2>

      <div className={css['form-input']}>
        <input
          type='email'
          name='email'
          placeholder='Email Address'
          onChange={(e) => setData({ ...data, email: e.target.value })}
          onFocus={() => setError('')}
        />
      </div>

      {error && <p className={css['form-error']}>{error}</p>}

      <button onClick={onContinue}>Continue</button>
    </div>
  );
};

export default Form5;
