import "./styles.scss";
import Columns from "../../libraryComponents/Columns";
import React from "react";

const Overview = () => {
  return (
    <div className="subsection overview">
      <h2>Overview</h2>
      <Columns
        className="subsection--columns"
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
