import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { openToolTips } from "../actions/tooltipActions";

const useSetGuide = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let timer;
    if (!localStorage.getItem("isGuided")) {
      timer = setTimeout(() => {
        dispatch(openToolTips());
      }, 500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return null;
};

export default useSetGuide;
