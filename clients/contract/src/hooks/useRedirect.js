import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const REDIRECT_MAP = {
  "/landing": "/contract/landing",
  "/getStarted": "/contract/getStarted",
  "/general": "/contract/general",
  "/disclosing": "/contract/disclosing",
  "/recieving": "/contract/recieving",
  "/partiesRelationship": "/contract/partiesRelationship",
  "/confidentiality": "/contract/confidentiality",
  "/otherInformation": "/contract/otherInformation",
  "/timePeriod": "/contract/timePeriod",
  "/downloadTo": "/contract/downloadTo",
  "/pdf": "/contract/pdf",
  "/complete": "/contract/complete",
};

const useRedirect = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(REDIRECT_MAP).includes(location.pathname)) {
      history.replace(REDIRECT_MAP[location.pathname]);
    }
  }, [location.pathname]);
  return null;
};

export default useRedirect;
