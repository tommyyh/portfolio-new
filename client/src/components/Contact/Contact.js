import React, { useEffect, useState } from 'react';
import css from './contact.module.scss';
import Input from './components/Input';
import { post } from '../../lib/axios';
import { useSelector, useDispatch } from 'react-redux';
import { setContactOpen } from '../../features/stateSlice';

const Contact = () => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    msg: '',
  });
  const [feedback, setFeedback] = useState({
    type: '',
    msg: '',
    new: '', // This is used for setting timer
  });
  const [timeoutId, setTimeoutId] = useState(null);
  const [processing, setProcessing] = useState(false);
  const contactOpen = useSelector(
    (state) => state.state.value.contactOpen.payload
  );
  const dispatch = useDispatch();

  // Set timer every time a new message is set
  useEffect(() => {
    // Clear the previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set the new timeout
    const newTimeoutId = setTimeout(() => {
      setFeedback({
        ...feedback,
        type: '',
        msg: '',
      });
    }, 6000);

    // Store the new timeout ID in state
    setTimeoutId(newTimeoutId);

    // Clean up the timeout ID when the component unmounts or the effect is called again
    return () => {
      clearTimeout(newTimeoutId);
    };
  }, [feedback.new]);

  const sendMessage = async () => {
    setProcessing(true);

    // Regulate form
    const { name, email, msg } = info;
    const re = /\S+@\S+\.\S+/;

    // If empty
    if (!name || !email || !msg) {
      setFeedback({
        type: 'error',
        msg: 'Please fill out all fields',
        new: 1,
      });
      return setProcessing(false);
    }

    // Check email validity
    if (!re.test(email)) {
      setFeedback({
        type: 'error',
        msg: 'Please enter a valid email',
        new: 2,
      });
      return setProcessing(false);
    }

    // Send message ----------------------------------------------------------
    // const res = await post(`/contact/contact/`, info);

    setFeedback({
      type: 'error',
      msg: 'Something went wrong, please contact us on tommyydesign@gmail.com',
      new: 16,
    });

    // if (res.data.status === 200) {
    //   setFeedback({
    //     type: 'success',
    //     msg: 'Your message was sent successfully',
    //     new: 3,
    //   });
    //   setInfo({
    //     name: '',
    //     email: '',
    //     msg: '',
    //   });
    // } else {
    //   setFeedback({
    //     type: 'error',
    //     msg: 'Something went wrong, please contact us on tommyyhoangg@gmail.com',
    //     new: 4,
    //   });
    //   setInfo({
    //     name: '',
    //     email: '',
    //     msg: '',
    //   });
    // }

    setProcessing(false);
  };

  return (
    <>
      <div
        className={
          feedback.msg
            ? `${css['feedback']} ${css['feedback-active']}`
            : css['feedback']
        }
        data-type={feedback.type === 'error' ? 'error' : 'success'}
      >
        <p>{feedback.msg}</p>

        {/* Close button */}
        <div
          className={css['feedback-close']}
          onClick={() =>
            setFeedback({
              ...feedback,
              type: '',
              msg: '',
            })
          }
        ></div>
      </div>
      <aside
        className={
          contactOpen
            ? `${css['contact']} ${css['contact-open']}`
            : css['contact']
        }
      >
        <div className={css['contact-inner']}>
          <div className={css['form']}>
            <Input
              type={'text'}
              name={'name'}
              placeholder={'Your name'}
              maxLength={100}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
              value={info.name}
            />
            <Input
              type={'email'}
              name={'email'}
              placeholder={'Email address'}
              maxLength={254}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              value={info.email}
            />
            <Input
              type={'textarea'}
              name={'msg'}
              placeholder={'Your message'}
              maxLength={900}
              onChange={(e) => setInfo({ ...info, msg: e.target.value })}
              value={info.msg}
            />

            <button
              onClick={sendMessage}
              disabled={processing}
              className={processing ? css['processing'] : css['']}
            >
              {processing ? 'Processing...' : 'Send Message'}
            </button>
          </div>

          {/* Close button */}
          <div
            className={css['lang-close']}
            onClick={() => dispatch(setContactOpen(false))}
          ></div>
        </div>
      </aside>
    </>
  );
};

export default Contact;
