import { Button, Stack, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
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

      <Stack display='block' spacing={2} direction={'row'}>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
      </Stack>

      <Stack spacing={2} direction={'row'}>
        <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
        <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
      </Stack>

      <Stack spacing={2} direction={'row'}>
        <IconButton size="large" color="success"><SendIcon /></IconButton>
        <IconButton size="small" color="error"><SendIcon /></IconButton>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
