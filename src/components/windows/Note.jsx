import React, { useEffect, useState } from "react";
import "./note.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Markdown from "react-markdown";
import "/note.txt";
import MacWindow from "./MacWindow";
const Note = () => {
  const [markdown, setMarkdown] = useState(null);
  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  });
  return (
    <MacWindow>
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>...loading</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
