import React, { useEffect, useRef } from 'react';
import css from './landing.module.scss';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Landing = ({ website }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const elementRef = useRef();
  const elementRef2 = useRef();

  useEffect(() => {
    const cookieValue = Cookies.get('justEntered');

    if (isDesktopOrLaptop) {
      const el = elementRef.current.children;
      const el2 = elementRef2.current.children;

      if (!cookieValue) {
        setTimeout(() => {
          gsap.fromTo(
            el[0].children,
            { x: '-5rem', duration: 0.58, opacity: 0 },
            {
              x: 0,
              duration: 0.58,
              opacity: 1,
              scrollTrigger: { trigger: el, start: 'center bottom' },
              stagger: 0.25,
            }
          );

          gsap.fromTo(
            el[1],
            { x: '5rem', duration: 0.58, opacity: 0 },
            {
              x: 0,
              duration: 0.58,
              opacity: 1,
              scrollTrigger: { trigger: el, start: 'center bottom' },
            }
          );

          gsap.fromTo(
            el2[0],
            { x: '-5rem', duration: 0.58, opacity: 0 },
            {
              x: 0,
              duration: 0.58,
              opacity: 1,
              scrollTrigger: { trigger: el, start: 'center bottom' },
              stagger: 0.25,
            }
          );

          gsap.fromTo(
            el2[1],
            { x: '5rem', duration: 0.58, opacity: 0 },
            {
              x: 0,
              duration: 0.58,
              opacity: 1,
              scrollTrigger: { trigger: el, start: 'center bottom' },
            },
            '+=3'
          );
        }, 2000);
      } else {
        gsap.fromTo(
          el[0].children,
          { x: '-5rem', duration: 0.58, opacity: 0 },
          {
            x: 0,
            duration: 0.58,
            opacity: 1,
            scrollTrigger: { trigger: el, start: 'center bottom' },
            stagger: 0.25,
          }
        );

        gsap.fromTo(
          el[1],
          { x: '5rem', duration: 0.58, opacity: 0 },
          {
            x: 0,
            duration: 0.58,
            opacity: 1,
            scrollTrigger: { trigger: el, start: 'center bottom' },
          }
        );

        gsap.fromTo(
          el2[0],
          { x: '-5rem', duration: 0.58, opacity: 0 },
          {
            x: 0,
            duration: 0.58,
            opacity: 1,
            scrollTrigger: { trigger: el, start: 'center bottom' },
            stagger: 0.25,
          }
        );

        gsap.fromTo(
          el2[1],
          { x: '5rem', duration: 0.58, opacity: 0 },
          {
            x: 0,
            duration: 0.58,
            opacity: 1,
            scrollTrigger: { trigger: el, start: 'center bottom' },
          },
          '+=3'
        );
      }
    } else {
      const el = elementRef.current.children;

      if (!cookieValue) {
        setTimeout(() => {
          gsap.fromTo(
            el[0].children,
            { y: '5rem', duration: 0.58, opacity: 0 },
            {
              y: 0,
              duration: 0.58,
              opacity: 1,
              scrollTrigger: { trigger: el, start: 'center bottom' },
              stagger: 0.25,
            }
          );

          gsap.fromTo(
            el[1].children,
            { y: '5rem', duration: 0.58, opacity: 0 },
            {
              y: 0,
              duration: 0.58,
              opacity: 1,
              scrollTrigger: { trigger: el, start: 'center bottom' },
              stagger: 0.15,
            }
          );
        }, 2000);
      } else {
        gsap.fromTo(
          el[0].children,
          { y: '5rem', duration: 0.58, opacity: 0 },
          {
            y: 0,
            duration: 0.58,
            opacity: 1,
            scrollTrigger: { trigger: el, start: 'center bottom' },
            stagger: 0.25,
          }
        );

        gsap.fromTo(
          el[1].children,
          { y: '5rem', duration: 0.58, opacity: 0 },
          {
            y: 0,
            duration: 0.58,
            opacity: 1,
            scrollTrigger: { trigger: el, start: 'center bottom' },
            stagger: 0.15,
          }
        );
      }
    }
  }, []);

  return (
    <main className={css['landing-cont']}>
      <div className={css['landing']} ref={elementRef}>
        {isTabletOrMobile && (
          <>
            <div className={css['landing-main']}>
              <h1>{website.long_title}</h1>
              {website.live ? (
                <a href={website.website_link} target='_blank'>
                  Visit website
                </a>
              ) : (
                <Link to={''}>Website coming soon.</Link>
              )}
            </div>

            <div className={css['landing-details']}>
              <Detail title={'Role'} text={website.role} />
              <Detail title={'Status'} text={website.status} />
              <Detail
                title={'Technology used'}
                text={`${website.tech[0].tech}, ${website.tech[1].tech}, ${website.tech[2].tech}`}
              />
              <Detail title={'Type'} text={website.type} />
              <Detail title={'Created'} text={website.year} />
              <Detail
                title={'Description'}
                text={website.description}
                column={true}
              />
            </div>

            <img src={website.images[0]?.image} alt='Website preview' />
            <img
              src={
                !website.images[1]
                  ? website.images[0]?.image
                  : website.images[1]?.image
              }
              alt='Website preview'
            />
          </>
        )}

        {isDesktopOrLaptop && (
          <>
            <div className={css['landing-main']} ref={elementRef}>
              <div className={css['landing-main-title']}>
                <div>
                  <h1>{website.long_title}</h1>

                  <div className={css['landing-learn-more-cont']}>
                    {website.live ? (
                      <a
                        href={website.website_link}
                        className={css['landing-learn-more']}
                        target='_blank'
                      >
                        Visit website
                      </a>
                    ) : (
                      <Link to={''} className={css['landing-learn-more']}>
                        Website coming soon.
                      </Link>
                    )}

                    <div className={css['landing-more-hover']}>
                      <p>
                        Hang tight! Website is under construction, coming soon.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={css['landing-main-details']}>
                  <Detail title={'Role'} text={website.role} />
                  <Detail
                    title={'Technology used'}
                    text={`${website.tech[0].tech}, ${website.tech[1].tech}, ${website.tech[2].tech}`}
                  />
                </div>
              </div>

              <img src={website.images[0]?.image} alt='Website preview' />
            </div>

            <div className={css['landing-details']} ref={elementRef2}>
              <img
                src={
                  !website.images[1]
                    ? website.images[0]?.image
                    : website.images[1]?.image
                }
                alt='Website preview'
              />

              <div className={css['landing-details-inner']}>
                <Detail title={'Status'} text={website.status} />
                <Detail title={'Type'} text={website.type} />
                <Detail title={'Created'} text={website.year} />
                <Detail
                  title={'Description'}
                  text={website.description}
                  column={true}
                />
              </div>
            </div>
          </>
        )}
      </div>
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
