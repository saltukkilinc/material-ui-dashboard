import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  const [value, setValue] = useState("");
  const [number, setNumbers] = useState<string[]>([]);

  const numberSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setNumbers(typeof val === "string" ? val.split(",") : val);
  };

  return (
    <Box
      width={"250px"}
      sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <TextField
        value={value}
        select
        label="select country"
        onChange={(e) => setValue(e.target.value)}
        fullWidth
      >
        <MenuItem value={"USA"}>America</MenuItem>
        <MenuItem value={"UK"}>England</MenuItem>
        <MenuItem value={"TR"}>Turkey</MenuItem>
      </TextField>

      <TextField
        value={number}
        select
        label="select number"
        onChange={numberSelectHandler}
        SelectProps={{
          multiple: true,
        }}
        fullWidth
      >
        <MenuItem value={"1"}>1</MenuItem>
        <MenuItem value={"2"}>2</MenuItem>
        <MenuItem value={"3"}>3</MenuItem>
        <MenuItem value={"4"}>4</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
