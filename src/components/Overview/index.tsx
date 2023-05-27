import "./styles.scss";
import Columns from "../../libraryComponents/Columns";
import React from "react";

const Overview = () => {
  const bullet = (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3843 0.0449219V21.2476M21.3843 42.4502V21.2476M21.3843 21.2476H0.362305M21.3843 21.2476H42.5516"
        stroke="#19B000"
        stroke-width="3"
      />
    </svg>
  );
  return (
    <div className="subsection overview">
      <div
        className="svg-wrapper"
        style={{
          position: "absolute",
          left: "-20vw",
          width: "clamp(200px,50vw,800px)",
        }}
      >
        <svg
          style={{ position: "relative" }}
          width="100%"
          height="100%"
          viewBox="0 0 1058 906"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M577.307 321.676C590.397 244.598 655.443 112.56 810.909 201.036C1005.24 311.632 1044.3 512.501 901.058 536.717C786.469 556.089 719.862 521.707 700.882 502.094C760.333 551.42 860.401 662.012 785.074 709.771C709.747 757.53 588.202 645.367 536.846 583.315C560.023 640.852 582.256 757.243 485.773 762.52C389.289 767.797 318.802 631.38 295.619 562.511C283.073 621.406 237.351 723.737 154.839 661.906C51.6992 584.617 33.4073 258.75 174.409 287.29C287.21 310.123 305.575 365.812 300.658 390.802C295.526 299.19 307.759 126.792 397.748 170.105C487.737 213.418 554.95 289.199 577.307 321.676Z"
            stroke="#19B000"
            stroke-width="3"
          />
        </svg>
        <svg
          className="animate1"
          width="clamp(120px, 25vw, 400px)"
          viewBox="0 0 439 507"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            right: 0,
            top: "30%",
          }}
        >
          <rect
            x="26.5122"
            y="176.227"
            width="198.871"
            height="369.474"
            rx="8.5"
            transform="rotate(-38.5502 26.5122 176.227)"
            fill="#F2F4F1"
            stroke="#1EC6DE"
            stroke-width="3"
          />
          <rect
            x="28.1682"
            y="165.197"
            width="196.868"
            height="369.474"
            rx="8.5"
            transform="rotate(-38.5502 28.1682 165.197)"
            fill="#F2F4F1"
            stroke="#1EC6DE"
            stroke-width="3"
          />
          <rect
            x="80.5803"
            y="175.099"
            width="132.051"
            height="131.1"
            transform="rotate(-38.5503 80.5803 175.099)"
            fill="#F2F4F1"
            stroke="#1EC6DE"
            stroke-width="3"
          />
          <rect
            x="80.6069"
            y="174.879"
            width="125.043"
            height="131.177"
            transform="rotate(-38.5503 80.6069 174.879)"
            fill="#F2F4F1"
            stroke="#1EC6DE"
            stroke-width="3"
          />
          <circle
            cx="272.533"
            cy="313.461"
            r="58.5836"
            transform="rotate(-16.0693 272.533 313.461)"
            fill="#F2F4F1"
            stroke="#1EC6DE"
            stroke-width="3"
          />
          <circle
            cx="272.533"
            cy="313.461"
            r="26.2319"
            transform="rotate(-16.0693 272.533 313.461)"
            fill="#F2F4F1"
            stroke="#1EC6DE"
            stroke-width="3"
          />
          <path
            d="M241.149 271.864L249.25 274.589L242.839 280.243L241.149 271.864Z"
            fill="#1EC6DE"
          />
          <path
            d="M307.67 350.693L299.373 348.636L305.304 342.48L307.67 350.693Z"
            fill="#1EC6DE"
          />
          <path
            d="M311.173 277.918L309.115 286.214L302.96 280.284L311.173 277.918Z"
            fill="#1EC6DE"
          />
          <path
            d="M234.877 346.178L236.935 337.882L243.09 343.812L234.877 346.178Z"
            fill="#1EC6DE"
          />
        </svg>
        <svg
          className="animate1"
          width="clamp(48px, 10vw, 200px)"
          viewBox="0 0 146 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            right: "-3%",
            top: "50%",
          }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.9291 56.2834C15.95 50.9099 21.9444 48.1921 27.3179 50.2131L34.4334 52.8892C33.4241 50.5164 33.2906 47.7665 34.2699 45.1624C36.0216 40.5048 40.7584 37.8425 45.4887 38.5317C44.9928 36.5529 45.0729 34.4083 45.8454 32.3544C47.8663 26.9809 53.8607 24.2631 59.2342 26.284L60.8417 26.8886C60.2319 24.9694 60.2386 22.839 61.0025 20.8078C62.8096 16.0029 68.1697 13.5727 72.9747 15.3798L107.362 28.3127C108.164 28.5586 108.963 28.8323 109.759 29.1342C129.506 36.6307 139.437 58.7161 131.941 78.4635C125.458 95.5411 108.064 105.277 90.7075 102.749L62.5622 111.446C57.0771 113.141 51.2566 110.069 49.5617 104.584C47.8668 99.0987 50.9394 93.2782 56.4244 91.5833L66.1511 88.5777C65.604 87.8827 65.0819 87.1699 64.5856 86.4408L19.9994 69.6722C14.6259 67.6513 11.9081 61.6569 13.9291 56.2834Z"
            fill="#19B000"
          />
          <path
            d="M66.5355 88.3784C75.4026 83.9332 80.3192 82.4511 88.9413 82.4087M35.5469 53.9575L64.1516 64.8164M45.6623 38.9166L70.4163 48.3137M56.0934 25.2543L76.2633 32.9112"
            stroke="#F2F4F1"
            stroke-width="3"
          />
        </svg>
        <svg
          className="animate3"
          style={{
            position: "absolute",
            right: "15%",
            top: "30%",
          }}
          width="clamp(16px, 5vw, 72px)"
          viewBox="0 0 87 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M78.6571 64.3071L80.0999 61.6779C71.4999 56.6859 65.1378 52.936 60.6582 49.554C56.1788 46.1722 53.8069 43.3191 52.9001 40.2087C51.9933 37.0982 52.4605 33.418 54.4216 28.1597C56.3827 22.9012 59.7344 16.3209 64.3071 7.49081L61.6778 6.04809C56.6857 14.6496 52.9356 21.0125 49.5536 25.4924C46.1718 29.972 43.3188 32.3437 40.2085 33.2501C37.0982 34.1565 33.418 33.6888 28.1597 31.7272C22.9011 29.7656 16.3209 26.4135 7.49079 21.8408L6.04825 24.4702C14.65 29.4608 21.013 33.2096 25.4929 36.5908C29.9726 39.9719 32.3443 42.8245 33.2507 45.9347C34.1571 49.045 33.6893 52.7255 31.7276 57.9847C29.7659 63.2441 26.4136 69.8255 21.8407 78.6572L24.47 80.0999C29.4619 71.4999 33.2119 65.1378 36.5938 60.6582C39.9757 56.1788 42.8287 53.8069 45.9392 52.9001C49.0496 51.9933 52.7298 52.4606 57.9882 54.4216C63.2467 56.3828 69.827 59.7344 78.6571 64.3071Z"
            fill="#F2F4F1"
            stroke="#1EC6DE"
            stroke-width="3"
          />
        </svg>
      </div>

      <h2>Overview</h2>
      <Columns
        className="subsection--columns overview--columns"
        count={2}
        collapseBreakpoint={0}
        space={[80, 0]}
      >
        <Columns.Column></Columns.Column>
        <Columns.Column>
          <ul>
            <li>
              <div className="overview--bulet-wrapper">{bullet}</div>
              July 1st - Sept 9th
            </li>
            <li>
              <div className="overview--bulet-wrapper">{bullet}</div>
              Network with industry professionals
            </li>
            <li>
              <div className="overview--bulet-wrapper">{bullet}</div>
              Work alongside nonprofits
            </li>
            <li>
              <div className="overview--bulet-wrapper">{bullet}</div>
              Mentor-led workshops
            </li>
            <li>
              <div className="overview--bulet-wrapper">{bullet}</div>
              Weekly team meetngs
            </li>
          </ul>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default Overview;
