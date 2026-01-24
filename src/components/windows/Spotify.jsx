import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss";
const Spotify = () => {
  return (
    <MacWindow width="25vw">
      <div className="spotify-window">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/4lq1ltuWHX49J7cFy6Pr8z?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </MacWindow>
  );
};

export default Spotify;
