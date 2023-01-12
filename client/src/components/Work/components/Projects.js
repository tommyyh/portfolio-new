import React from 'react';
import css from './projects.module.scss';
import AdonioImg from '../../../assets/images/adonio.png';
import Rimmington from '../../../assets/images/rimmington.png';

const Projects = () => {
  return (
    <div className={css['projects']}>
      <Project
        img={AdonioImg}
        subTitle={'E-commerce store'}
        title={"Adonio's sneakers store"}
      />
      <Project
        img={Rimmington}
        subTitle={'Pharmacy website'}
        title={'Rimmington - Flu Jab booking'}
      />
      <Project
        img={AdonioImg}
        subTitle={'E-commerce store'}
        title={"Adonio's sneakers store"}
      />
      <Project
        img={Rimmington}
        subTitle={'Pharmacy website'}
        title={'Rimmington - Flu Jab booking'}
      />
    </div>
  );
};

const Project = ({ img, subTitle, title }) => {
  return (
    <div className={css['project']}>
      <img src={img} alt='Project thumbnail' />

      <div className={css['project-content']}>
        <h5>{subTitle}</h5>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Projects;
