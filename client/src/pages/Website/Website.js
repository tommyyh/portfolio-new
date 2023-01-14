import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Landing from './components/Landing';

const Website = () => {
  useEffect(() => {
    // Goes to top after page change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);

  return (
    <>
      <Landing />
      <Footer />
    </>
  );
};

export default Website;
