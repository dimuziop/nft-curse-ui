import { Box } from "@mui/material";
import React from "react";

type MyProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  count: number; // like this
};
class Sidebar extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }} >
        Side Bar
      </Box>
    );
  }
}

export default Sidebar;
