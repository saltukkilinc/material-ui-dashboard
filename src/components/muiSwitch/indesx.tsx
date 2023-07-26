import React, { useState } from "react";
import { Switch, FormGroup, FormControlLabel, Box } from "@mui/material";

const MuiSwitch = () => {
  const [state, setState] = useState({
    mode: false,
    test: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  console.log(state);

  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              name="mode"
              color="info"
              value={state.mode}
              onChange={handleChange}
            />
          }
          label="Dark Mode"
        />
        <FormControlLabel
          control={
            <Switch
              name="test"
              color="success"
              value={state.test}
              onChange={handleChange}
            />
          }
          label="Test Mode"
        />
      </FormGroup>
    </Box>
  );
};

export default MuiSwitch;
