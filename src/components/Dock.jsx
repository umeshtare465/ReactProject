import React from "react";
import "./doc.scss";
const Dock = ({ setwindowState }) => {
  return (
    <footer className="doc">
      <div
        className="icons github"
        onClick={() => setwindowState((state) => ({ ...state, github: true }))}
      >
        <img src="/doc-icons/github.svg" alt="" />
      </div>

      <div
        className="icons note"
        onClick={() => setwindowState((state) => ({ ...state, note: true }))}
      >
        <img src="/doc-icons/note.svg" alt="" />
      </div>

      <div
        className="icons pdf"
        onClick={() => setwindowState((state) => ({ ...state, resume: true }))}
      >
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open("https://calendar.google.com", "_blank");
        }}
        className="icons calender"
      >
        {" "}
        <img src="/doc-icons/calender.svg" alt="" />{" "}
      </div>
      <div
        className="icons spotify"
        onClick={() => setwindowState((state) => ({ ...state, spotify: true }))}
      >
        <img src="/doc-icons/spotify.svg" alt="" />
      </div>
      <div
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=umeshtare465@gmail.com",
            "_blank",
          )
        }
        className="icons mail"
      >
        {" "}
        <img src="/doc-icons/mail.svg" alt="" />{" "}
      </div>
      <div
        className="icons link "
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/umesh-tare-a86263311/",
            "_blank",
          )
        }
      >
        {" "}
        <img src="/doc-icons/link.svg" alt="" />{" "}
      </div>
      <div
        className="icons cli"
        onClick={() => setwindowState((state) => ({ ...state, cli: true }))}
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
