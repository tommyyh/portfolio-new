import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Landing from './components/Landing';
import Work from '../../components/Work/Work';

const MyWork = () => {
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
      <Work detailed={true} />
      <Footer />
    </>
  );
};

export default MyWork;
