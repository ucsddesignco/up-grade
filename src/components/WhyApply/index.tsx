import React from "react";
import Columns from "../../libraryComponents/Columns";
import "./styles.scss";

const WhyApply = () => {
  return (
    <div className="subsection why-apply">
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
