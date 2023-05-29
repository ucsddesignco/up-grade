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
        <svg
          className="animate1"
          viewBox="0 0 324 328"
          style={{
            position: "absolute",
            left: "-8%",
            top: "32%",
          }}
          width="clamp(80px, 20vw, 360px)"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M306.84 141.85L207.009 311.952C205.904 313.834 203.494 314.483 201.593 313.411L183.712 303.318L26.3841 214.52L25.5083 214.025L15.9912 208.654C14.055 207.561 13.3815 205.099 14.4919 203.173L122.143 16.4285C123.253 14.5036 125.718 13.8518 127.634 14.9771L142.143 23.4985L144.078 24.6351L170.182 39.9669L171.209 38.56C172.423 36.8952 174.703 36.4254 176.477 37.4746L262.687 88.4748C265.192 89.9564 265.251 93.5595 262.796 95.1226L268.957 98.8329L277.009 97.1957C277.939 97.0066 278.906 97.1544 279.737 97.6125L301.548 109.636C302.649 110.243 303.401 111.334 303.577 112.579L307.351 139.265C307.477 140.159 307.297 141.07 306.84 141.85Z"
            fill="#F2F4F1"
          />
          <path
            d="M268.957 98.8329L277.009 97.1957C277.939 97.0066 278.906 97.1544 279.737 97.6125L301.548 109.636C302.649 110.243 303.401 111.334 303.577 112.579L307.351 139.265C307.477 140.159 307.297 141.07 306.84 141.85L207.009 311.952C205.905 313.834 203.494 314.483 201.593 313.411L183.712 303.318M268.957 98.8329L262.796 95.1226M268.957 98.8329L233.211 157.531V157.531C232.617 158.508 231.349 158.827 230.363 158.249L109.973 87.6504C108.081 86.5411 107.435 84.1154 108.525 82.2123L142.143 23.4985M262.796 95.1226V95.1226C265.251 93.5595 265.192 89.9564 262.687 88.4748L176.477 37.4746C174.703 36.4254 172.423 36.8952 171.209 38.56L170.182 39.9669M262.796 95.1226L230.814 146.734C229.674 148.574 227.277 149.173 225.406 148.086L140.588 98.834C138.677 97.7243 138.028 95.275 139.139 93.3645L170.182 39.9669M170.182 39.9669L144.078 24.6351L142.143 23.4985M142.143 23.4985L127.634 14.9771C125.718 13.8518 123.253 14.5036 122.143 16.4285L14.4919 203.173C13.3815 205.099 14.055 207.561 15.9912 208.654L25.5083 214.025M25.5083 214.025L92.8444 103.08C93.98 101.209 96.4084 100.598 98.2941 101.709L245.697 188.544C246.678 189.122 247.017 190.378 246.461 191.372V191.372L183.712 303.318M25.5083 214.025L26.3841 214.52L183.712 303.318M91.9002 117.504L35.7271 209.595C34.5529 211.52 35.201 214.034 37.1594 215.152L176.77 294.822C178.707 295.927 181.173 295.235 182.253 293.283L234.026 199.646M91.9002 117.504L95.2091 112.079C96.3453 110.217 98.7646 109.608 100.647 110.712L235.149 189.556C237.021 190.653 237.677 193.043 236.627 194.942L234.026 199.646M91.9002 117.504L234.026 199.646M97.1024 141.888L204.587 202.695M88.1639 162.802L193.049 220.949M77.1634 181.272L180.456 240.077M66.0974 199.605L171.155 261.883M213.121 117.644L229.887 89.0893C231.01 87.1758 233.476 86.5425 235.383 87.6779L244.851 93.317C246.743 94.4441 247.368 96.889 246.249 98.786L229.489 127.197C228.373 129.09 225.938 129.727 224.037 128.625L214.563 123.13C212.645 122.017 211.998 119.557 213.121 117.644ZM208.585 294.421L207.127 296.881C206.061 298.682 203.787 299.356 201.911 298.427L200.593 297.774C198.506 296.741 197.739 294.15 198.929 292.147L200.462 289.565C201.607 287.637 204.113 287.027 206.016 288.213L207.259 288.987C209.105 290.137 209.694 292.55 208.585 294.421ZM127.762 29.265V29.265C128.048 27.5689 126.245 26.2956 124.742 27.1313V27.1313C123.324 27.9194 123.338 29.9629 124.766 30.7316V30.7316C126.004 31.3978 127.529 30.6509 127.762 29.265ZM32.1101 193.88L30.672 196.117C29.7654 197.526 27.9147 197.981 26.4579 197.152V197.152C24.897 196.264 24.3911 194.254 25.3458 192.733L26.7592 190.481C27.7073 188.97 29.715 188.539 31.2 189.527V189.527C32.6413 190.486 33.0465 192.424 32.1101 193.88Z"
            stroke="#1EC6DE"
            stroke-width="3"
          />
        </svg>
        <svg
          className="animate2"
          style={{
            position: "absolute",
            left: "30%",
            top: "40%",
          }}
          width="clamp(16px, 6vw, 64px)"
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
        <svg
          className="animate2"
          style={{
            position: "absolute",
            left: "35%",
            top: "50%",
          }}
          width="clamp(15px, 5vw, 48px)"
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
          <p className="why-apply--subtitle">
            UP-Grade your resume + portfolio
          </p>
          <p>
            Gain real-world experience through a fully developed project and
            stand out from other student designers with a personal story about
            your involvement in the project process!
          </p>
          <p className="why-apply--subtitle">
            Network with peers and industry professionals
          </p>
          <p>
            Collaborate with leaders in local nonprofit organizations, connect
            with tech industry professionals, and get to know project mentors!
          </p>
        </Columns.Column>
        <Columns.Column>
          <p className="why-apply--subtitle">
            Put classroom knowledge to use in a real-world setting
          </p>
          <p>
            Bring your knowledge of technical and soft skills (and all things
            design process related) to active and practical use, further
            refining your skills along the way!
          </p>
          <p className="why-apply--subtitle">
            Create meaningful solutions for social impact nonprofits
          </p>
          <p>
            Bring your visions to reality, design with intention, problem-solve
            and overcome obstacles, and work to create lasting change for a
            larger community!
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
              “I was able to learn a lot through this project and was challenged
              to broaden my perspective and opinions. I realized how important
              it is to get accurate data and not to jump into my own
              assumptions. Getting help from mentors and professionals with real
              outside of class experience was also very insightful and
              beneficial in designing this project.”
            </p>
            <p className="why-apply--quotes-author">- Past Build Upper</p>
          </Columns.Column>
          <Columns.Column>
            <p>
              “Learning about marketing and social media branding was a plus for
              sure, I feel like I needed an intro to many of the topics covered
              and there was no better way to do so than taking a part of such a
              versatile and dedicated team that ranged in skills, talents, and
              industry knowledge.”
            </p>
            <p className="why-apply--quotes-author">- Past Power Upper</p>
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
