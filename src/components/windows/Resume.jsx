import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";
const Resume = ({ windowname, setwindowState }) => {
  return (
    <MacWindow windowname={windowname} setwindowState={setwindowState}>
      <div className="resume-window">
        <embed src="./resume.pdf" frameBorder="0"></embed>
      </div>
    </MacWindow>
  );
};

export default Resume;
