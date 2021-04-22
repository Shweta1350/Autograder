import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Button, notification, Tooltip } from "antd";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import  BellOutlined  from '@ant-design/icons';

const openNotification = () => {
  notification.open({
    message: "DAA Assignment",
    description:
      "Merge Sort ",
    onClick: () => {
      console.log("Notification Clicked!");
    }
  });
};

ReactDOM.render(
  <Tooltip title="notifications">
    <Button
      shape="circle"
      icon={<SearchOutlined fill="#4E89FF" />}
      onClick={openNotification}
    />

  </Tooltip>,

  document.getElementById("container")
);

