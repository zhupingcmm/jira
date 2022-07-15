import React from "react";

export const Dom = () => {
  return (
    <div
      onClick={() => {
        console.log("a");
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          console.log("b");
        }}
      >
        <div
          onClick={() => {
            console.log("c");
          }}
        >
          Hello
        </div>
      </div>
    </div>
  );
};
