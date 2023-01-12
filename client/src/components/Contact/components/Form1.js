import React from 'react';
import css from './form1.module.scss';

const Form1 = ({ data, setData, setStage }) => {
  const onContinue = () => {
    if (!data.name) return;

    setStage(2);
  };

  return (
    <div className={css['form']}>
      <h2>Hi! Introduce yourself. What's your name?</h2>

      <div className={css['form-input']}>
        <label
          htmlFor='name'
          style={data.name ? { left: '-7rem', opacity: '0' } : {}}
        >
          📝 Write your name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={(e) => setData({ ...data, name: e.target.value })}
          value={data.name}
        />
      </div>

      <div
        className={
          data.name
            ? `${css['form-button']} ${css['form-button-active']}`
            : css['form-button']
        }
      >
        <button onClick={onContinue}>Continue</button>
      </div>
    </div>
  );
};

export default Form1;
