import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Landing from './components/Landing';
import Loading from '../../components/Loading/Loading';
import { get } from '../../lib/axios';
import { useParams } from 'react-router-dom';

const Website = () => {
  const [loading, setLoading] = useState(true);
  const [website, setWebsite] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Goes to top after page change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });

    (async () => {
      const res = await get(`/website/get-website/${id}/`);

      setWebsite(res.data.data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Landing website={website} />
      <Footer />
    </>
  );
};

export default Website;
