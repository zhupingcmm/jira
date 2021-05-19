import React from "react";

export const Demo = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.target;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
  };

  return (
    <div>
      <button onClick={handleClick}> click</button>
      <input type="text" value={"1"} onChange={handleChange} />
    </div>
  );
};
