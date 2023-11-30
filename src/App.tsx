import React from "react";
import "./App.css";
import Chips from "./components/Chips";
import Example from "./pages/Example";
import Example2 from "./pages/Example2";
const App: React.FC = () => {
  return (
    <div className="container">
      <h1>CHIPS COMPONENT</h1>
      <h2>BASIC STYLE</h2>
      <div className="content">
        <Chips label="Basic solid" />
        <Chips label="Basic outline" outline />
        <Chips label="Disabled" disabled />
        <Chips label="Icon Left" iconLeft="fa-regular fa-eye" />
        <Chips label="Icon Right" iconRight="fa-solid fa-check" />
      </div>
      <h2>SIZE</h2>
      <div className="content">
        <Chips label="Small size" size="small" />
        <Chips label="Medium size" size="medium" />
        <Chips label="Large size" size="large" />
      </div>
      <h2>BORDER</h2>
      <div className="content">
        <Chips label="Squared" border="squared" />
        <Chips label="Rounded" border="rounded" />
      </div>
      <h2>STATES</h2>
      <div className="content">
        <Chips label="Primary" state="primary" />
        <Chips label="Info" state="info" />
        <Chips label="Link" state="link" />
        <Chips label="Success" state="success" />
        <Chips label="Warning" state="warning" />
        <Chips label="Error" state="error" />
      </div>
      <div className="content">
        <Chips label="Primary" state="primary" outline />
        <Chips label="Info" state="info" outline />
        <Chips label="Link" state="link" outline />
        <Chips label="Success" state="success" outline />
        <Chips label="Warning" state="warning" outline />
        <Chips label="Error" state="error" outline />
      </div>
      <h2>USE CASES</h2>
      <div className="content">
        <Example />
      </div>
      <div className="content">
        <Example2 />
      </div>
    </div>
  );
};

export default App;
