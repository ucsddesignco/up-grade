import "./styles.scss";
import Columns from "../../libraryComponents/Columns";
import React from "react";
const WhatIsUpgrade = () => {
  return (
    <div className="subsection">
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
