import React from "react";
import { Box, Stack, Divider } from "@mui/material";

const MuiLayout = () => {
  return (
    <Stack
      sx={{
        border: "1px solid red",
      }}
      spacing={2}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "200px",
          height: "200px",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        Hello I am a Box component. By default component is a div but I can
        change it with a component prop to specify a component like span.
      </Box>
      <Box
        component="span"
        width="200px"
        height="200px"
        bgcolor="primary.main"
        color="white"
        sx={{
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        This box was composed by system props.
      </Box>
    </Stack>
  );
};

export default MuiLayout;
