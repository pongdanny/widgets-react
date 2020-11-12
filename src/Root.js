import React from "react";
import Clock from "./Clock";
import Folder from "./Folder";

const folders = [
  { title: "one", content: "I am First" },
  { title: "two", content: "I am Second" },
  { title: "three", content: "I am Third" },
];

const Root = () => (
  <div id="widgets">
    <Clock />
    <Folder folders={folders} />
  </div>
);

export default Root;
