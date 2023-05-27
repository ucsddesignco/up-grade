import "./styles.scss";
import Columns from "../../libraryComponents/Columns";
import React from "react";
const WhatIsUpgrade = () => {
  return (
    <div className="subsection">
      <div
        className="svg-wrapper"
        style={{
          position: "absolute",
          top: "calc(100px - 60%)",
          right: "-10vw",
          width: "clamp(250px, 60vw, 800px)",
        }}
      >
        <svg
          style={{ position: "relative" }}
          width="100%"
          height="100%"
          viewBox="0 0 945 892"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M239.318 203.647C380.448 104.2 429.933 235.806 437.034 314.039C458.448 279.499 521.586 198.052 602.83 148.583C678.512 102.501 684.526 252.029 677.172 348.829C676.632 355.943 676.02 362.771 675.357 369.216C674.732 363.745 675.14 356.744 677.172 348.829C684.526 252.029 678.512 102.501 602.83 148.583C521.586 198.052 458.448 279.499 437.034 314.039C429.933 235.806 380.448 104.2 239.318 203.647C62.906 327.955 17.3475 535.974 141.395 552.683C228.697 564.442 285.838 535.677 310.39 514.175C313.213 511.269 315.966 508.5 318.627 505.885C316.495 508.431 313.747 511.235 310.39 514.175C285.838 535.677 228.697 564.442 141.395 552.683C17.3475 535.974 62.906 327.955 239.318 203.647Z"
            fill="#F2F4F1"
          />
          <path
            d="M443.524 733.558C423.276 694.492 441.089 622.237 457.662 579.825C409.184 646.307 296.416 768.104 233.161 723.432C169.907 678.759 263.782 559.787 318.627 505.885C300.899 527.054 240.633 566.05 141.395 552.683C17.3475 535.974 62.906 327.955 239.318 203.647C380.448 104.2 429.933 235.806 437.034 314.039C458.448 279.499 521.586 198.052 602.83 148.583C684.074 99.1149 685.033 275.06 675.357 369.216C672.465 343.89 691.696 285.792 791.756 256.017C916.831 218.798 882.381 553.715 787.7 638.739C711.955 706.758 677.71 604.496 670.056 544.863C654.096 592.273 618.452 670.962 571.875 719.051"
            stroke="#19B000"
            stroke-width="3"
          />
        </svg>
        <svg
          className="animate2"
          preserveAspectRatio="meet"
          viewBox="0 0 152 116"
          width="clamp(16px, 20vw, 150px)"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            left: "5%",
            top: "20%",
          }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.463867 7.63086C0.463867 3.76487 3.59787 0.630859 7.46386 0.630859H34.8082C38.6742 0.630859 41.8082 3.76487 41.8082 7.63086V28.5547C41.8082 32.4207 44.9422 35.5547 48.8082 35.5547H66.4248C70.2908 35.5547 73.4248 32.4207 73.4248 28.5547V7.63086C73.4248 3.76487 76.5588 0.630859 80.4248 0.630859H107.769C111.635 0.630859 114.769 3.76487 114.769 7.63086V28.5547C114.769 32.4207 117.903 35.5547 121.769 35.5547H144.671C148.537 35.5547 151.671 38.6887 151.671 42.5547V69.899C151.671 73.765 148.537 76.899 144.671 76.899H121.769C117.903 76.899 114.769 80.033 114.769 83.899V108.368C114.769 112.234 111.635 115.368 107.769 115.368H80.4248C76.5588 115.368 73.4248 112.234 73.4248 108.368V83.899C73.4248 80.033 70.2908 76.899 66.4248 76.899H43.0342C39.1682 76.899 36.0342 73.765 36.0342 69.899V48.9752C36.0342 45.1092 32.9002 41.9752 29.0342 41.9752H7.46387C3.59787 41.9752 0.463867 38.8412 0.463867 34.9752V7.63086ZM110.327 67.0239C110.327 70.8899 107.193 74.0239 103.327 74.0239H84.3785C80.5125 74.0239 77.3785 70.8899 77.3785 67.0239V48.9752C77.3785 45.1092 80.5125 41.9752 84.3785 41.9752H103.327C107.193 41.9752 110.327 45.1092 110.327 48.9752V67.0239Z"
            fill="#19B000"
          />
        </svg>
        <svg
          className="animate1"
          style={{
            position: "absolute",
            left: "25%",
            top: "20%",
          }}
          width="clamp(80px, 20vw, 250px)"
          viewBox="0 0 280 281"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="140.03"
            cy="140.695"
            r="136.875"
            transform="rotate(0.625778 140.03 140.695)"
            fill="#F2F4F1"
            stroke="#1EC6DE"
            stroke-width="3"
          />
          <circle
            cx="140.031"
            cy="140.695"
            r="63.6501"
            transform="rotate(0.625778 140.031 140.695)"
            fill="#F2F4F1"
            stroke="#1EC6DE"
            stroke-width="3"
          />
          <circle
            cx="140.033"
            cy="140.695"
            r="57.3049"
            transform="rotate(0.625778 140.033 140.695)"
            fill="#F2F4F1"
            stroke="#1EC6DE"
            stroke-width="3"
          />
          <circle
            cx="140.032"
            cy="140.695"
            r="27.4722"
            transform="rotate(0.625778 140.032 140.695)"
            fill="#F2F4F1"
            stroke="#1EC6DE"
            stroke-width="3"
          />
        </svg>
        <svg
          className="animate3"
          style={{
            position: "absolute",
            left: "50%",
            top: "42%",
          }}
          width="clamp(24px, 8vw, 72px)"
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

      <h2>
        What is <br />
        Up-Grade?
      </h2>
      <Columns
        className="subsection--columns"
        count={2}
        collapseBreakpoint={600}
        space={[80, 16]}
      >
        <Columns.Column>
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Id laoreet
            faucibus placerat volutpat aliquam. Orci ut ultricies ac mi. Est,
            amet, viverra interdum eu mattis lobortis felis. At cras amet, in
            orci at feugiat fermentum tellus. In massa mi massa volutpat
            tincidunt suscipit.
          </p>
        </Columns.Column>
        <Columns.Column>
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Id laoreet
            faucibus placerat volutpat aliquam. Orci ut ultricies ac mi. Est,
            amet, viverra interdum eu mattis lobortis felis. At cras amet, in
            orci at feugiat fermentum tellus. In massa mi massa volutpat
            tincidunt suscipit.
          </p>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default WhatIsUpgrade;
