import React, { useEffect } from 'react';
import Landing from './component/Landing';
import Preview from './component/Preview';
import Goal from './component/Goal';
import Work from '../../components/Work/Work';
import Process from './component/Process';
import Reviews from '../../components/Reviews/Reviews';
import Footer from '../../components/Footer/Footer';

const Home = () => {
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
      <Preview />
      <Goal />
      <Work />
      <Process />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
