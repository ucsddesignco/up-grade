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
