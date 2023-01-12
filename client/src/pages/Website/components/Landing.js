import React from 'react';
import css from './landing.module.scss';
import RimmingtonImg from '../../../assets/images/rimmington.png';

const Landing = () => {
  return (
    <main className={css['landing']}>
      <div className={css['landing-main']}>
        <h1>
          Bradford pharmacy vaccinated over 40,000 patients with their online
          booking form
        </h1>
        <a href={'https://rimmington.vercel.app/'}>Visit website</a>
      </div>

      <div className={css['landing-details']}>
        <Detail title={'Role'} text={'Fullstack developer'} />
        <Detail title={'Technology used'} text={'React, Django, Redux'} />
        <Detail title={'Type'} text={'E-commerces store'} />
        <Detail title={'Created'} text={'2022'} />
        <Detail
          title={'Description'}
          text={
            'Rimming pharmacy is a pharmacy located in Englang, Bradford. Known for Rimming pharmacy is a pharmacy located in Englang, Bradford. Known for ce'
          }
          column={true}
        />
      </div>

      <img src={RimmingtonImg} alt='Website preview' />
      <img src={RimmingtonImg} alt='Website preview' />
    </main>
  );
};

const Detail = ({ title, text, column }) => {
  return (
    <div
      className={column ? css['landing-detail-column'] : css['landing-detail']}
    >
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Landing;
