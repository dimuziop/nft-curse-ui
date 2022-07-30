import { Box } from "@mui/material";
import React from "react";
import Stock from "../../stock/pages/Stock";

type MyProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  count: number; // like this
};
class Main extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <Box flex={4}>
        <Stock title="Market" />
      </Box>
    );
  }
}

export default Main;
