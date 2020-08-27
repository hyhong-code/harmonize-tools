import React from "react";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const ToolTip = ({ placement, tips, visible }) => {
  return (
    <span style={{ marginLeft: "5px" }}>
      <Tooltip placement={placement} defaultVisible={visible} color={"#e07c00"} title={tips}>
        <InfoCircleOutlined style={{ color: "#E07C00" }} />
      </Tooltip>
    </span>
  );
};
export default ToolTip;
