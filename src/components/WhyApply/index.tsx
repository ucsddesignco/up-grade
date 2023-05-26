import React from "react";
import Columns from "../../libraryComponents/Columns";
import "./styles.scss";

const WhyApply = () => {
  return (
    <div className="subsection why-apply">
      <div
        className="svg-wrapper"
        style={{
          position: "absolute",
          top: "calc(40px - 20vw)",
          right: "-10vw",
          width: "clamp(200px, 60vw, 800px)",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 748 610"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M293.494 239.204C256.352 194.736 165.436 134.463 98.9058 249.124C15.7431 392.45 65.6882 535.638 166.438 497.696C247.037 467.343 276.856 420.475 281.69 400.835C262.03 454.601 239.222 562.751 305.274 565.224C371.326 567.697 407.299 450.527 417.028 391.633C423.657 437.121 452.851 519.942 516.598 487.319C580.345 454.697 574.575 341.048 563.722 288.302C593.731 321.33 661.189 369.792 690.95 299.414C728.151 211.441 618.27 -4.03547 538.638 66.8515C474.931 123.561 483.952 166.071 496.425 180.238C465.527 119.664 393.366 13.8432 351.909 75.1542C310.451 136.465 295.692 210.067 293.494 239.204Z"
            stroke="#19B000"
            stroke-width="3"
          />
        </svg>
      </div>
      <h2>
        Why
        <br />
        Apply?
      </h2>
      <Columns
        className="subsection--columns"
        count={2}
        collapseBreakpoint={600}
        space={[80, 16]}
      >
        <Columns.Column>
          <p className="why-apply--subtitle">Education</p>
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Id laoreet
            faucibus placerat volutpat aliquam. Orci ut ultricies ac mi. Est,
            amet, viverra interdum eu mattis lobortis felis.{" "}
          </p>
          <p className="why-apply--subtitle">Education</p>
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Id laoreet
            faucibus placerat volutpat aliquam. Orci ut ultricies ac mi. Est,
            amet, viverra interdum eu mattis lobortis felis.{" "}
          </p>
        </Columns.Column>
        <Columns.Column>
          <p className="why-apply--subtitle">Education</p>
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Id laoreet
            faucibus placerat volutpat aliquam. Orci ut ultricies ac mi. Est,
            amet, viverra interdum eu mattis lobortis felis.{" "}
          </p>
          <p className="why-apply--subtitle">Education</p>
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Id laoreet
            faucibus placerat volutpat aliquam. Orci ut ultricies ac mi. Est,
            amet, viverra interdum eu mattis lobortis felis.{" "}
          </p>
        </Columns.Column>
      </Columns>
      <div className="why-apply--quotes">
        <h3>Here’s what previous participants had to say about the program:</h3>
        <Columns
          className="subsection--columns"
          count={2}
          collapseBreakpoint={600}
          space={[80, 16]}
        >
          <Columns.Column>
            <p>
              Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Id
              laoreet faucibus placerat volutpat aliquam. Orci ut ultricies ac
              mi. Est, amet, viverra interdum eu mattis lobortis felis.
            </p>
          </Columns.Column>
          <Columns.Column>
            <p>
              Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Id
              laoreet faucibus placerat volutpat aliquam. Orci ut ultricies ac
              mi. Est, amet, viverra interdum eu mattis lobortis felis.
            </p>
          </Columns.Column>
        </Columns>
      </div>
      <div className="why-apply--quotes">
        <h3>
          Here’s where previous participants of Power Up and Build Up now work
          at:
        </h3>
        <Columns
          className="subsection--columns"
          count={4}
          collapseBreakpoint={0}
          space={[80, 16]}
        >
          <Columns.Column>
            <img
              src="https://placehold.co/200x200?text=PLACEHOLDER"
              alt=""
              width="100%"
            />
          </Columns.Column>
          <Columns.Column>
            <img
              src="https://placehold.co/200x200?text=PLACEHOLDER"
              alt=""
              width="100%"
            />
          </Columns.Column>
          <Columns.Column>
            <img
              src="https://placehold.co/200x200?text=PLACEHOLDER"
              alt=""
              width="100%"
            />
          </Columns.Column>
          <Columns.Column>
            <img
              src="https://placehold.co/200x200?text=PLACEHOLDER"
              alt=""
              width="100%"
            />
          </Columns.Column>
        </Columns>
      </div>
    </div>
  );
};

export default WhyApply;
