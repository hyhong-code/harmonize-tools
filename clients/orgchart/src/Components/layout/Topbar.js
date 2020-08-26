import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import {
  openSideDrawer,
  closeSideDrawer,
} from "../../actions/sideDrawerAction";
import ConfirmNewChartPopup from "../charts/ConfirmNewChartPopup";
import { logout, login } from "../../actions/userActions";
import { startNewChart } from "../../actions/orgChartActions";
import "./Topbar.scss";

const Topbar = ({
  sideDrawer,
  closeSideDrawer,
  openSideDrawer,
  startNewChart,
  user,
  logout,
  history,
  login,
}) => {
  const [newChartPopupShow, setNewChartPopupShow] = useState(false);

  return (
    <Fragment>
      <div className={`topbar ${sideDrawer ? "sidedrawer-show" : ""}`}>
        <Link className="home-link" to="/orgchart">
          HOME
        </Link>
        <div className="">
          <h1 className="heading">ORGANIZATIONAL CHART TOOL</h1>
        </div>

        <div className="d-flex">
          <div className="topbar-actions">
            {user ? (
              <button onClick={logout} className="mr-2 signin-btn">
                <i class="fas fa-sign-out-alt"></i> Sign Out
              </button>
            ) : (
              <Fragment>
                <a href="/login" className="mr-2 signup-btn">
                  Sign In
                </a>
                <a href="/signup" className="signin-btn">
                  Sign Up
                </a>
              </Fragment>
            )}
          </div>
          {user && (
            <div className="avatar">
              <img src={user.photo} alt="user photo" />
            </div>
          )}
        </div>
      </div>
      <ConfirmNewChartPopup
        show={newChartPopupShow}
        onHide={() => setNewChartPopupShow(false)}
        setNewChartPopupShow={setNewChartPopupShow}
        startNewChart={startNewChart}
      />
    </Fragment>
  );
};

const mapStateToProps = ({ sideDrawer }) => ({ sideDrawer });

export default connect(mapStateToProps, {
  openSideDrawer,
  closeSideDrawer,
  logout,
  startNewChart,
  login,
})(withRouter(Topbar));

{
  /* <a
              href={
                process.env.NODE_ENV === "production"
                  ? "/api/v1/auth/google"
                  : "http://localhost:5000/api/v1/auth/google"
              }
            >
              <i class="fab fa-google"></i> sign in with google
            </a> */
}
