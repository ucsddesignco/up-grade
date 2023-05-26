import "./styles.scss";
import Columns from "../../libraryComponents/Columns";
import React from "react";

const Overview = () => {
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
              <div className="overview--bulet-wrapper">
                <img
                  className="central-themes--grid-icon"
                  src="https://placehold.co/150x150?text=PLACEHOLDER"
                  alt=""
                  width="100%"
                />
              </div>
              July 1st - Sept 9th
            </li>
            <li>
              <div className="overview--bulet-wrapper">
                <img
                  className="central-themes--grid-icon"
                  src="https://placehold.co/150x150?text=PLACEHOLDER"
                  alt=""
                  width="100%"
                />
              </div>
              Network with industry professionals
            </li>
            <li>
              <div className="overview--bulet-wrapper">
                <img
                  className="central-themes--grid-icon"
                  src="https://placehold.co/150x150?text=PLACEHOLDER"
                  alt=""
                  width="100%"
                />
              </div>
              Work alongside nonprofits
            </li>
            <li>
              <div className="overview--bulet-wrapper">
                <img
                  className="central-themes--grid-icon"
                  src="https://placehold.co/150x150?text=PLACEHOLDER"
                  alt=""
                  width="100%"
                />
              </div>
              Mentor-led workshops
            </li>
            <li>
              <div className="overview--bulet-wrapper">
                <img
                  className="central-themes--grid-icon"
                  src="https://placehold.co/150x150?text=PLACEHOLDER"
                  alt=""
                  width="100%"
                />
              </div>
              Weekly team meetngs
            </li>
          </ul>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default Overview;
