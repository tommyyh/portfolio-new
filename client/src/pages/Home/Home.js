import React, { useEffect, useState } from 'react';
import Landing from './component/Landing';
import Preview from './component/Preview';
import Goal from './component/Goal';
import Work from '../../components/Work/Work';
import Process from './component/Process';
import Reviews from '../../components/Reviews/Reviews';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';
import { get } from '../../lib/axios';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [websites, setWebsites] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Goes to top after page change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });

    (async () => {
      const res = await get('/website/all/');
      const res2 = await get('/website/all-reviews/');

      setWebsites(res.data.data);
      setReviews(res2.data.data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Landing />
      <Preview />
      <Goal />
      <Work websites={websites.slice(0, 4)} websiteLength={websites.length} />
      <Process />
      <Reviews reviews={reviews} />
      <Footer />
    </>
  );
};

export default Home;
