import React from 'react';
import css from './websites.module.scss';
import AdonioImg from '../../../assets/images/adonio.png';
import Rimmington from '../../../assets/images/rimmington.png';
import { Link } from 'react-router-dom';

const Websites = ({ detailed }) => {
  return (
    <div className={css['projects']}>
      <Project
        img={AdonioImg}
        subTitle={'E-commerce store'}
        title={"Adonio's sneakers store"}
        detailedTitle={
          'Bradford pharmacy vaccinated over 40,000 patients with their online booking form'
        }
        detailed={detailed}
        link={'/'}
        role={'Fullstack developer'}
      />
      <Project
        img={Rimmington}
        subTitle={'Pharmacy website'}
        title={'Rimmington - Flu Jab booking'}
        detailedTitle={
          'Bradford pharmacy vaccinated over 40,000 patients with their online booking form'
        }
        detailed={detailed}
        link={'/'}
        role={'UX/UI developer'}
      />
      <Project
        img={AdonioImg}
        subTitle={'E-commerce store'}
        title={"Adonio's sneakers store"}
        detailedTitle={
          'Bradford pharmacy vaccinated over 40,000 patients with their online booking form'
        }
        detailed={detailed}
        link={'/'}
        role={'Fullstack developer'}
      />
      <Project
        img={Rimmington}
        subTitle={'Pharmacy website'}
        title={'Rimmington - Flu Jab booking'}
        detailedTitle={
          'Bradford pharmacy vaccinated over 40,000 patients with their online booking form'
        }
        detailed={detailed}
        link={'/'}
        role={'UX/UI developer'}
      />
    </div>
  );
};

const Project = ({
  img,
  subTitle,
  title,
  detailedTitle,
  detailed,
  role,
  link,
}) => {
  return (
    <div className={css['project']}>
      <Link to={'/'} className={css['project-img-link']}>
        <img src={img} alt='Project thumbnail' />
      </Link>

      <div
        className={
          detailed
            ? `${css['project-content']} ${css['project-content-detailed']}`
            : css['project-content']
        }
      >
        <h5 className={css['project-subtitle']}>{subTitle}</h5>
        <h3>{detailed ? detailedTitle : title}</h3>

        <h5 className={css['project-role']}>Role: {role}</h5>
        <Link to={link} className={css['project-learn-more']}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Websites;
