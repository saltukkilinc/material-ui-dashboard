import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import React, { useState } from "react";

import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);

  const formatChangeHandler = (
    e: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats)
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text" href="https://www.google.com">
          Contained
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Contained</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary" disableElevation>
          primary
        </Button>
        <Button variant="contained" color="secondary" disableRipple>
          secondary
        </Button>
        <Button variant="contained" color="info" onClick={() => alert("hello")}>
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction={"row"}>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <IconButton size="large" color="success">
          <SendIcon />
        </IconButton>
        <IconButton size="small" color="error">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          size="small"
          orientation="vertical"
          aria-label="button group"
          color="secondary"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="toggle button group"
          value={formats}
          onChange={formatChangeHandler}
          size="small"
          orientation="vertical"
          color="warning"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
