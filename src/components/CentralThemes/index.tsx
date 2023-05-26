import React from "react";
import Columns from "../../libraryComponents/Columns/Columns";
import "./styles.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const CentralThemes = () => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <div className="subsection">
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
        <img
          className="central-themes--grid-icon"
          src="https://placehold.co/150x150?text=PLACEHOLDER"
          alt=""
          width="100%"
        />
        <div className="central-themes--grid-item">
          <h3>Education</h3>
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Id laoreet
            faucibus placerat volutpat aliquam. Orci ut ultricies ac mi. Est,
            amet, viverra interdum eu mattis lobortis felis.
          </p>
        </div>
        <img
          className="central-themes--grid-icon"
          src="https://placehold.co/150x150?text=PLACEHOLDER"
          alt=""
          width="100%"
        />
        <div className="central-themes--grid-item">
          <h3>Education</h3>
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Id laoreet
            faucibus placerat volutpat aliquam. Orci ut ultricies ac mi. Est,
            amet, viverra interdum eu mattis lobortis felis.
          </p>
        </div>
        <img
          className="central-themes--grid-icon"
          src="https://placehold.co/150x150?text=PLACEHOLDER"
          alt=""
          width="100%"
        />
        <div className="central-themes--grid-item">
          <h3>Education</h3>
          <p>
            Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Id laoreet
            faucibus placerat volutpat aliquam. Orci ut ultricies ac mi. Est,
            amet, viverra interdum eu mattis lobortis felis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CentralThemes;
