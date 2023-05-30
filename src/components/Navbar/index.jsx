import { useState } from 'react';
import './styles.scss';

const Navbar = ({ refs, setHoveringNav }) => {
  const [open, setOpen] = useState();

  const checkOverflow = (open) => {
    if (open) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <div className="navbar-container">
      <div className="left">
        <a
          onMouseEnter={() => setHoveringNav(true)}
          onMouseLeave={() => setHoveringNav(false)}
          className="logo"
          href="/"
        >
          UP-GRADE
        </a>
      </div>
      <div className="right">
        <button
          onMouseEnter={() => setHoveringNav(true)}
          onMouseLeave={() => setHoveringNav(false)}
          onClick={() => {
            setOpen((open) => {
              checkOverflow(open);
              return !open;
            });
          }}
          aria-expanded={open}
          className="mobile-button"
        >
          <svg
            className="hamburger-icon"
            width="30"
            height="30"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.549072 0.0527344H22.6844V2.06504H0.549072V0.0527344ZM0.549072 9.10811H22.6844V11.1204H0.549072V9.10811ZM0.549072 18.1635H22.6844V20.1758H0.549072V18.1635Z"
              fill="#19B000"
            />
          </svg>
          <svg
            className="close-icon"
            width="30"
            height="30"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.953644 0.790863L8.69936 8.53658M16.4451 16.2823L8.69936 8.53658M8.69936 8.53658L1.01964 16.2163M8.69936 8.53658L16.4322 0.803748"
              stroke="#19B000"
              strokeWidth="1.54992"
            />
          </svg>
        </button>

        <ul>
          <li>
            <button
              onMouseEnter={() => setHoveringNav(true)}
              onMouseLeave={() => setHoveringNav(false)}
              onClick={() => {
                window.scrollTo({top: refs['overview'].current.getBoundingClientRect().top + window.pageYOffset - 100, behavior: 'smooth'})
                // refs['overview'].current.scrollIntoView({
                //   behavior: 'smooth',
                // });
                setOpen(false);
              }}
            >
              Overview
            </button>
          </li>

          <li>
            <button
              onMouseEnter={() => setHoveringNav(true)}
              onMouseLeave={() => setHoveringNav(false)}
              onClick={() => {
                window.scrollTo({top: refs['themes'].current.getBoundingClientRect().top + window.pageYOffset - 100, behavior: 'smooth'})
                setOpen(false);
              }}
            >
              Themes
            </button>
          </li>
          <li>
            <button
              onMouseEnter={() => setHoveringNav(true)}
              onMouseLeave={() => setHoveringNav(false)}
              onClick={() => {
                window.scrollTo({top: refs['FAQ'].current.getBoundingClientRect().top + window.pageYOffset, behavior: 'smooth'})
                setOpen(false);
              }}
            >
              FAQ
            </button>
          </li>
          <li
            onMouseEnter={() => setHoveringNav(true)}
            onMouseLeave={() => setHoveringNav(false)}
          >
            <div className="apply-container">
              <button
                onClick={() =>
                  window.open('https://forms.gle/jYa6dZGv2hP7ZfMs6')
                }
                className="apply"
              >
                Apply &nbsp;Here
              </button>
              <svg
                className="star"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.1006 36.3406L44.5434 33.7113C39.5507 30.8132 35.9022 28.6613 33.344 26.7299C30.7861 24.7988 29.5434 23.249 29.0753 21.6431C28.6071 20.0372 28.8223 18.0628 29.9421 15.0601C31.0621 12.0572 32.9833 8.28235 35.638 3.15606L33.0087 1.71334C30.1105 6.70694 27.9585 10.3559 26.0272 12.9142C24.096 15.4723 22.5463 16.7147 20.9405 17.1827C19.3347 17.6506 17.3604 17.4352 14.3576 16.315C11.3547 15.1948 7.57986 13.2733 2.45353 10.6186L1.011 13.248C6.00472 16.1453 9.65371 18.2966 12.212 20.2275C14.7702 22.1582 16.0126 23.7077 16.4805 25.3134C16.9484 26.9192 16.733 28.8938 15.6128 31.897C14.4925 34.9005 12.5708 38.6759 9.91604 43.8032L12.5454 45.2459C15.4434 40.2532 17.5954 36.6047 19.5267 34.0466C21.4579 31.4886 23.0076 30.246 24.6136 29.7778C26.2194 29.3096 28.1938 29.5248 31.1965 30.6447C34.1995 31.7646 37.9743 33.6859 43.1006 36.3406Z"
                  fill="#F2F4F1"
                  stroke="#19B000"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
