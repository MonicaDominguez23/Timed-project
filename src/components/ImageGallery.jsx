import Giphy from "../Data/Giphy.json";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Card } from "@mui/material";

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
      {Giphy.data.map((item) => (
        <ImageListItem key={item.img}>
          <Card>
            <img
              srcSet={`${item.images.original.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={item.images.original.url}
              alt={item.title}
              loading="lazy"
            />
          </Card>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
