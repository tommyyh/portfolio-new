import React from 'react';
import css from './form4.module.scss';

const Form4 = ({ data, setData, setStage }) => {
  const onContinue = () => {
    if (!data.msg) return;

    setStage(5);
  };

  return (
    <div className={css['form']}>
      <h2>Please quickly describe your project.</h2>

      <div className={css['form-input']}>
        <input
          type='text'
          name='msg'
          placeholder='Your Message'
          onChange={(e) => setData({ ...data, msg: e.target.value })}
        />
      </div>

      <div
        className={
          data.msg
            ? `${css['form-button']} ${css['form-button-active']}`
            : css['form-button']
        }
      >
        <button onClick={onContinue}>Continue</button>
      </div>
    </div>
  );
};

export default Form4;
