import React from "react";
import githubdata from "../../assets/github.json";
import MacWindow from "./MacWindow";
import "./github.scss";
const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repolink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>
      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>
      <div className="urls">
        <a href={data.repolink}>Repositary</a>
        {data.demoLink && <a href={data.demolink}>Demo Link</a>}{" "}
      </div>
    </div>
  );
};

const Github = ({ windowname, setwindowState }) => {
  return (
    <MacWindow windowname={windowname} setwindowState={setwindowState}>
      <div className="cards">
        {githubdata.map((project) => {
          return <GitCard data={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
