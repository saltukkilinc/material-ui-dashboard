import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">
        BODY1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
        veniam esse mollitia. Illum doloremque numquam delectus. Optio mollitia
        unde animi sit dicta ullam ipsa blanditiis quos ab. Non, esse ea.{" "}
      </Typography>
      <Typography variant="body2">
        BODY2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
        autem sed, iste id natus vero quos, voluptate pariatur suscipit rerum
        animi porro dolores. Veniam officia corporis consectetur nostrum,
        voluptatum dolores.
      </Typography>
    </div>
  );
};

export default MuiTypography;
