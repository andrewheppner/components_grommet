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
        <>
          <div style={{ marginBottom: "50px" }}>
            <RadioSelector
              id="option1"
              label="Default radio button"
              errorMessage={null}
              onChange={id => {}}
            />
          </div>
          <div style={{ marginBottom: "50px" }}>
            <RadioSelector
              id="option2"
              label="Default radio button"
              errorMessage={null}
              onChange={id => {}}
              isChecked
            />
          </div>
          <div style={{ marginBottom: "50px" }}>
            <RadioSelector
              id="option3"
              label="Default radio button"
              errorMessage="Error message line one"
              onChange={id => {}}
            />
          </div>
          <div style={{ marginBottom: "50px" }}>
            <RadioSelector
              id="option4"
              label="Default radio button"
              errorMessage={null}
              onChange={id => {}}
              withFormField
              formFieldLabel="Text field label"
              placeholderText="e.g. Placeholder text"
              onFormFieldChange={e => console.log(e.target.value, "form input")}
            />
          </div>
          <div style={{ marginBottom: "50px" }}>
            <RadioSelector
              id="option4"
              label="Default radio button"
              errorMessage={null}
              onChange={id => {}}
              isChecked={false}
              withFormField
              placeholderText="e.g. Placeholder text"
              onFormFieldChange={e => console.log(e.target.value, "form input")}
            />
          </div>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
