import React from "react";
import grommetTheme from "./Theme/index";
import { Grommet } from "grommet";
import Button from "./components/Button";
import RadioButton from "./components/RadioButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Grommet theme={grommetTheme}>
        <div style={{ marginBottom: "32px" }}>
          <Button
            style={{ marginRight: "30px" }}
            color="primary"
            onClick={() => console.log("hi")}
            label="Primary"
          />
          <Button
            color="secondary"
            onClick={() => console.log("hi")}
            label="Secondary"
          />
        </div>
        <div style={{ width: "500px", marginBottom: "40px" }}>
          <RadioButton
            label="Default radio button"
            isChecked={false}
            onChange={() => console.log("changed")}
          />
        </div>
        <div style={{ width: "500px", marginBottom: "40px" }}>
          <RadioButton
            label="Error state radio button"
            isChecked={false}
            onChange={() => console.log("changed")}
            errorMessage="You have an error"
          />
        </div>
        <div style={{ width: "500px", marginBottom: "40px" }}>
          <RadioButton
            label="Checked Radio BUtton"
            isChecked={true}
            onChange={() => console.log("changed")}
          />
        </div>
      </Grommet>
    </div>
  );
}

export default App;
