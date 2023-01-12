import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Landing from './component/Landing';
import Preview from './component/Preview';
import Goal from './component/Goal';
import Work from '../../components/Work/Work';

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
      <Navbar />
      <Landing />
      <Preview />
      <Goal />
      <Work />
    </>
  );
};

export default Home;
