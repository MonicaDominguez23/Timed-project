import { React, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Giphy from "../Data/Giphy.Json"
import { ImageList, ImageListItem } from '@mui/material';


export default function BasicTextFields() {

    const [searchTerm, setSearchTerm] = useState("");
  
    
    const filteredGiphy = Giphy.data.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <Box>
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        id="outlined-basic"
        label="Search the void"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Box>
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {filteredGiphy.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={`${item.images.original.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={item.images.original.url}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
);
}
