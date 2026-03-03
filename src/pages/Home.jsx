import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import spinAnimation from '../assets/animation1.json';
import spinAnimation2 from '../assets/animation2.json';
import spinAnimation3 from '../assets/animation3.json';
import spinAnimation4 from '../assets/animation4.json';

const Home = () => {
  const navigate = useNavigate();
  const animations = [
    spinAnimation,
    spinAnimation2,
    spinAnimation3,
    spinAnimation4,
  ];
  const [selectedAnimation] = useState(
    () => animations[Math.floor(Math.random() * animations.length)]
  );
  const [pageNumber, setPageNumber] = useState(0);
  const [headerTextIndex, setHeaderTextIndex] = useState(0);
  const headerTexts = ['WED—SAT, 6PM', 'THEKLASTR 1'];

  const headerButtonRightTexts = ['[RESERVATIONS]', '[CLOSE]', '[CLOSE]'];
  const headerButtonRightLinks = [
    () => setPageNumber(1),
    () => setPageNumber(0),
    () => setPageNumber(0),
  ];

  const [logoHeight, setLogoHeight] = useState(400); // default fallback height
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const breakpointLg = 1024; // Tailwind's lg breakpoint in pixels

  // const isInitialMount = useRef(true);

  const mainRef = useRef(null);
  const subpageRef = useRef(null);
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
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpointLg);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpointLg]);

  useEffect(() => {
    // if (isInitialMount.current) {
    //   isInitialMount.current = false;
    //   return;
    // }

    const refs = {
      0: mainRef,
      1: subpageRef,
      2: subpageRef,
    };

    const element = refs[pageNumber]?.current;
    if (element) {
      element.scrollTop = 0; // Reset scroll position to top
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    // refs[pageNumber]?.current?.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    // });
  }, [pageNumber]);

  const handleLottieLoad = (dotLottie) => {
    if (logoRef.current) {
      const height = logoRef.current.offsetHeight;
      setLogoHeight(height);
    }
  };

  return (
    <div className='flex h-[100svh] font-main uppercase text-main-size tracking-main-tracking text-main-color leading-main break-words'>
      <div className='flex-1 overflow-y-hidden h-full'>
        {/* Main Page */}

        <div
          ref={mainRef}
          className={`h-full overflow-y-auto flex flex-col justify-between no-scrollbar`}
        >
          <div
            className={`lg:mt-0 lg:h-full`}
            style={{
              marginTop: isMobile ? `${logoHeight}px` : '0',
            }}
          >
            <div className='p-[4px] lg:p-[8px] lg:justify-between flex flex-col min-h-full'>
              <div>
                <Header
                  leftText={headerTexts[headerTextIndex]}
                  rightText={headerButtonRightTexts[0]}
                  handleRightTextClick={headerButtonRightLinks[0]}
                />
                <div className='flex flex-col gap-[4em]'>
                  <div>
                    SPIN is a Hi-Fi bar built around intentional listening and
                    contemporary bartending. The love for vinyl is what shaped
                    this place. It is inspired by the culture of listening bars
                    and high-fidelity sound. The drinks follow the same mindset:
                    high-quality ingredients, new flavours, crafted with the
                    precision of modern bartending.
                  </div>
                  <div className='flex flex-col gap-[2em] mb-[2em]'>
                    <div>
                      <p>SOUNDSYSTEM</p>
                      We‘re using equipment chosen to deliver a focused, warm
                      and immersive listening experience.
                    </div>
                    <div className='flex flex-col gap-[1em]'>
                      <div className='grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4'>
                        <div className='lg:hidden xl:block'>
                          <p>Mixer</p>
                          <p>Turntables</p>
                        </div>

                        <div className='col-span-3'>
                          <p>Resør 3300</p>
                          <p>Technics 1210 MK7</p>
                        </div>

                        <div className='col-span-4 h-[1em]'></div>

                        <div className='lg:hidden xl:block'>
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
                            <p>Rotel RA-920AX</p>
                            <p>Bar Area</p>
                          </div>
                          <div>
                            <p>Dynaudio MSP 80</p>
                            <p>NAD 2140</p>
                            <p>Back Room</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`flex h-svh lg:h-auto items-end ${pageNumber === 0 ? `` : 'hidden'}`}
              >
                <button
                  onClick={() => setPageNumber(2)}
                  // className='hover:text-hover-color'
                >
                  [IMPRINT]
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='h-[400px]'></div> */}
        {/* Imprint Page */}

        <div
          ref={subpageRef}
          className={`h-full overflow-y-auto flex flex-col justify-between no-scrollbar`}
        >
          {/* {pageNumber === 0 && <div className='h-svh lg:h-screen'></div>} */}
          {pageNumber === 1 && (
            <div
              className={`lg:mt-0 flex flex-col lg:h-full p-[4px] lg:p-[8px]`}
              style={{
                marginTop: isMobile ? `${logoHeight}px` : '0',
              }}
            >
              <Header
                rightText={headerButtonRightTexts[1]}
                handleRightTextClick={headerButtonRightLinks[1]}
              />
              <div className='flex flex-col gap-[3em]'>
                <div className='flex flex-col gap-[1em]'>
                  <div>
                    MOST OF OUR TABLES ARE FOR WALK-INS ONLY, BUT WE OFFER A SMALL NUMBER OF BOOKABLE TABLES FOR THOSE WHO PREFER TO PLAN AHEAD. PLEASE NOTE: RESERVATIONS ARE ONLY VALID ONCE CONFIRMED BY E-MAIL.
                  </div>
                  <div>
                    <button
                      onClick={() => navigate('/reservation')}
                      className='uppercase'
                    >
                      [Book a table]
                    </button>
                  </div>
                  <div className='mt-[3em]'>
                    Celebrations
                    <br />
                    IF YOU WOULD LIKE TO CELEBRATE YOUR BIRTHDAY OR ANY OTHER OCCASION WITH A LARGER GROUP, PLEASE SEND US AN <a href='mailto:hello@spin-bar.de'>[E-MAIL]</a> AND WE WILL GET BACK TO YOU.
                  </div>
                </div>
              </div>
              <div className='h-svh lg:h-auto' />
            </div>
          )}
          {pageNumber === 2 && (
            <div
              className={`lg:mt-0 flex flex-col lg:h-full p-[4px] lg:p-[8px]`}
              style={{
                marginTop: isMobile ? `${logoHeight}px` : '0',
              }}
            >
              <Header
                rightText={headerButtonRightTexts[2]}
                handleRightTextClick={headerButtonRightLinks[2]}
              />
              <div className='flex flex-col gap-[2em]'>
                <section
                  aria-labelledby='company'
                  className='prose flex flex-col gap-[1em]'
                >
                  <div>
                    {/* <p>SPIN</p> */}
                    <p>Läuft Stabil GmbH</p>
                    <p>Theklastr. 1</p>
                    <p>80469 München</p>
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
                    <a href='mailto:hello@spin-bar.de'>hello@spin-bar.de</a>
                  </div>
                  <div>
                    <p>USt-Id-Nr:</p> DE295571897
                  </div>
                  <div>
                    <p>CODE:</p>
                    <a href='https://www.instagram.com/jeyrototo/'>
                      JENNY HUANG
                    </a>
                  </div>
                  <div>
                    <p>DESIGN:</p>
                    <a href='https://custom-tip.com/'>CUSTOM TIP</a>
                  </div>
                </section>
                <div className='h-[6em]' />
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
                <section
                  aria-labelledby='privacy'
                  className='prose max-w-none flex flex-col gap-[2em]'
                >
                  <div>
                    <h2 id='privacy'>Datenschutzerklärung</h2>
                    <p className='normal-case'>Stand: Dezember 2025</p>
                  </div>

                  <div>
                    <h3 className='mt-0'>1. Verantwortlicher</h3>
                    <div className='flex flex-col gap-[1em]'>
                      <p className='normal-case'>
                        Verantwortlich für die Datenverarbeitung auf dieser
                        Website ist:
                      </p>
                      <div className='normal-case'>
                        <p>Läuft stabil GmbH</p>
                        <p>Theklastraße 1</p>
                        <p>80469 München</p>
                        <p>Handelsregister: HRB 211256</p>
                        <p>Registergericht: Amtsgericht München</p>
                        <p>Geschäftsführer: Felix Ruëff</p>
                        <p>
                          E-Mail:{' '}
                          <a href='mailto:hello@spin-bar.de'>
                            hello@spin-bar.de
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className='mt-0'>
                      2. Erhebung und Speicherung personenbezogener Daten beim
                      Besuch der Website
                    </h3>
                    <div className='flex flex-col gap-[1em]'>
                      <p className='normal-case'>
                        Beim Aufruf unserer Website werden durch den Server
                        automatisch folgende Informationen erfasst:
                      </p>
                      <ul className='normal-case'>
                        <li>- IP-Adresse</li>
                        <li>- Datum und Uhrzeit des Zugriffs</li>
                        <li>- Browsertyp und -version</li>
                        <li>- verwendetes Betriebssystem</li>
                        <li>- Referrer-URL</li>
                        <li>- aufgerufene Seiten</li>
                      </ul>

                      <div className='normal-case'>
                        <p className='normal-case'>
                          Diese Daten sind technisch erforderlich, um die
                          Website bereitzustellen und ihre Sicherheit zu
                          gewährleisten.
                        </p>
                        <p>
                          <strong>Zweck:</strong> Technischer Betrieb,
                          Systemsicherheit, Fehleranalyse
                        </p>
                        <p>
                          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f
                          DSGVO
                        </p>
                        <p>
                          <strong>Speicherdauer:</strong> Server-Logfiles werden
                          in der Regel nach 7–14 Tagen gelöscht.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className='mt-0'>3. Hosting über Vercel</h3>
                    <div className='flex flex-col gap-[1em]'>
                      <p className='normal-case'>
                        Unsere Website wird gehostet durch:
                      </p>
                      <div className='normal-case'>
                        <p>Vercel Inc.</p>
                        <p>340 S Lemon Ave #4133</p>
                        <p>Walnut, CA 91789</p>
                        <p>USA</p>
                      </div>
                      <p className='normal-case'>
                        Vercel verarbeitet personenbezogene Daten ausschließlich
                        in unserem Auftrag. Es besteht ein Vertrag zur
                        Auftragsverarbeitung gemäß Art. 28 DSGVO.
                        <br />
                        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f
                        DSGVO
                        <br />
                        Datenschutzerklärung von Vercel:{' '}
                        <a
                          href='https://vercel.com/legal/privacy-policy'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          https://vercel.com/legal/privacy-policy
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className='mt-0'>4. Cookies</h3>
                    <div className='flex flex-col gap-[1em]'>
                      <p className='normal-case'>
                        Unsere Website verwendet ausschließlich Cookies, die für
                        den technischen Betrieb erforderlich sind. Es werden
                        keine Analyse-, Tracking- oder Marketing-Cookies
                        eingesetzt.
                        <br />
                        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f
                        DSGVO
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className='mt-0'>
                      5. Kontaktaufnahme und Reservierungen per E-Mail
                    </h3>
                    <div className='flex flex-col gap-[1em]'>
                      <p className='normal-case'>
                        Wenn Sie uns per E-Mail kontaktieren oder eine
                        Reservierungsanfrage stellen, verarbeiten wir die von
                        Ihnen übermittelten personenbezogenen Daten,
                        insbesondere:
                      </p>
                      <ul className='normal-case'>
                        <li>- Name</li>
                        <li>- E-Mail-Adresse</li>
                        <li>- ggf. Telefonnummer</li>
                        <li>
                          - Inhalt der Nachricht bzw. Reservierungsanfrage
                        </li>
                      </ul>
                      <div className='normal-case'>
                        <p>
                          <strong>Zweck:</strong> Bearbeitung von Anfragen und
                          Reservierungen
                        </p>
                        <p>
                          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b
                          DSGVO (vorvertragliche Maßnahmen)
                        </p>
                        <p>
                          <strong>Speicherdauer:</strong> Die Daten werden
                          gelöscht, sobald der Zweck der Verarbeitung entfällt
                          und keine gesetzlichen Aufbewahrungspflichten
                          bestehen.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className='mt-0'>6. Externe Links (Social Media)</h3>
                    <div className='flex flex-col gap-[1em]'>
                      <p className='normal-case'>
                        Unsere Website enthält ausschließlich Verlinkungen zu
                        externen Plattformen (z. B. Instagram). Beim Besuch
                        unserer Website werden keine personenbezogenen Daten
                        automatisch an diese Anbieter übertragen. Erst beim
                        Anklicken eines externen Links gelten die
                        Datenschutzbestimmungen des jeweiligen Anbieters.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className='mt-0'>7. Rechte der betroffenen Personen</h3>
                    <div className='flex flex-col gap-[1em]'>
                      <p className='normal-case'>Sie haben das Recht auf:</p>
                      <ul className='normal-case'>
                        <li>- Auskunft (Art. 15 DSGVO)</li>
                        <li>- Berichtigung (Art. 16 DSGVO)</li>
                        <li>- Löschung (Art. 17 DSGVO)</li>
                        <li>
                          - Einschränkung der Verarbeitung (Art. 18 DSGVO)
                        </li>
                        <li>- Datenübertragbarkeit (Art. 20 DSGVO)</li>
                        <li>
                          - Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)
                        </li>
                      </ul>
                      <p className='normal-case'>
                        Zur Ausübung Ihrer Rechte genügt eine formlose E-Mail
                        an:{' '}
                        <a href='mailto:hello@spin-bar.de'>hello@spin-bar.de</a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className='mt-0'>8. Beschwerderecht</h3>
                    <div className='flex flex-col gap-[1em]'>
                      <p className='normal-case'>
                        Sie haben das Recht, sich bei einer
                        Datenschutzaufsichtsbehörde zu beschweren. Zuständig
                        ist:
                      </p>
                      <div>
                        <p>
                          Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
                        </p>
                        <p>Promenade 27</p>
                        <p>91522 Ansbach</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className='mt-0'>
                      9. Aktualisierung dieser Datenschutzerklärung
                    </h3>
                    <div className='flex flex-col gap-[1em]'>
                      <p className='normal-case'>
                        Wir behalten uns vor, diese Datenschutzerklärung
                        anzupassen, sobald technische Änderungen (z. B. die
                        Einführung eines Online-Reservierungstools) oder
                        rechtliche Anforderungen dies erforderlich machen.
                      </p>
                    </div>
                  </div>
                  <div className='h-svh lg:h-auto' />
                </section>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className='w-full h-auto lg:w-auto lg:h-full fixed lg:static left-0 top-0 pointer-events-none'
        ref={logoRef}
      >
        {/* <img
          src={spinlogo}
          onLoad={handleImageLoad}
          alt='Spin Logo'
          className='object-contain w-full h-auto lg:w-auto lg:h-full select-none'
        /> */}
        <div className='w-full h-full select-none pr-[0px] lg:pr-[4px] pl-[3px] lg:pl-[0px]'>
          <div className='w-full h-full aspect-[974/990]'>
            <Lottie
              animationData={selectedAnimation}
              loop={false}
              autoplay={true}
              // style={{ width: '100%', height: '100%' }}
              onDOMLoaded={handleLottieLoad}
            />
          </div>
        </div>
        <HeaderMobile
          leftText={pageNumber === 0 ? headerTexts[headerTextIndex] : ''}
          rightText={headerButtonRightTexts[pageNumber]}
          handleRightTextClick={headerButtonRightLinks[pageNumber]}
        />
      </div>
    </div>
  );
};

const Header = ({ leftText, rightText, handleRightTextClick }) => {
  return (
    <div className='flex-col xl:flex-row w-full mb-[18px] hidden lg:flex'>
      <div className='flex-1'>{leftText}</div>
      <div className='flex-1'>
        <button
          onClick={handleRightTextClick}
          // className='hover:text-hover-color'
        >
          {rightText}
        </button>
      </div>
    </div>
  );
};

const HeaderMobile = ({ leftText, rightText, handleRightTextClick }) => {
  return (
    <div className='flex flex-row w-full mb-[18px] p-[4px] lg:p-[8px] lg:hidden pointer-events-auto justify-between'>
      <div className=''>{leftText}</div>
      <div className=''>
        <button
          onClick={handleRightTextClick}
          // className='hover:text-hover-color'
        >
          {rightText}
        </button>
      </div>
    </div>
  );
};

export default Home;
