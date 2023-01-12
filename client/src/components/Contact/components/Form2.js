import React, { useState } from 'react';
import css from './form2.module.scss';

const Form2 = ({ data, setData, setStage }) => {
  const [inputActive, setInputActive] = useState(false);
  const [otherInput, setOtherInput] = useState('');

  const onContinue = (action) => {
    setData({ ...data, action: action });
    setStage(3);
  };

  return (
    <div className={css['form']}>
      <h2>What kind of service are you looking for?</h2>

      <div className={css['form-buttons']}>
        <button onClick={() => onContinue('Develop a website')}>
          Develop a website
        </button>
        <button onClick={() => onContinue('Design a website only')}>
          Design a website only
        </button>
        <button
          className={inputActive ? css['form-other'] : css['']}
          onClick={() => setInputActive(!inputActive)}
        >
          Other
        </button>
      </div>

      {inputActive && (
        <div className={css['form-other-button']}>
          <div className={css['form-input']}>
            <input
              type='text'
              name='action'
              placeholder='What are you looking for?'
              onChange={(e) => setOtherInput(e.target.value)}
            />
          </div>

          <button onClick={() => onContinue(otherInput)}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default Form2;
