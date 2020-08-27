import React from "react";
import updateAction from "../../../../updateAction";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { TextField } from "@material-ui/core";
import Navigation from "../../../Navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../UI/Title/Title";

const DownloadTo = (props) => {
  const { push } = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, control, errors } = useForm({
    defaultValues: state.formDetails,
  });

  const onNextStep = (data) => {
    action(data);
    push("/pdf");
    console.log(data);
  };

  const onBackStep = (e) => {
    e.preventDefault();
    push("/timePeriod");
  };

  return (
    <Container>
      <Row>
        <Col xs={3}><Navigation /></Col>

      <Col>
      <form onSubmit={handleSubmit(onNextStep)}>
        <Title />
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
                  InputLabelProps={{style: {fontSize: 13}}} // font size of input label
                  InputProps={{style: {fontSize: 14}}} 
                  size='small'
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
                InputLabelProps={{style: {fontSize: 13}}} // font size of input label
                InputProps={{style: {fontSize: 14}}} 
                size='small'
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
      </Col>
      </Row>
    </Container>
  );
};

export default DownloadTo;
