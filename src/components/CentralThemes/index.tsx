import React from "react";
import Columns from "../../libraryComponents/Columns/Columns";
import "./styles.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const CentralThemes = () => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <div className="subsection central-themes">
      <div
        className="svg-wrapper"
        style={{
          position: "absolute",
          top: "-20%",
          right: "-30vw",
          width: "clamp(200px, 60vw, 800px)",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 841 721"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M381.432 465.451C371.027 526.724 319.32 631.685 195.735 561.352C41.2539 473.436 10.2083 313.758 124.072 294.508C215.163 279.109 268.111 306.44 283.198 322.031C235.939 282.82 156.391 194.908 216.272 156.942C276.152 118.977 372.771 208.139 413.596 257.466C395.172 211.728 377.498 119.205 454.196 115.01C530.894 110.815 586.926 219.258 605.355 274.004C615.329 227.187 651.675 145.84 717.266 194.992C799.255 256.431 813.796 515.474 701.71 492.786C612.04 474.635 597.441 430.366 601.35 410.501C605.429 483.327 595.705 620.371 524.17 585.94C452.635 551.51 399.205 491.268 381.432 465.451Z"
            stroke="#19B000"
            stroke-width="2.75789"
          />
        </svg>
      </div>
      <h2>
        Central
        <br />
        Themes
      </h2>
      <div
        className="central-themes--grid subsection--columns"
        style={{
          columnGap: windowWidth > 600 ? 72 : 24,
          rowGap: windowWidth > 600 ? 100 : 40,
        }}
      >
        <svg
          width="100%"
          viewBox="0 0 43 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.8148 2.67645C23.8747 3.41692 21.8409 6.00859 21.2263 10.4515"
            stroke="#F2F4F1"
            stroke-width="1.16454"
          />
          <path
            d="M23.8716 9.74852C24.1301 8.63105 24.9916 3.04366 35.6493 0.808838C35.5626 3.78873 33.0858 9.74852 23.8716 9.74852Z"
            fill="#19B000"
            stroke="#19B000"
            stroke-width="1.16454"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.4822 46.1707C34.1736 46.1707 42.0301 38.3143 42.0301 28.6228C42.0301 18.9313 34.1736 11.0748 24.4822 11.0748C23.3259 11.0748 22.1958 11.1867 21.102 11.4001C20.0083 11.1867 18.8782 11.0749 17.722 11.0749C8.03056 11.0749 0.174072 18.9313 0.174072 28.6228C0.174072 38.3143 8.03056 46.1708 17.722 46.1708C18.8783 46.1708 20.0084 46.059 21.1022 45.8455C22.1959 46.0589 23.326 46.1707 24.4822 46.1707Z"
            fill="#19B000"
          />
          <path
            d="M21.1048 12.8687C20.3941 13.1052 16.9638 14.1701 16.0168 20.4408"
            stroke="#F2F4F1"
            stroke-width="1.16454"
          />
          <path
            d="M31.7566 17.5415C31.8826 17.2058 32.3574 17.2058 32.4834 17.5415L33.1136 19.2202C33.153 19.325 33.2357 19.4078 33.3406 19.4471L35.0193 20.0773C35.355 20.2033 35.355 20.6782 35.0193 20.8042L33.3406 21.4344C33.2357 21.4737 33.153 21.5565 33.1136 21.6613L32.4834 23.34C32.3574 23.6757 31.8826 23.6757 31.7566 23.34L31.1264 21.6613C31.087 21.5565 31.0043 21.4737 30.8994 21.4344L29.2207 20.8042C28.8851 20.6782 28.8851 20.2033 29.2207 20.0773L30.8994 19.4471C31.0043 19.4078 31.087 19.325 31.1264 19.2202L31.7566 17.5415Z"
            fill="#F2F4F1"
          />
          <path
            d="M4.96094 6.10209C5.08695 5.76642 5.56176 5.76642 5.68778 6.10209L6.31796 7.78077C6.35733 7.88564 6.44008 7.96839 6.54495 8.00775L8.22363 8.63794C8.5593 8.76396 8.5593 9.23876 8.22363 9.36478L6.54495 9.99497C6.44008 10.0343 6.35733 10.1171 6.31796 10.222L5.68777 11.9006C5.56176 12.2363 5.08695 12.2363 4.96094 11.9006L4.33075 10.222C4.29138 10.1171 4.20863 10.0343 4.10377 9.99497L2.42509 9.36478C2.08942 9.23876 2.08942 8.76396 2.42509 8.63794L4.10377 8.00775C4.20863 7.96839 4.29138 7.88564 4.33075 7.78077L4.96094 6.10209Z"
            fill="#19B000"
          />
        </svg>

        <div className="central-themes--grid-item">
          <h3>Education</h3>
          <p>
            Nonprofit organizations in San Diego thrive on their commitment to
            accessible education. From mentoring/tutoring services to outdoor
            recreational courses, these groups ensure that learning
            opportunities are made available to all regardless of age,
            socio-economic status, or other barriers! They work hard to provide
            opportunities for local youth to develop the skills and knowledge
            they need to succeed.
          </p>
        </div>
        <svg
          width="100%"
          viewBox="0 0 146 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5384 54.2755C11.0227 37.9232 20.7705 27.1265 25.802 24.4011C14.1659 24.4011 9.45108 18.7408 11.6518 17.1684C13.2893 15.9984 19.199 11.9274 21.7148 9.30683C35.2998 -5.53606 46.0336 6.05732 49.7024 13.7094C55.2371 12.9547 62.7004 15.7009 65.7403 17.1684C79.0737 6.85385 84.6089 16.3299 86.4957 21.571C110.144 7.2313 128.005 18.5312 133.98 25.9736C153.855 55.1562 140.269 92.9551 130.206 108.993H112.596C112.806 108.888 113.288 108.05 113.539 105.534C113.791 103.018 107.565 95.2612 104.42 91.6972C101.799 91.9068 96.2437 92.2003 94.9858 91.6972C93.7279 91.194 87.2923 91.9068 84.2317 92.3261C82.0597 100.348 79.0067 107.617 77.0611 111.509H47.1867C46.4529 105.639 44.9858 95.7855 36.4951 93.1414C28.0574 90.5139 24.3357 86.1418 23.2875 83.2067L28.3186 83.8355L13.5384 54.2755Z"
            fill="#19B000"
            stroke="#19B000"
            stroke-width="3"
          />
          <ellipse
            cx="27.0647"
            cy="70.3136"
            rx="26.7298"
            ry="18.2391"
            fill="#19B000"
          />
          <path
            d="M14.1623 54.5959C25.796 51.3033 52.5753 54.5956 52.5753 69.5219C52.5753 83.6794 38.0881 87.9602 28.2105 87.9602"
            stroke="#F2F4F1"
            stroke-width="3"
          />
          <path d="M23.292 42.3257V47.3572" stroke="#F2F4F1" stroke-width="3" />
          <path d="M14.166 62.7664V77.2319" stroke="#F2F4F1" stroke-width="3" />
          <path
            d="M30.5238 62.7664V77.2319"
            stroke="#F2F4F1"
            stroke-width="3"
          />
          <path
            d="M49.3933 42.6406V47.6721"
            stroke="#F2F4F1"
            stroke-width="3"
          />
          <path
            d="M26.1218 24.4013C26.4363 24.4013 34.9269 24.4013 39.9584 20.6277M71.0907 31.6341C70.336 36.1624 71.8245 39.6006 72.6631 40.7536C78.009 41.4874 88.5751 39.37 88.072 25.0302M59.141 96.4144C60.3988 98.0916 62.7259 103.396 61.9712 111.194M103.166 80.0621C102.328 82.0537 101.343 86.8546 104.11 90.1251M85.2418 80.0621C85.5562 81.9489 86.1852 88.5527 84.2984 91.0685"
            stroke="#F2F4F1"
            stroke-width="3"
          />
        </svg>

        <div className="central-themes--grid-item">
          <h3>Animal Services</h3>
          <p>
            Our local animal rescue and adoption nonprofits work tirelessly to
            provide care for the furry friends and local wildlife of the San
            Diego community. These groups actively foster a culture of
            compassion with hopes to encourage others to join in on their
            mission with open hearts and loving homes for animals in need!
          </p>
        </div>
        <svg
          width="100%"
          viewBox="0 0 111 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.0235 110.434C85.3976 110.434 110.021 85.8108 110.021 55.4366C110.021 25.0625 85.3976 0.439453 55.0235 0.439453C24.6494 0.439453 0.0263367 25.0625 0.0263367 55.4366C0.0263367 85.8108 24.6494 110.434 55.0235 110.434ZM51.8077 75.4808L55.0244 78.409L58.2411 75.4808C69.6658 65.1209 77.2083 58.266 77.2083 49.9027C77.2083 43.0479 71.8398 37.7015 65.0072 37.7015C61.1472 37.7015 57.4424 39.4984 55.0244 42.3158C52.6063 39.4984 48.9016 37.7015 45.0416 37.7015C38.209 37.7015 32.8405 43.0479 32.8405 49.9027C32.8405 58.266 40.383 65.1209 51.8077 75.4808Z"
            fill="#19B000"
          />
        </svg>

        <div className="central-themes--grid-item">
          <h3>Community Relief</h3>
          <p>
            Community-focused nonprofit organizations here in San Diego tackle
            basic needs insecurities, like food, housing, and healthcare crises
            through accessible medical support, healthy meals, and services that
            aid the search for affordable housing. With remarkable resilience
            and innovation, these groups foster significant, empathetic change
            in their local communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CentralThemes;
