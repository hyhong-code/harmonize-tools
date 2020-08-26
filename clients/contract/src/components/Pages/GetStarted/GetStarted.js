import React from "react";
import "./GetStarted.css";
import { useHistory } from "react-router-dom";
import { useForm} from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../updateAction";

export default function GetStarted() {
  const { state, action } = useStateMachine(updateAction);
  const { register, handleSubmit } = useForm({
    defaultValues: state.formDetails,
  });

  const history = useHistory();

  const onNextStep = (data) => {
    action(data);
    history.push("/contract/general");
  };

  return (
    <>
          <form onSubmit={handleSubmit(onNextStep)}>
      <div>
        <div className="center"  style={{ marginTop: '180px' }}>
          <h1 className="question">I am a </h1>
          <span>
            <input name="iAm" ref={register({ required: true })} className="input" placeholder= "Human Resources Manager" type="text"></input>
          </span>
        </div>

        <div className="center">
          <h1 className="question">Looking to create a </h1>
          <span>
            <select className="input">
              <option selected value="Non-Disclosure Agreement">Non-Disclosure Agreement</option>
              <option disabled value="Option2">Medical Non-Disclosure Agreement(coming soon)</option>
            </select>
          </span>
        </div>
      </div>
      <div className="center">
        <button className="button" type="submit">
            Create
        </button>
      </div>
      </form>
    </>
  );
}
