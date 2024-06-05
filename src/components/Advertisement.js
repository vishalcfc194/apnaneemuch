import React from "react";
import { Card, CardMedia } from "@mui/material";

const Advertisement = ({ image }) => (
  <Card variant="outlined" sx={{ marginBottom: 2 }}>
    <CardMedia
      component="img"
      image={image}
      alt="Advertisement"
      sx={{ height: 200 }}
    />
  </Card>
);

export default Advertisement;
