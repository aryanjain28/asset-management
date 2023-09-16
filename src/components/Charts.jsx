import { Box } from "@mui/material";

export const ChartsComponent = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        borderRadius={5}
        boxShadow={5}
        sx={{ m: 10, width: 800, height: 500 }}
      ></Box>
    </Box>
  );
};
