import React from "react";

export const FullPageError = ({ error }: { error: Error | null }) => {
  return (
    <div className="full_page">
      <span style={{ color: "red" }}>{error?.message}</span>
    </div>
  );
};
