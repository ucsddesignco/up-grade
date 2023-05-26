import React from "react";
import Columns from "../../libraryComponents/Columns/Columns";
import "./styles.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const CentralThemes = () => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <div className="subsection">
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
