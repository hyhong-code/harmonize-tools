import React from "react";
import "./General.css";
import { useHistory } from "react-router-dom";
import Navigation from "../../../Navigation/Navigation";
import Tooltip from "../../../UI/Tooltip/Tooltip";
import { useForm, Controller } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../../updateAction";
import { TextField } from "@material-ui/core";
import { Select } from "antd";
import "antd/dist/antd.css";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../UI/Title/Title";
const { Option } = Select;

  const tip1 = (
    <span style={{ color: "white", fontSize: '14px'}}>
      <b>How is the form created?</b> <br/>Your response to each question determines
      what goes into your customized contract. Make sure to fill out all fields
      so we can help you put everything together!<br /> <br />You can find out the
      additional information throughout by hovering over <b>"i"</b> icon.{" "}
      <Tooltip /> 
    </span>
  ); 

const tip2 = (
  <span style={{ color: "white", fontSize: "14px" }}>
    <b>Which jurisdiction am I under?</b> <br />
    Parties usually prefer that the jurisdiction be based on their location or the location of their headquarters. It can save the time and the money to set in the contract as opposed to letting the court decide the jurisdiction.
  </span>
);

export default () => {
  const { push } = useHistory();
  const { state, action } = useStateMachine(updateAction);
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: state.formDetails,
  });

  const onBackStep = (e) => {
    e.preventDefault();
    push("/getStarted");
  };

  const onNextStep = (data) => {
    action(data);
    push("/disclosing");
  };

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Navigation />
        </Col>
        <Col>
          <form onSubmit={handleSubmit(onNextStep)}>
            <Title />
            <div className="form-container">
              {/*     1. NDA     */}
              <div style={{ marginBottom: "30px" }}>
                <h1 className="form-question">
                  This Non-Disclosure Agreement does not cover healthcare
                  personnel, employees and professsionals who have access to
                  medical information.
                   <Tooltip placement="right" visible={true} tips={tip1}/>
                </h1>
                {errors.formType && (
                  <p className="required">This is required.</p>
                )}

                {/* <div style={{ marginTop: "20px" }}>
              <input
                type="radio"
                name="formType"
                value="Non-Discolsure Agreement"
                ref={register({ required: true })}
              />
              <label
                style={{ color: "grey", marginLeft: "10px" }}
                className="radio"
              >
                No
              </label>
            </div>

            
            <div style={{ marginBottom: "40px" }}>
              <input
                disabled
                type="radio"
                name="formType"
                value="Medical Non-Discolsure Agreement"
                ref={register({ required: true })}
              />
              <label
                style={{ color: "grey", marginLeft: "10px" }}
                className="radio"
              >
                {" "}
                Yes
              </label>
            </div> */}
              </div>
              {/*     2. Contract Date     */}

              <div style={{ marginBottom: "40px" }}>
                <h2 className="form-question">Contract date</h2>
                {errors.contractDate && (
                  <p className="required">This is required.</p>
                )}
                <Controller
                  rules={{ required: true }}
                  // defaultValue="2020-07-10"
                  control={control}
                  name="contractDate"
                  as={
                    <TextField
                      label="Select Date"
                      style={{
                        width: "40%",
                        marginTop: "5px",
                      }}
                      InputProps={{style: {fontSize: 14}}} 
                      name="contractDate"
                      id="date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputRef={register}
                      bordered="false"
                    />
                    
                  }
                />
              </div>

              {/*     3. State      */}

              <div style={{ marginBottom: "40px" }}>
                <h1 className="form-question">
                  Under which state jurisdiction should the contract be created?
                  <Tooltip placement="right" tips={tip2} />
                </h1>
                {errors.state && <p className="required">This is required.</p>}
                <Controller
                  name="state"
                  control={control}
                  defaultValue="Select State"
                  rules={{ required: true }}
                  bordered={false}
                  as={
                    <Select rules={{ required: true }} className="SelectState">
                      <Option value="AL">Alabama</Option>
                      <Option value="AK">Alaska</Option>
                      <Option value="AZ">Arizona</Option>
                      <Option value="AR">Arkansas</Option>
                      <Option value="CA">California</Option>
                      <Option value="CO">Colorado</Option>
                      <Option value="CT">Connecticut</Option>
                      <Option value="DE">Delaware</Option>
                      <Option value="DC">District Of Columbia</Option>
                      <Option value="FL">Florida</Option>
                      <Option value="GA">Georgia</Option>
                      <Option value="HI">Hawaii</Option>
                      <Option value="ID">Idaho</Option>
                      <Option value="IL">Illinois</Option>
                      <Option value="IN">Indiana</Option>
                      <Option value="IA">Iowa</Option>
                      <Option value="KS">Kansas</Option>
                      <Option value="KY">Kentucky</Option>
                      <Option value="LA">Louisiana</Option>
                      <Option value="ME">Maine</Option>
                      <Option value="MD">Maryland</Option>
                      <Option value="MA">Massachusetts</Option>
                      <Option value="MI">Michigan</Option>
                      <Option value="MN">Minnesota</Option>
                      <Option value="MS">Mississippi</Option>
                      <Option value="MO">Missouri</Option>
                      <Option value="MT">Montana</Option>
                      <Option value="NE">Nebraska</Option>
                      <Option value="NV">Nevada</Option>
                      <Option value="NH">New Hampshire</Option>
                      <Option value="NJ">New Jersey</Option>
                      <Option value="NM">New Mexico</Option>
                      <Option value="NY">New York</Option>
                      <Option value="NC">North Carolina</Option>
                      <Option value="ND">North Dakota</Option>
                      <Option value="OH">Ohio</Option>
                      <Option value="OK">Oklahoma</Option>
                      <Option value="OR">Oregon</Option>
                      <Option value="PA">Pennsylvania</Option>
                      <Option value="RI">Rhode Island</Option>
                      <Option value="SC">South Carolina</Option>
                      <Option value="SD">South Dakota</Option>
                      <Option value="TN">Tennessee</Option>
                      <Option value="TX">Texas</Option>
                      <Option value="UT">Utah</Option>
                      <Option value="VT">Vermont</Option>
                      <Option value="VA">Virginia</Option>
                      <Option value="WA">Washington</Option>
                      <Option value="WV">West Virginia</Option>
                      <Option value="WI">Wisconsin</Option>
                      <Option value="WY">Wyoming</Option>
                    </Select>
                  }
                />
              </div>

              {/*********  Steps  *********/}
              <div>
                <div className="form-end"></div>
                <div style={{ marginTop: "10px" }}>
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
