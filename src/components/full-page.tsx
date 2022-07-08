import React from "react";
import { Spin } from "antd";

export const FullPageLoading = () => {
  return (
    <div className="full_page">
      <Spin size="large" />
    </div>
  );
};
