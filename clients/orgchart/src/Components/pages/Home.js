import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import ReactGA from "react-ga";

import { loadUser } from "../../actions/userActions";
import Topbar from "../layout/Topbar";
import ControlPanel from "../controls/ControlPanel";
import OrgChart from "../charts/OrgChart";
import Checklist from "../tooltips/Checklist";
import Guide from "../tooltips/Guide";

const Home = ({ user, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    ReactGA.initialize("UA-175053486-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="app-home">
      <Topbar user={user} />
      <ControlPanel />
      <Container fluid>
        <OrgChart />
        <Checklist />
        <Guide />
      </Container>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { loadUser })(Home);
