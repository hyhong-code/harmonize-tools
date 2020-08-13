import {
  TOOLTIP_OPEN,
  TOOLTIP_CLOSE,
  TOOLTIP_STEP_SET,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  step: 1,
  open: false,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOOLTIP_OPEN:
      return { ...state, open: true };
    case TOOLTIP_CLOSE:
      return { ...state, open: false };
    case TOOLTIP_STEP_SET:
      return { ...state, step: payload };
    default:
      return state;
  }
};
