import React from "react";
import Navigation from "../../../Navigation/Navigation";
import "./Complete.css";
import { useForm } from "react-hook-form";
import updateAction from "../../../../updateAction";
import { useStateMachine } from "little-state-machine";

const Complete = (props) => {
  const { state } = useStateMachine(updateAction);
  const { reset } = useForm({
    defaultValues: state.formDetails,
  });

  return (
    <>
      <Navigation />
      <div className="complete-container">
        <div className="form-container">
          <div style={{ marginTop: "5rem", marginBottom: "10px" }}>
            <h1 className="form-question">Download Complete!</h1>
            <br />
            <h3 className="sub-headings" syle={{ fontSize: "13px" }}>
              To ensure your contract is legally binding, be sure to receive
              signatures from both parties!
            </h3>
          </div>
          <div style={{ marginTop: "2rem", marginBottom: "4rem" }}>
            <button
              type="reset"
              className="Button"
              style={{ marginLeft: "0", width: "240px" }}
              onClick={(e) => {
                reset();
                e.preventDefault();
                window.STATE_MACHINE_RESET();
                window.location.href = "/contract/landing";
              }}
            >
              Create another form
            </button>
          </div>
          <a
            className="external-link"
            href="https://www.harmonizehq.com"
            rel="noopener noreferrer"
            target="_blank"
            onClick={(e)=>{
              e.preventDefault();
              window.STATE_MACHINE_RESET();
            }}
          >
            Need a simple solution for all your HR management needs? Check out
            how HarmonizeHQ can help!
          </a>

          {/* Feeadback Form */}
          <div>
            <div style={{ marginTop: "5rem"}}>
              <h3 className="sub-headings">
                We are always trying to improve, help us make this tool better
                by sending us feedback!
              </h3>
            </div>
            <button
              className="Button"
              style={{ marginLeft: "0", width: "190px"}}
              onClick={(e) => {
                e.preventDefault();
                window.STATE_MACHINE_RESET();
                window.open("https://forms.gle/ZXhVBiYeyCuMKV8t5");
              }}
            >
              Send Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Complete;
