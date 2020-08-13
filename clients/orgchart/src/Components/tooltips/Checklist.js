import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Checklist.scss";
import { setToolTipSteps } from "../../actions/tooltipActions";

const options = [
  { text: "1. Import data", step: 1 },
  { text: "2. Create from scratch", step: 2 },
  { text: "3. Edit your chart", step: 3 },
  { text: "4. Download your chart", step: 4 },
  { text: "5. Load + Save your charts", step: 5 },
];

const Checklist = () => {
  const tooltip = useSelector(({ tooltip }) => tooltip);
  const dispatch = useDispatch();
  console.log(tooltip.step);

  return (
    <div className="checklist">
      <div className="header">
        <h3>Getting Started</h3>
      </div>
      <div className="options-container">
        {options.map((option, idx) => (
          <div className="mb-1" key={idx}>
            <p
              onClick={() => dispatch(setToolTipSteps(option.step))}
              className={`option-text ${
                option.step === tooltip.step
                  ? "active"
                  : option.step < tooltip.step
                  ? "cross"
                  : ""
              }`}
            >
              {option.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checklist;
