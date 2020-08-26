import React from "react";
import updateAction from "../../../../updateAction";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import Tooltip from "../../../UI/Tooltip/Tooltip";
import { TextField, Checkbox, FormControlLabel } from "@material-ui/core";
import Navigation from "../../../Navigation/Navigation";

const confidentialTip = (
  <span style={{ color: "white", fontSize: "18px" }}>
    <b>How does relationship type affect my contract? </b> <br />
    Specifying working relationship type between parties in the NDA helps to
    establish the purpose of the Agreement.
  </span>
);

const Confidentiality = (props) => {
  const { push } = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: state.formDetails,
  });

  const onNextStep = (data) => {
    action(data);
    push("/contract/otherInformation");
    console.log(data);
  };

  const onBackStep = (e) => {
    e.preventDefault();
    push("/contract/partiesRelationship");
  };

  return (
    <>
      <Navigation />
      <form onSubmit={handleSubmit(onNextStep)}>
        <div className="form-container">
          {/*********  1. All? *********/}
          <div style={{ marginBottom: "40px" }}>
            <h1 className="form-question">
              What will be confidential?
              <Tooltip placement="right" tips={confidentialTip} />
            </h1>
            {errors.confidentialityAll && (
              <p className="required">This is required.</p>
            )}
            <div style={{ marginTop: "20px" }}>
              <input
                type="radio"
                name="confidentialityAll"
                value="true"
                ref={register({ required: "This is required." })}
                defaultChecked={state.formDetails.formType === "Everything"}
              />
              <label
                style={{ color: "grey", marginLeft: "10px" }}
                class="radio"
              >
                Everything
              </label>
            </div>
            <div style={{ marginBottom: "40px" }}>
              <input
                type="radio"
                name="confidentialityAll"
                value="false"
                ref={register({ required: true })}
                defaultChecked={
                  state.formDetails.formType ===
                  'Only documents labeled as "confidential"'
                }
              />
              <label style={{ color: "grey", marginLeft: "10px" }}>
                {" "}
                Only documents labeled as "confidential"
              </label>
            </div>
          </div>

          {/*********  2. Check *********/}
          <div style={{ marginBottom: "10px" }}>
            <h2 className="form-question">
              Are there any confidentiality exceptions that should be included
              in the contract?
            </h2>

            <FormControlLabel
              control={
                <Controller
                  name="confidentiality_1"
                  control={control}
                  render={(props) => (
                    <Checkbox
                      style={{
                        color: "#e07c00",
                      }}
                      onChange={(e) => props.onChange(e.target.checked)}
                      checked={props.value}
                    />
                  )}
                />
              }
              label="Public Known at the time of disclosure or subsequently becomes
                  publicly known through no fault of Recieving Party"
            />

            <FormControlLabel
              control={
                <Controller
                  name="confidentiality_2"
                  control={control}
                  render={(props) => (
                    <Checkbox
                      style={{
                        color: "#e07c00",
                      }}
                      onChange={(e) => props.onChange(e.target.checked)}
                      checked={props.value}
                    />
                  )}
                />
              }
              label="Discovered, created by, or rightfully in the possession of the
              Receiving Party before disclosure by Disclosing Party and prior to
              signing this Agreement"
            />

            <FormControlLabel
              control={
                <Controller
                name="confidentiality_3"
                control={control}
                render={(props) => (
                  <Checkbox
                    style={{
                      color: "#e07c00",
                    }}
                    onChange={(e) => props.onChange(e.target.checked)}
                    checked={props.value}
                  />
                )}
              />
              }
              label="Learned by the Receiving Party through legitimate means other than
              from the Disclosing Party or Disclosing Party's representatives"
            />

            <FormControlLabel
              control={
                <Controller
                name="confidentiality_4"
                control={control}
                render={(props) => (
                  <Checkbox
                    style={{
                      color: "#e07c00",
                    }}
                    onChange={(e) => props.onChange(e.target.checked)}
                    checked={props.value}
                  />
                )}
              />
              }
              label="Information independently developed without the use of any of the
              provided Confidential Information"
            />

            <FormControlLabel
              control={
                <Controller
                name="confidentiality_5"
                control={control}
                render={(props) => (
                  <Checkbox
                    style={{
                      color: "#e07c00",
                    }}
                    onChange={(e) => props.onChange(e.target.checked)}
                    checked={props.value}
                  />
                )}
              />
              }
              label="Is disclosed by Receiving Party with Disclosing Party's prior
              written approval"
            />

            <FormControlLabel
              control={
                <Controller
                name="confidentiality_6"
                control={control}
                render={(props) => (
                  <Checkbox
                    style={{
                      color: "#e07c00",
                    }}
                    onChange={(e) => props.onChange(e.target.checked)}
                    checked={props.value}
                  />
                )}
              />
              }
              label=" Other exceptions"
            />
            <Controller
              as={
                <TextField
                  label="E.g. widely used programming practices or algorithms."
                  style={{ marginLeft: "30px", width: "90%", marginTop: "0" }}
                  inputRef={register}
                  bordered={false}
                />
              }
              control={control}
              ref={register({ required: false })}
              name="confidentiality_other"
            />

            {/* <Checkbox
              control={control}
              name="confidentiality_other"
              style={{
                color: "black",
                fontSize: "15px",
                width: "90%",
                marginTop: "10px",
              }}
            >
              Other exceptions
              <Controller
                as={
                  <TextField
                    label="E.g. widely used programming practices or algorithms."
                    style={{ width: "80%", marginTop: "10px" }}
                    inputRef={register}
                    bordered={false}
                  />
                }
                control={control}
                ref={register({ required: false })}
                name="confidentiality_other"
              />
            </Checkbox> */}
          </div>

          {/*********  Steps  *********/}
          <div style={{ marginTop: "10px" }}>
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

export default Confidentiality;
