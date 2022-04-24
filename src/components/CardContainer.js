import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CatCard from "./CatCard";
import { fetcataData } from "./FetchingData";
export default function CardContainer() {
  const [breeds, setBreeds] = useState([]);

  const getCatBreeds = async () => {
    const result = await fetcataData();
    setBreeds(result);
  };

  useEffect(() => {
    getCatBreeds();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {breeds.map((breed, index) => (
          <Grid item xs={12} md={4} sm={6} key={index}>
            <CatCard breed={breed.breed} origin={breed.country} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
