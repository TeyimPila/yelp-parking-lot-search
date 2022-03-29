import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Rating,
  Typography
} from "@mui/material";


const ResultItem = ({ name, imageUrl, url, score, address, rating, reviewCount }) => {

  return (
    <Card sx={{ display: 'flex' }} style={{ marginTop: 10 }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={imageUrl}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" align="left">
            {name} (Score: {Math.round(score * 100)/100})
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" align="left">
            {address}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Typography component="span">
            <Rating name="read-only" value={rating} readOnly/>
          </Typography>
          <Typography>{reviewCount} Reviews</Typography>
          <Link href={url} underline="hover" target="_blank">
            View on Yelp
          </Link>
        </Box>
      </Box>
    </Card>
  )
}

export default ResultItem