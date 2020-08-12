import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { ListGroup, Dropdown, DropdownButton } from "react-bootstrap";

import {
  createChart,
  loadCharts,
  startNewChart,
  updateChart,
  toCSV,
} from "../../actions/orgChartActions";

import ExportPopup from "../charts/ExportPopup";
import ConfirmNewChartPopup from "./ConfirmNewChartPopup";
import ToolTip from "../widgets/ToolTip";
import { openSideDrawer } from "../../actions/sideDrawerAction";
import SaveChartPopup from "./SaveChartPopup";
import useDownload from "../../hooks/useDownload";
import "./ActionsPanel.scss";

const EmployeeInfoPanel = ({
  sideDrawer,
  user,
  createChart,
  loadCharts,
  updateChart,
  setChartListShow,
  startNewChart,
  openSideDrawer,
  currentChartId,
  toCSV,
}) => {
  const { handleDownload } = useDownload();
  const [showWidget, setShowWidget] = useState(false);
  const [savePopupShow, setSavePopupShow] = useState(false);
  const [newChartPopupShow, setNewChartPopupShow] = useState(false);
  const [exportPopupShow, setExportPopupShow] = useState(false);

  const handleExport = async (format) => {
    if (format === "JPG") {
      handleDownload("JPG");
    } else if (format === "PDF") {
      handleDownload("PDF");
    } else if (format === "CSV") {
      toCSV();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowWidget(true);
    }, 500);
  }, []);

  const handleLoadCharts = async () => {
    await loadCharts();
    setChartListShow(true);
  };

  const handleSave = () => {
    if (currentChartId) {
      updateChart(currentChartId);
    } else {
      setSavePopupShow(true);
    }
  };

  return (
    <Fragment>
      <div
        className={`employee-card ${showWidget ? "employee-card-show" : ""}`}
      >
        {/* <div className="employee-card-close">
        <i className="fas fa-times"></i>
      </div> */}
        <div className="selected-employee">
          {user && <p className="name">Welcome, {user.name}</p>}
        </div>
        <ListGroup className="action-list">
          <ListGroup.Item
            className="action-item"
            as="button"
            action
            onClick={openSideDrawer}
          >
            <i class="mr-1 fas fa-file-csv"></i> Import data from CSV
          </ListGroup.Item>
          <ListGroup.Item
            className="action-item"
            as="button"
            action
            onClick={() => setNewChartPopupShow(true)}
          >
            <i class="mr-1 fas fa-wrench"></i> New chart
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => handleExport("CSV")}
            className="action-item"
            as="button"
            action
          >
            <i class="fas fa-file-csv"></i> Download as CSV
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => handleExport("PDF")}
            className="action-item"
            as="button"
            action
          >
            <i class="fas fa-file-pdf"></i> Download as PDF
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => handleExport("JPG")}
            className="action-item"
            as="button"
            action
          >
            <i class="fas fa-file-image"></i> Download as image
          </ListGroup.Item>

          {/* <ToolTip
            message="Export as JPG, PDF, or CSV"
            placement="left"
            delay={{ show: 200, hide: 50 }}
          >
            <ListGroup.Item
              className="action-item"
              as="button"
              action
              onClick={() => setExportPopupShow(true)}
            >
              <i class="fas fa-file-export"></i> Export
            </ListGroup.Item>
          </ToolTip> */}
          {user ? (
            <Fragment>
              <ListGroup.Item
                onClick={handleLoadCharts}
                className="action-item"
                as="button"
                action
              >
                <i class="mr-1 far fa-window-maximize"></i> Load saved charts
              </ListGroup.Item>

              <ListGroup.Item
                onClick={handleSave}
                className="action-item"
                as="button"
                action
              >
                <i class="mr-1 fas fa-cloud-upload-alt"></i> Save your chart
              </ListGroup.Item>
            </Fragment>
          ) : (
            <Fragment>
              <ToolTip
                message="Sign in to load your saved charts"
                delay={{ show: 200, hide: 50 }}
                placement="left"
              >
                <ListGroup.Item
                  className="action-item disabled-item"
                  as="button"
                  action
                >
                  <i class="mr-1 far fa-window-maximize"></i> Load saved charts
                </ListGroup.Item>
              </ToolTip>

              <ToolTip
                message="Sign in to save your chart"
                delay={{ show: 200, hide: 50 }}
                placement="left"
              >
                <ListGroup.Item
                  className="action-item disabled-item"
                  as="button"
                  action
                >
                  <i class="mr-1 fas fa-cloud-upload-alt"></i> Save your chart
                </ListGroup.Item>
              </ToolTip>
            </Fragment>
          )}
        </ListGroup>
      </div>
      <SaveChartPopup
        show={savePopupShow}
        onHide={() => setSavePopupShow(false)}
        setSavePopupShow={setSavePopupShow}
        createChart={createChart}
      />
      <ConfirmNewChartPopup
        show={newChartPopupShow}
        onHide={() => setNewChartPopupShow(false)}
        setNewChartPopupShow={setNewChartPopupShow}
        startNewChart={startNewChart}
      />
      <ExportPopup
        show={exportPopupShow}
        onHide={() => setExportPopupShow(false)}
        setExportPopupShow={setExportPopupShow}
        toCSV={toCSV}
      />
    </Fragment>
  );
};

const mapStateToProps = ({ sideDrawer, user, chart: { currentChartId } }) => ({
  sideDrawer,
  user,
  currentChartId,
});

export default connect(mapStateToProps, {
  createChart,
  loadCharts,
  startNewChart,
  openSideDrawer,
  updateChart,
  toCSV,
})(EmployeeInfoPanel);