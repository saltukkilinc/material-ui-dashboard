import { Button } from "@mui/material";
import Navbar from "./components/navbar";

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
      <Navbar />
    </>
  );
}

export default App;
