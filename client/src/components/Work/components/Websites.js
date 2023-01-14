import React from 'react';
import css from './websites.module.scss';
import AdonioImg from '../../../assets/images/adonio.png';
import Rimmington from '../../../assets/images/rimmington.png';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Websites = ({ detailed }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

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
        link={'/my-work/34928'}
        role={'Fullstack developer'}
        year={'2022'}
        position={isDesktopOrLaptop ? 'left' : 'left'}
      />
      <Project
        img={Rimmington}
        subTitle={'Pharmacy website'}
        title={'Rimmington - Flu Jab booking'}
        detailedTitle={
          'Bradford pharmacy vaccinated over 40,000 patients with their online booking form'
        }
        detailed={detailed}
        link={'/my-work/34928'}
        role={'UX/UI developer'}
        year={'2022'}
        position={isDesktopOrLaptop ? 'right' : 'left'}
      />
      <Project
        img={AdonioImg}
        subTitle={'E-commerce store'}
        title={"Adonio's sneakers store"}
        detailedTitle={
          'Bradford pharmacy vaccinated over 40,000 patients with their online booking form'
        }
        detailed={detailed}
        link={'/my-work/34928'}
        role={'Fullstack developer'}
        year={'2022'}
        position={isDesktopOrLaptop ? 'mid' : 'left'}
      />
      <Project
        img={Rimmington}
        subTitle={'Pharmacy website'}
        title={'Rimmington - Flu Jab booking'}
        detailedTitle={
          'Bradford pharmacy vaccinated over 40,000 patients with their online booking form'
        }
        detailed={detailed}
        link={'/my-work/34928'}
        role={'UX/UI developer'}
        year={'2022'}
        position={isDesktopOrLaptop ? 'right' : 'left'}
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
  position,
  year,
}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <>
      {position === 'left' && (
        <div className={css['project']}>
          <Link to={link} className={css['project-img-link']}>
            <img src={img} alt='Project thumbnail' />

            <div className={css['project-controls']}></div>
          </Link>

          <div
            className={
              detailed
                ? `${css['project-content']} ${css['project-content-detailed']}`
                : css['project-content']
            }
          >
            <div>
              <h5 className={css['project-subtitle']}>{subTitle}</h5>
              {!detailed ? (
                <h3>{title}</h3>
              ) : (
                <h3 className={css['project-title-left']}>{detailedTitle}</h3>
              )}

              {detailed && isDesktopOrLaptop && (
                <Link to={link} className={css['project-learn-more']}>
                  Learn More
                </Link>
              )}
            </div>

            {isDesktopOrLaptop && !detailed && <h6>Role: {role}</h6>}

            {detailed && isTabletOrMobile && (
              <>
                <h5 className={css['project-role']}>Role: {role}</h5>
                <Link to={link} className={css['project-learn-more']}>
                  Learn More
                </Link>
              </>
            )}

            {detailed && isDesktopOrLaptop && (
              <div>
                <h5 className={css['project-year']}>{year}</h5>
                <h5 className={css['project-role']}>Role: {role}</h5>
              </div>
            )}
          </div>
        </div>
      )}

      {position === 'right' && (
        <div className={`${css['project']} ${css['project-right']}`}>
          <div
            className={
              detailed
                ? `${css['project-content']} ${css['project-content-detailed']} ${css['project-detailed-right']}`
                : css['project-content']
            }
            style={
              detailed ? { marginLeft: '10rem', marginRight: '-0.5rem' } : {}
            }
          >
            <div>
              <h5 className={css['project-subtitle']}>{subTitle}</h5>
              <h3>{detailed ? detailedTitle : title}</h3>

              {detailed && isDesktopOrLaptop && (
                <Link to={link} className={css['project-learn-more']}>
                  Learn More
                </Link>
              )}
            </div>

            {isDesktopOrLaptop && !detailed && <h6>Role: {role}</h6>}

            {detailed && isTabletOrMobile && (
              <>
                <h5 className={css['project-role']}>Role: {role}</h5>
                <Link to={link} className={css['project-learn-more']}>
                  Learn More
                </Link>
              </>
            )}

            {detailed && isDesktopOrLaptop && (
              <div>
                <h5 className={css['project-year']}>{year}</h5>
                <h5 className={css['project-role']}>Role: {role}</h5>
              </div>
            )}
          </div>

          <Link to={link} className={css['project-img-link']}>
            <img src={img} alt='Project thumbnail' />
          </Link>
        </div>
      )}

      {position === 'mid' && (
        <div className={`${css['project']} ${css['project-mid']}`}>
          <Link to={link} className={css['project-img-link']}>
            <img src={img} alt='Project thumbnail' />
          </Link>

          <div
            className={
              detailed
                ? `${css['project-content']} ${css['project-content-detailed']}`
                : css['project-content']
            }
          >
            <div style={detailed ? { width: '50%' } : {}}>
              <h5 className={css['project-subtitle']}>{subTitle}</h5>
              <h3>{detailed ? detailedTitle : title}</h3>

              {detailed && isDesktopOrLaptop && (
                <Link to={link} className={css['project-learn-more']}>
                  Learn More
                </Link>
              )}
            </div>

            {isDesktopOrLaptop && !detailed && <h6>Role: {role}</h6>}

            {detailed && isTabletOrMobile && (
              <>
                <h5 className={css['project-role']}>Role: {role}</h5>
                <Link to={link} className={css['project-learn-more']}>
                  Learn More
                </Link>
              </>
            )}

            {detailed && isDesktopOrLaptop && (
              <div>
                <h5 className={css['project-role']}>Role: {role}</h5>
                <h5 className={css['project-year']}>{year}</h5>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Websites;
