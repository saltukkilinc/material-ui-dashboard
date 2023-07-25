import { Button } from "@mui/material";

function App() {
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => console.log("hello world")}
      >
        Hello World
      </Button>
    </>
  );
}

export default App;
