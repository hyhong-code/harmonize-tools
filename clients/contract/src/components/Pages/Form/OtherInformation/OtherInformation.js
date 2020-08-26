import React from "react";
import updateAction from "../../../../updateAction";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import Tooltip from "../../../UI/Tooltip/Tooltip";
import { TextField } from "@material-ui/core";
import Navigation from "../../../Navigation/Navigation";

const OtherInformation = (props) => {
  const { push } = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { register, handleSubmit, control } = useForm({
    defaultValues: state.formDetails,
  });

  const onNextStep = (data) => {
    action(data);
    push("/contract/timePeriod");
    console.log(data);
  };

  const onBackStep = (e) => {
    e.preventDefault();
    push("/contract/confidentiality");
  };

  return (
    <>
      <Navigation />
      <form onSubmit={handleSubmit(onNextStep)}>
        <div className="form-container">
          
          {/*********  Other Information *********/}
          <div style={{ marginBottom: "40px" }}>
            <h1 className="form-question" style={{ color: "#868383"}}>
              Is there any other information that should be included in the
              contract?
              <Tooltip placement="right" tips={otherInfo} />
            </h1>

            <Controller
              as={
                <TextField
                  label="Ex. Example"
                  style={{ width: "80%", marginTop: "10px" }}
                  inputRef={register}
                  bordered={false}
                />
              }
              control={control}
              ref={register({ required: true })}
              name="otherInformation"
            />
          </div>

          {/*********  Steps  *********/}
          <div style={{ marginTop: "300px" }}>
            <div className="form-end"></div>
            <div style={{ marginTop: "15px" }}>
              <button className="Back-Button" onClick={onBackStep}>
                Back
              </button>
              <span className="btn">
                <button className="Button" type="submit">
                  Next
                </button>
              </span>
            </div>
          </div>


        </div>
      </form>
    </>
  );
};

const otherInfo = (
  <span style={{ color: "white", fontSize: "18px" }}>
    <b>What can be included in "other information"?</b> <br/>
    You can include specific kinds of information to which you would like to extend a protection.
  </span>
);
export default OtherInformation;
