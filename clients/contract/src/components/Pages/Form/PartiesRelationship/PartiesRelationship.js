import React from "react";
import updateAction from "../../../../updateAction";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { TextField } from "@material-ui/core";
import Navigation from "../../../Navigation/Navigation";
import Tooltip from "../../../UI/Tooltip/Tooltip";

const relationshipTip = (
  <span style={{ color: "white", fontSize: "18px"}}>
    <b>How does relationship type affect my contract?</b> <br />
    Specifying working relationship type between parties in the NDA helps to establish the purpose of the Agreement.
  </span>
);


const PartiesRelationship = (props) => {
  const { push } = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: state.formDetails,
  });

  const onNextStep = (data) => {
    action(data);
    push("/contract/confidentiality");
    console.log(data);
  };

  const onBackStep = (e) => {
    e.preventDefault();
    push("/contract/recieving");
  };
  return (
    <>
      <Navigation />
      <form onSubmit={handleSubmit(onNextStep)}>
        <div className="form-container">
          {/*********  Parties Relationship *********/}
          <div style={{ marginBottom: "40px" }}>
            <h2 className="form-question">
              What is the Disclosing Party's relationship to the Receiving
              Party?{" "}
              <Tooltip placement="right" tips={relationshipTip} /> 
            </h2>
            <Controller
              as={
                <TextField
                  label="Ex. Employer"
                  style={{ width: "40%", marginTop: "10px" }}
                  bordered={false}
                />
              }
              control={control}
              ref={register({ required: true })}
              name="relationship"
              // rules={{ required: true }}
            />
            {/* {errors.relationship && (
              <p className="required">This is required.</p>
            )} */}
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

export default PartiesRelationship;
