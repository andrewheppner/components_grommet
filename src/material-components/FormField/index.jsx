import React from "react";
import TextField from "@material-ui/core/TextField";

const FormField = ({ type, name, placeholder, onChange }) => (
  <TextField
    id="form-field"
    label={null}
    type={type}
    name={name}
    margin={"none"}
    variant="outlined"
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default FormField;
