import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";
const MacWindow = ({
  children,
  width = "40vw",
  height = "40vh",
  windowname,
  setwindowState,
}) => {
  return (
    <Rnd
      default={{
        width,
        height,
        x: 300,
        y: 200,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              onClick={() =>
                setwindowState((state) => ({ ...state, [windowname]: false }))
              }
              className="dot red"
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>umeshtare465 -zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
