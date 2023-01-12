import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Landing from './components/Landing';
import Work from '../../components/Work/Work';

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
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
};

export default Website;
