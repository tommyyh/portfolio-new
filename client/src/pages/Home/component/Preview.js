import React from 'react';
import css from './preview.module.scss';
import Adonio from '../../../assets/images/adonio.png';
import Rimmington from '../../../assets/images/rimmington.png';

const Preview = () => {
  return (
    <section className={css['preview-cont']}>
      <div className={css['preview-inner']}>
        <div className={css['preview']}>
          <img src={Adonio} alt='Adonio store' />
          <img src={Rimmington} alt='Rimmington pharmacy' />
        </div>
      </div>
    </section>
  );
};

export default Preview;
