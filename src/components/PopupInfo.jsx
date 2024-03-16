import React from "react";

const popupContent = {
  1: <h1>1</h1>,
  2: <h1>2</h1>,
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

const PopupInfo = ({ currentStage }) => {
  return <div>{popupContent[currentStage]}</div>;
};

export default PopupInfo;
