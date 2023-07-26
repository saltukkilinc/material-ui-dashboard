import { AccountCircle } from "@mui/icons-material";
import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField variant="outlined" label="outline" />
        <TextField variant="filled" label="filled" />
        <TextField variant="standard" label="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          variant="outlined"
          label="small secondary"
          size="small"
          color="secondary"
        />
        <TextField
          variant="outlined"
          label="medium warning"
          size="medium"
          color="warning"
        />
        <TextField
          variant="outlined"
          label="large info"
          size="medium"
          color="info"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField variant="outlined" label="disabled" disabled />
        <TextField variant="outlined" label="error" error />
        <TextField
          variant="outlined"
          //label="readOnly"
          InputProps={{ readOnly: true }}
          value={"readonly"}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="start icon"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          label="end icon"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          placeholder="type your name"
          required
          helperText="type your name please"
        />
        <TextField type="password" placeholder="type your password" required />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          placeholder="type your password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value ? "type your password" : "don' t share your password" }
          required
          error={!value}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
