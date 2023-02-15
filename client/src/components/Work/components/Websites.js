import React, { useEffect, useRef } from 'react';
import css from './websites.module.scss';
import AdonioImg from '../../../assets/images/adonio.png';
import Rimmington from '../../../assets/images/rimmington.png';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Websites = ({ detailed, websites }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  const getPosition = (x) => {
    const num = x + 1;

    if (num % 2 == 0) {
      return 'right';
    } else if (num % 3 == 0) {
      return 'mid';
    } else {
      return 'left';
    }
  };

  return (
    <div className={css['projects']}>
      {websites.map((website, index) => (
        <Project
          key={website.id}
          img={website.images[0]?.image}
          subTitle={website.type}
          title={website.title}
          detailedTitle={website.long_title}
          detailed={detailed}
          link={`/my-work/${website.id}`}
          role={website.role}
          tech={`${website.tech[0].tech}, ${website.tech[1].tech}, ${website.tech[2].tech}`}
          year={website.year}
          position={isDesktopOrLaptop ? getPosition(index) : 'left'}
        />
      ))}
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
  tech,
}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const elementRef = useRef();
  const element2Ref = useRef();

  useEffect(() => {
    const el = elementRef.current;
    const el2 = element2Ref.current.children;

    gsap.fromTo(
      el,
      { y: '2.75rem', duration: 0.85, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        scrollTrigger: { trigger: el, start: 'center bottom' },
      }
    );

    gsap.fromTo(
      el2,
      { y: '2.75rem', duration: 0.7, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        scrollTrigger: { trigger: el, start: 'center bottom' },
        stagger: 0.265,
      }
    );
  }, []);

  return (
    <>
      {position === 'left' && (
        <div className={css['project']}>
          <Link
            to={link}
            className={css['project-img-link']}
            style={detailed ? { width: '100%' } : {}}
            ref={elementRef}
          >
            <img src={img} alt='Project thumbnail' />

            <div className={css['project-controls']}>
              <ul>
                <li>Year: {year}</li>
                <li>{tech}</li>
                <li>View more details</li>
              </ul>
            </div>
          </Link>

          <div
            className={
              detailed
                ? `${css['project-content']} ${css['project-content-detailed']}`
                : css['project-content']
            }
            ref={element2Ref}
          >
            <div>
              <h5 className={css['project-subtitle']}>{subTitle}</h5>
              {!detailed ? (
                <h3>{title}</h3>
              ) : (
                <h3 className={css['project-title-left']}>{detailedTitle}</h3>
              )}

              {detailed && isDesktopOrLaptop && (
                <div className={css['project-learn-more-cont']}>
                  <Link to={link} className={css['project-learn-more']}>
                    Learn More
                  </Link>

                  <div className={css['project-more-hover']}>
                    <p>{title}</p>
                  </div>
                </div>
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
            ref={element2Ref}
            style={
              detailed ? { marginLeft: '10rem', marginRight: '-0.5rem' } : {}
            }
          >
            <div>
              <h5 className={css['project-subtitle']}>{subTitle}</h5>
              <h3>{detailed ? detailedTitle : title}</h3>

              {detailed && isDesktopOrLaptop && (
                <div className={css['project-learn-more-cont']}>
                  <Link to={link} className={css['project-learn-more']}>
                    Learn More
                  </Link>

                  <div className={css['project-more-hover']}>
                    <p>{title}</p>
                  </div>
                </div>
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

          <Link
            to={link}
            className={css['project-img-link']}
            style={detailed ? { width: '100%' } : {}}
            ref={elementRef}
          >
            <img src={img} alt='Project thumbnail' />

            <div className={css['project-controls']}>
              <ul>
                <li>Year: {year}</li>
                <li>{tech}</li>
                <li>View more details</li>
              </ul>
            </div>
          </Link>
        </div>
      )}

      {position === 'mid' && (
        <div className={`${css['project']} ${css['project-mid']}`}>
          <Link
            to={link}
            className={css['project-img-link']}
            style={detailed ? { width: '100%' } : {}}
            ref={elementRef}
          >
            <img src={img} alt='Project thumbnail' />

            <div className={css['project-controls']}>
              <ul>
                <li>Year: {year}</li>
                <li>{tech}</li>
                <li>View more details</li>
              </ul>
            </div>
          </Link>

          <div
            className={
              detailed
                ? `${css['project-content']} ${css['project-content-detailed']}`
                : css['project-content']
            }
            ref={element2Ref}
          >
            <div style={detailed ? { width: '50%' } : {}}>
              <h5 className={css['project-subtitle']}>{subTitle}</h5>
              <h3>{detailed ? detailedTitle : title}</h3>

              {detailed && isDesktopOrLaptop && (
                <div className={css['project-learn-more-cont']}>
                  <Link to={link} className={css['project-learn-more']}>
                    Learn More
                  </Link>

                  <div className={css['project-more-hover']}>
                    <p>{title}</p>
                  </div>
                </div>
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
