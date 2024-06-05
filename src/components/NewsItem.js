import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const NewsItem = ({ title, date, description }) => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncatedDescription =
    description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;

  return (
    <CardContent>
      <Typography variant="h5" component="div" sx={{ color: "red" }}>
        {title}
      </Typography>
      <Typography
        color="text.secondary"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        {date}
      </Typography>
      <Typography variant="body2">
        {expanded || !isMobile ? description : truncatedDescription}
      </Typography>
      {isMobile && (
        <Button size="small" onClick={toggleExpand}>
          {expanded ? "Read Less" : "Read More"}
        </Button>
      )}
    </CardContent>
  );
};

export default NewsItem;
