import React from "react";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";

import LandingPage from "./components/Pages/LandingPage/LandingPage";
import GetStarted from "./components/Pages/GetStarted/GetStarted";
import General from "./components/Pages/Form/General/General";
import Disclosing from "./components/Pages/Form/Disclosing/Disclosing";
import Recieving from "./components/Pages/Form/Recieving/Recieving";
import PartiesRelationship from "./components/Pages/Form/PartiesRelationship/PartiesRelationship";
import Confidentiality from "./components/Pages/Form/Confidentiality/Confidentiality";
import OtherInformation from "./components/Pages/Form/OtherInformation/OtherInformation";
import TimePeriod from "./components/Pages/Form/TimePeriod/TimePeriod";
import DownloadTO from "./components/Pages/Form/DownloadTo/DownloadTo";
import PDF from "./components/Pages/Form/PDF/PDF";
import Complete from "./components/Pages/Form/Complete/Complete";

import MainPage from "./components/Pages/MainPage/MainPage";


createStore({
  formDetails: {
    // Get Started
    iAm: "",
    lookingToCreate: "",

    // General
    formType: "",
    contractDate: "",
    state: "",

    // Disclosing Party
    discloserName: "",
    discloserBusiness: "",
    discloserEntity: "",
    discloserAddressStreet: "",
    discloserAddressStreet2: "",
    discloserAddressCity: "",
    discloserAddressState: "",
    discloserAddressZipcode: "",

    // Recipient
    recipientName: "",
    recipientEntity: "",
    recipientAddressStreet: "",
    recipientAddressStreet2: "",
    recipientAddressCity: "",
    recipientAddressState: "",
    recipientAddressZipcode: "",
    // recipientPhone: "",

    relationship: "",

    // Confidentiality
    confidentialityAll: false,
    confidentiality_1: "",
    confidentiality_2: "",
    confidentiality_3: "",
    confidentiality_4: "",
    confidentiality_5: "",
    confidentiality_6: "",
    confidentiality_other: "",

    otherInformation: "",

    // Term
    timePeriod: "",
    terminationYears: "",
    terminationOccurence: "",
    terminationException: "",

    // DownloadTo
    downloadCompnay: "",
    downloadEmail: "",

    pdf: "",
  },
});

function App() {
  return (
    <StateMachineProvider>
      <DevTool />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/contract" component={MainPage} />
          <Route exact path="/contract/app" component={LandingPage} />
          <Route exact path="/contract/getStarted" component={GetStarted} />

          <Route exact path="/contract/general" component={General} />
          <Route exact path="/contract/disclosing" component={Disclosing} />
          <Route exact path="/contract/recieving" component={Recieving} />
          <Route exact path="/contract/partiesRelationship" component={PartiesRelationship} />
          <Route exact path="/contract/confidentiality" component={Confidentiality} />
          <Route exact path="/contract/otherInformation" component={OtherInformation} />
          <Route exact path="/contract/timePeriod" component={TimePeriod} />

          <Route exact path="/contract/downloadTo" component={DownloadTO} />
          <Route exact path="/contract/pdf" component={PDF} />
          <Route exact path="/contract/complete" component={Complete} />

          <Redirect from="/*" to="/contract" />
        </Switch>
        <Footer />
      </Router>
    </StateMachineProvider>
  );
}

export default App;
