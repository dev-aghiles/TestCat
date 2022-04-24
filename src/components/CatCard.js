import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import { CardActionArea } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import Tooltip from "@mui/material/Tooltip";
import { fetchCatfact, fetchCatImage } from "./FetchingData";

export default function CatCard({ breed, origin }) {
  const styleIcon = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  };
  const [image, setImage] = useState("");
  const [fact, setFact] = useState("");

  const getCatImages = async (breed) => {
    const result = await fetchCatImage(breed);
    setImage(result);
  };
  useEffect(() => {
    getCatImages(breed);
  }, [breed]);

  const getCatFacts = async () => {
    const result = await fetchCatfact();
    setFact(result);
  };

  useEffect(() => {
    getCatFacts();
  }, []);
  return (
    <Tooltip title={fact} arrow>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt="cat image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={styleIcon}
            >
              <PetsIcon />
              <span>{breed}</span>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              style={styleIcon}
            >
              <FlagCircleIcon />
              <span>{origin}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
}
