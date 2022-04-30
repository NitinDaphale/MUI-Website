import React from "react";
import Post from "./Post";
import { Box } from "@mui/material";

export default () => {
  return (
    <Box flex={4} p={2} bgcolor="skyblue">
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
