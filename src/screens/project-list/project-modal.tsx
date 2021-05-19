import React from "react";
import { Drawer } from "antd";
import { Button } from "antd/lib/radio";

export const ProjectModal = (props: {
  projectModelOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Drawer
      visible={props.projectModelOpen}
      width={"100%"}
      onClose={props.onClose}
    >
      <p>zp</p>
      <Button onClick={props.onClose}>提交</Button>
    </Drawer>
  );
};
