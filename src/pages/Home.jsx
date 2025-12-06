import { useState, useEffect, useRef } from 'react';
import spinlogo from '../assets/Ebene_1.png';

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [headerTextIndex, setHeaderTextIndex] = useState(0);
  const headerTexts = ['THU—SAT, 7PM', 'THEKLASTR 1'];
  const [logoHeight, setLogoHeight] = useState(400); // default fallback height
  const breakpointLg = 1024; // Tailwind's lg breakpoint in pixels

  const isInitialMount = useRef(true);

  const mainRef = useRef(null);
  const imprintRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderTextIndex((prev) => (prev + 1) % headerTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const updateLogoHeight = () => {
  //     if (logoRef.current) {
  //       const className = `h-[${logoRef.current.offsetHeight}px]`;
  //       setLogoHeightClassName(className);
  //       console.log('Logo height updated:', className);
  //     }
  //   };

  //   updateLogoHeight();
  //   window.addEventListener('resize', updateLogoHeight);

  //   return () => window.removeEventListener('resize', updateLogoHeight);
  // }, []);

  const handleImageLoad = () => {
    if (logoRef.current) {
      const height = logoRef.current.offsetHeight;
      setLogoHeight(height);
      console.log('Logo height on load:', height);
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const refs = {
      0: mainRef,
      1: imprintRef,
      2: imprintRef,
    };

    refs[pageNumber]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // const element = refs[pageNumber]?.current;
    // if (element) {
    //   // Check if mobile (below lg breakpoint: 1024px)
    //   const isMobile = window.innerWidth < 1024;

    //   if (isMobile) {
    //     const offset = -400;
    //     const elementPosition = element.offsetTop;

    //     window.scrollTo({
    //       top: elementPosition + offset,
    //       behavior: 'smooth',
    //     });
    //   } else {
    //     // Desktop: use scrollIntoView
    //     element.scrollIntoView({
    //       behavior: 'smooth',
    //       block: 'start',
    //     });
    //   }
    // }
  }, [pageNumber]);

  return (
    <div className='flex h-full font-main uppercase text-main-size tracking-main-tracking text-main-color leading-main'>
      <div className='flex-1 overflow-hidden'>
        {/* <div
          className={`transition-transform duration-700 ${
            pageNumber === 0
              ? 'translate-y-0'
              : pageNumber === 2
                ? '-translate-y-[200vh]'
                : '-translate-y-[100vh]'
          }`}
        > */}

        {/* Main Page */}

        <div
          ref={mainRef}
          className={`h-screen overflow-auto flex flex-col justify-between no-scrollbar`}
        >
          <div
            className={`lg:mt-0 lg:justify-between flex flex-col lg:h-full p-[4px] lg:p-[8px]`}
            style={{
              marginTop:
                window.innerWidth < breakpointLg ? `${logoHeight}px` : '0',
            }}
          >
            <div>
              <Header
                leftText={headerTexts[headerTextIndex]}
                rightText='[RESERVATIONS]'
                handleRightTextClick={() => setPageNumber(1)}
              />
              <div className='flex flex-col gap-[3em]'>
                <div>
                  SPIN is a HiFi bar built around intentional listening and
                  contemporary bartending. The love for vinyl is what shaped
                  this place. It is inspired by the culture of listening bars
                  and high-fidelity sound. The drinks follow the same mindset:
                  high-quality ingredients, new flavours, crafted with the
                  precision of modern bartending.
                </div>
                <div className='flex flex-col gap-[2em]'>
                  <div>
                    <p>SOUNDSYSTEM</p>
                    We‘re using equipment chosen to deliver a focused, warm and
                    immersive listening experience.
                  </div>
                  <div className='flex flex-col gap-[1em]'>
                    <div className='grid grid-cols-2 2xl:grid-cols-4'>
                      <div>
                        <p>Mixer</p>
                        <p>Turntables</p>
                        <p>Cartridge</p>
                      </div>
                      <div className='col-span-3'>
                        <p>Resør 3300</p>
                        <p>Technics 1210 MK7</p>
                        <p>Taruya 05M-2</p>
                      </div>
                      <div className='col-span-4 h-[1em]'></div>
                      <div>
                        <p>Speakers</p>
                        <p>Amplifiers</p>
                      </div>

                      <div className='grid-cols-subgrid grid col-span-1 2xl:col-span-3 gap-[1em]'>
                        <div>
                          <p>JBL 4341</p>
                          <p>Rotel RA-1070</p>
                          <p>Main Room</p>
                        </div>
                        <div>
                          <p>ATL HD-306</p>
                          <p>NAD 2140</p>
                          <p>Bar Area</p>
                        </div>
                        <div>
                          <p>Dynaudio MSP 80</p>
                          <p>Rotel RA-920AX</p>
                          <p>Back Room</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex h-screen lg:h-auto items-end'>
              <button
                onClick={() => setPageNumber(2)}
                className='hover:text-hover-color'
              >
                [IMPRINT]
              </button>
            </div>
          </div>
        </div>

        {/* Imprint Page */}

        <div
          ref={imprintRef}
          className={`h-screen overflow-auto flex flex-col justify-between no-scrollbar`}
        >
          {pageNumber === 0 && <div className='h-screen'></div>}
          {pageNumber === 1 && (
            <div
              className={`lg:mt-0 flex flex-col lg:h-full p-[4px] lg:p-[8px]`}
              style={{
                marginTop:
                  window.innerWidth < breakpointLg ? `${logoHeight}px` : '0',
              }}
            >
              <Header
                rightText='[CLOSE]'
                handleRightTextClick={() => setPageNumber(0)}
              />
              <div className='flex flex-col gap-[3em]'>
                <div className='flex flex-col gap-[2em]'>
                  <div>
                    Walk-ins are welcome, but online reservations are
                    encouraged. THE BAR is open Thu–SAT, 7PM until Goldener
                    Reiter Club – located right next door – opens.
                  </div>
                  <div className='h-[10em]'>Reservierungstool</div>
                  <div>
                    <p>Cancellations</p>
                    We kindly ask that you inform us as soon as possible if you
                    need to cancel your reservation. This will allow us to
                    accommodate other guests who may be on our waiting list.
                  </div>
                </div>
              </div>
            </div>
          )}
          {pageNumber === 2 && (
            <div
              className={`lg:mt-0 flex flex-col lg:h-full`}
              style={{
                marginTop:
                  window.innerWidth < breakpointLg ? `${logoHeight}px` : '0',
              }}
            >
              <Header
                rightText='[CLOSE]'
                handleRightTextClick={() => setPageNumber(0)}
              />
              <div className='mt-4 flex flex-col gap-[2em]'>
                <section
                  aria-labelledby='company'
                  className='prose flex flex-col gap-[1em]'
                >
                  <div>
                    <p>Läuft Stabil GmbH</p>
                    <br />
                    Theklastr. 1
                    <br />
                    80469 München
                  </div>
                  <div>
                    <p>Handelsregister:</p> HRB 211256
                  </div>
                  <div>
                    <p>Registergericht:</p> Amtsgericht München
                  </div>
                  <div>
                    <p>Vertreten durch:</p> Felix Ruëff
                  </div>
                  <div>
                    <p>Kontakt:</p>
                    <a
                      href='mailto:contact@spin-bar.de'
                      className='hover:underline'
                    >
                      contact@spin-bar.de
                    </a>
                  </div>
                  <div>
                    <p>USt-Id-Nr:</p> DE295571897
                  </div>
                  <div>
                    <p>CODE:</p>JENNY HUANG
                  </div>
                  <div>
                    <p>DESIGN:</p>CUSTOM TIP
                  </div>
                </section>

                <section aria-labelledby='dispute' className='prose max-w-none'>
                  <h2 id='dispute'>
                    Verbraucherstreitbeilegung / Universalschlichtungsstelle
                  </h2>
                  <p className='normal-case'>
                    Wir sind nicht bereit oder verpflichtet, an
                    Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>

                <section aria-labelledby='privacy' className='prose max-w-none'>
                  <h2 id='privacy'>Datenschutzerklärung</h2>

                  <h3 className='mt-4'>1. Datenschutz auf einen Blick</h3>
                  <p>
                    <p>Allgemeine Hinweise</p>
                  </p>
                  <p>...</p>
                </section>
              </div>
            </div>
          )}
        </div>
      </div>
      <img
        src={spinlogo}
        ref={logoRef}
        onLoad={handleImageLoad}
        alt='Spin Logo'
        className='fixed lg:static left-0 top-0 pointer-events-none select-none object-contain w-full h-auto lg:w-auto lg:h-full '
      />
    </div>
  );
};

const Header = ({ leftText, rightText, handleRightTextClick }) => {
  return (
    <div className='flex flex-row w-full mb-[18px]'>
      <div className='flex-1'>{leftText}</div>
      <div className='flex-1'>
        <button
          onClick={handleRightTextClick}
          className='hover:text-hover-color'
        >
          {rightText}
        </button>
      </div>
    </div>
  );
};

export default Home;
