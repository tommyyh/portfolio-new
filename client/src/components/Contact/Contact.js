import React, { useEffect, useState } from 'react';
import css from './contact.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setContactOpen } from '../../features/stateSlice';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form4 from './components/Form4';
import Form5 from './components/Form5';
import Final from './components/Final';

const Contact = () => {
  const [data, setData] = useState({
    name: '',
    action: '',
    priceRange: '',
    msg: '',
    email: '',
  });
  const [stage, setStage] = useState(1);
  const contactOpen = useSelector(
    (state) => state.state.value.contactOpen.payload
  );
  const dispatch = useDispatch();

  return (
    <section
      className={
        contactOpen
          ? `${css['contact']} ${css['contact-open']}`
          : css['contact']
      }
    >
      <div
        className={
          contactOpen
            ? `${css['contact-main']} ${css['contact-main-visible']}`
            : css['contact-main']
        }
      >
        <div>
          <div className={css['menu-top']}>
            <h4 onClick={() => dispatch(setContactOpen(false))}>close</h4>
          </div>

          {/* Forms ----------------------------------- */}
          {stage === 1 && (
            <Form1 data={data} setData={setData} setStage={setStage} />
          )}
          {stage === 2 && (
            <Form2 data={data} setData={setData} setStage={setStage} />
          )}
          {stage === 3 && (
            <Form3 data={data} setData={setData} setStage={setStage} />
          )}
          {stage === 4 && (
            <Form4 data={data} setData={setData} setStage={setStage} />
          )}
          {stage === 5 && (
            <Form5 data={data} setData={setData} setStage={setStage} />
          )}
          {stage === 6 && (
            <Final data={data} setData={setData} setStage={setStage} />
          )}
        </div>

        {/* <div className={css['contact-bar']}>
          <div className={css['contact-progress']}></div>
        </div> */}
        {stage !== 1 && stage !== 6 && (
          <div
            className={css['contact-go-back']}
            onClick={() => setStage(stage - 1)}
          >
            Return back
          </div>
        )}
        {stage === 6 && (
          <div
            onClick={() => dispatch(setContactOpen(false))}
            className={css['contact-go-back']}
          >
            Go Back Home
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
