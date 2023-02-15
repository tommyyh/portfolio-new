import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Landing from './components/Landing';
import Work from '../../components/Work/Work';
import Loading from '../../components/Loading/Loading';
import { get } from '../../lib/axios';

const MyWork = () => {
  const [loading, setLoading] = useState(true);
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    // Goes to top after page change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });

    (async () => {
      const res = await get('/website/all/');

      setWebsites(res.data.data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Landing />
      <Work detailed={true} websites={websites} />
      <Footer />
    </>
  );
};

export default MyWork;
