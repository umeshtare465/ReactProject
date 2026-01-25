import React, { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import MacWindow from "./components/windows/MacWindow";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
const App = () => {
  const [windowState, setwindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });
  return (
    <main>
      <Nav />
      <Dock windowState={windowState} setwindowState={setwindowState} />
      {windowState.github && (
        <Github windowname="github" setwindowState={setwindowState} />
      )}
      {windowState.resume && (
        <Resume windowname="resume" setwindowState={setwindowState} />
      )}
      {windowState.note && (
        <Note windowname="note" setwindowState={setwindowState} />
      )}
      {windowState.spotify && (
        <Spotify setwindowState={setwindowState} windowname="spotify" />
      )}
      {windowState.cli && (
        <Cli windowname="cli" setwindowState={setwindowState} />
      )}
    </main>
  );
};

export default App;
