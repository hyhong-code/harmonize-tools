import React from "react";
import updateAction from "../../../../updateAction";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import Tooltip from "../../../UI/Tooltip/Tooltip";
import { TextField } from "@material-ui/core";
import Navigation from "../../../Navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../UI/Title/Title";

const TimePeriod = (props) => {
  const { push } = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: state.formDetails,
  });

  const onNextStep = (data) => {
    action(data);
    push("/downloadTo");
    console.log(data);
  };

  const onBackStep = (e) => {
    e.preventDefault();
    push("/otherInformation");
  };

  return (
    <Container>
      <Row>
        <Col xs={3}><Navigation /></Col>

      <Col>
      <form onSubmit={handleSubmit(onNextStep)}>
        <Title />
        <div className="form-container" >

          {/*********  Time Period *********/}
          <div style={{ marginBottom: "40px" }}>
            <h1 className="form-question">
              Do you wish provisions of this agreement to
              <Tooltip placement="right" tips={timePeriodTip2} />
            </h1>
            {errors.timePeriod && <p className="required">This is required.</p>}
            
            {/*********    1. Survive its termination   *********/}
            <div style={{ marginTop: "40px"}}>
              <input
                type="radio"
                name="timePeriod"
                value="Survive its termination"
                ref={register({ required: true })}
              />
              <label
                style={{marginLeft: "10px", fontSize:'14px'}}
                className="radio"
              >Survive its termination
                <Tooltip placement="right" tips={timePeriodTip1} />
              </label>
            </div>

            {/*********    2. Termination Year   *********/}
            <div style={{ marginBottom: "30px", display: "inline-block" }}>
              <input
                type="radio"
                name="timePeriod"
                value="years"
                ref={register({ required: true })}
              />
              <label style={{ marginLeft: "10px" ,fontSize:'14px' }}>
                Remain in effect for number of years
              </label>
              <Controller
                as={
                  <TextField
                    label="Years"
                    style={{
                      marginTop:"0",
                      marginLeft: '20px',
                      width: "35%",
                    }}
                    InputLabelProps={{style: {fontSize: 13}}} // font size of input label
                    InputProps={{style: {fontSize: 14}}} 
                    size='small'
                    type="number"
                    bordered={false}
                    name="terminationYears"
                  />
                }
                control={control}
                name="terminationYears"
              />
            </div>
            {/*********    3. Termination Occurence   *********/}
            <div style={{ marginBottom: "40px" , display: "inline-block" }}>
              <input
                type="radio"
                name="timePeriod"
                value="occurance"
                ref={register({ required: true })}
              />
              <label style={{ marginLeft: "10px" ,fontSize:'14px' }}>
                Remain in effect until a specific occurance
              </label>
              <Controller
                  as={
                    <TextField
                      label="Ex. End of employement"
                      style={{ marginTop:"0", width: "70%", marginLeft: '20px' }}
                      bordered={false}
                      name="terminationOccurence"
                      InputLabelProps={{style: {fontSize: 13}}} // font size of input label
                      InputProps={{style: {fontSize: 14}}} 
                      size='small'
                    />
                  }
                  control={control}
                  name="terminationOccurence"
                />
            </div>
          </div>

          {/*********  Other exception for the time period *********/}
          {/* <div style={{ width: "90%", marginBottom: "40px" }}>
            <h1 className="form-question" style={{ color: "#868383" }}>
              Is there an exception for the time period of the contract?{" "}
            </h1>

            <Controller
              as={
                <TextField
                  label="Ex. Example"
                  style={{ width: "80%", marginTop: "10px" }}

                  bordered={false}
                />
              }
              control={control}
              name="terminationException"
            />
          </div> */}

          {/*********  Steps  *********/}
          <div style={{ width: "72%", marginTop: "15px" }}>
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
      </Col>
      </Row>
    </Container>
  );
};
export default TimePeriod;

const timePeriodTip2 = (
  <span style={{ color: "white", fontSize: "14px" }}>
    <b>What should the duration of my contract be?</b><br/> The usual time of protection for
    ordinary confidential information is 2 to 5 years which is what we suggest.
  </span>
);

const timePeriodTip1 = (
  <span style={{ color: "white", fontSize: "14px" }}>
    <b>What does "survive it's termination" mean?</b><br/> To survive the termination of the Agreement means that there is no end date to keep the information secret.
  </span>
);
