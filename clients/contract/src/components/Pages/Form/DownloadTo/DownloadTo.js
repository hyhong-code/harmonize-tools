import React from "react";
import updateAction from "../../../../updateAction";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { TextField } from "@material-ui/core";
import Navigation from "../../../Navigation/Navigation";

const DownloadTo = (props) => {
  const { push } = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, control, errors } = useForm({
    defaultValues: state.formDetails,
  });

  const onNextStep = (data) => {
    action(data);
    push("/contract/pdf");
    console.log(data);
  };

  const onBackStep = (e) => {
    e.preventDefault();
    push("/contract/timePeriod");
  };

  return (
    <>
      <Navigation />
      <form onSubmit={handleSubmit(onNextStep)}>
        <div className="form-container">
          {/*********  Parties Relationship *********/}
          <div style={{ marginBottom: "40px" }}>
            <h2 className="form-question" style={{ marginBottom: "40px" }}>
              Please enter your information to download your contract.
            </h2>
            <h2 className="form-question">Company</h2>
            {errors.downloadCompnay && (
              <p className="required">This is required.</p>
            )}
            <Controller
              as={
                <TextField
                  label="Ex. HarmonizeHQ"
                  style={{ width: "80%" }}
                  bordered={false}
                />
              }
              control={control}
              rules={{ required: true }}
              name="downloadCompnay"
            />
          </div>

          <h2 className="form-question">Company Email Address</h2>
          {errors.downloadEmail && (
            <p className="required">This is required.</p>
          )}
          <Controller
            as={
              <TextField
                label="example@harmonizehq.com"
                style={{ width: "80%" }}
                bordered={false}
              />
            }
            control={control}
            rules={{ required: true }}
            name="downloadEmail"
          />

          {/*********  Steps  *********/}
          <div style={{ marginTop: "100px" }}>
            <div className="form-end"></div>
            <div style={{ marginTop: "15px" }}>
              <button className="Back-Button" onClick={onBackStep}>
                Back
              </button>
              <span className="btn">
                <button className="Button" type="submit">
                  Review
                </button>
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default DownloadTo;
