import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
import styled from "@mui/material";

const MuiLayout = () => {
  return (
    <Paper sx={{ p: 2}} elevation={3}>
      <Stack
        direction="row"
        spacing={2}
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

      <Grid container spacing={2} my={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Box bgcolor="primary.main" color="white" height={"200px"}>
            İtem 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box bgcolor="primary.main" color="white" height={"200px"}>
            İtem 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box bgcolor="primary.main" color="white" height={"200px"}>
            İtem 3
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
