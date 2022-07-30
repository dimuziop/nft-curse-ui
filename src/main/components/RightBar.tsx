import { Box } from "@mui/material";
import React from "react";

type MyProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  count: number; // like this
};
class RightBar extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <Box flex={2}>
        Side Bar
      </Box>
    );
  }
}

export default RightBar;
