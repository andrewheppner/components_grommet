import React from "react";
import grommetTheme from "./Theme/index";
import globalTheme from "./material-components/globalTheme";
import { Grommet } from "grommet";
import Button from "./components/Button";
import RadioButton from "./components/RadioButton";
import RadioSelector from "./material-components/RadioSelector/index";
import { ThemeProvider } from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Grommet Components</h1>
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
      <h1>Material UI Components</h1>
      <ThemeProvider theme={globalTheme}>
        <RadioSelector />
      </ThemeProvider>
    </div>
  );
}

export default App;
