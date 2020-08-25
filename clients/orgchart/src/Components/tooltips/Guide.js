import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setToolTipSteps, closeToolTips } from "../../actions/tooltipActions";
import "./Guide.scss";

const Guide = () => {
  const tooltip = useSelector(({ tooltip }) => tooltip);
  const dispatch = useDispatch();

  return (
    <div className={`tour-guide ${tooltip.open ? "show" : ""}`}>
      {tooltip.step === 1 && (
        <div className="content">
          <h4>Import your data</h4>
          <p>
            If you have existing employee data, you can import it here using our
            .CSV template.
          </p>
        </div>
      )}
      {tooltip.step === 2 && (
        <div className="content">
          <h4>Create your chart from scratch</h4>
          <p>
            You can also create your chart from a blank slate. Use the (+)
            buttons on the sides of an employee's card to add new employees.
          </p>
        </div>
      )}
      {tooltip.step === 3 && (
        <div className="content">
          <h4>Edit your chart</h4>
          <p>
            You can edit employee info by clicking anywhere on an employee's
            card. You can delete an employee by clicking the 3 dots in the upper
            right hand corner of the card.
          </p>
        </div>
      )}
      {tooltip.step === 4 && (
        <div className="content">
          <h4>Download your chart</h4>
          <p>
            When you're satisfied with your chart, you can download it as a CSV
            file, a PDF, or a JPG image.
          </p>
        </div>
      )}
      {tooltip.step === 5 && (
        <div className="content">
          <h4>Save + Load your chart</h4>
          <p>
            If you'd like to return to your chart at a later date or create
            multiple charts, you can sign in to save and load your charts.
          </p>
          {/* <div className="start">
            <button
              className="step-one-continue"
              onClick={() => {
                dispatch(closeToolTips());
                dispatch(setToolTipSteps(1));
              }}
            >
              I'm Ready
            </button>
          </div> */}
        </div>
      )}
      <div className="actions">
        <div
          className={`icon ${tooltip.step === 1 ? "greyed-out" : ""}`}
          onClick={() => dispatch(setToolTipSteps(tooltip.step - 1))}
        >
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="text">{tooltip.step} of 5</div>
        <div
          className={`icon ${tooltip.step === 5 ? "greyed-out" : ""}`}
          onClick={() => dispatch(setToolTipSteps(tooltip.step + 1))}
        >
          <i className="fas fa-chevron-right"></i>
        </div>
        <button
          className="skip"
          onClick={() => {
            dispatch(closeToolTips());
            dispatch(setToolTipSteps(1));
          }}
        >
          {tooltip.step === 5 ? "Get Started" : "Skip the tour"}
        </button>
      </div>
    </div>
  );
};

export default Guide;
