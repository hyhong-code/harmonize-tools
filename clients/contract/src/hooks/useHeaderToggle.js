import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useHeaderToggle = () => {
  const location = useLocation();
  const [isMainPageHeader, setMainPageNavbar] = useState(true);

  useEffect(() => {
    // When user is on / route, display main page navbar
    if (location.pathname === "/") {
      setMainPageNavbar(true);
    } else {
      setMainPageNavbar(false);
    }
  }, [location.pathname]);
  return isMainPageHeader;
};

export default useHeaderToggle;
