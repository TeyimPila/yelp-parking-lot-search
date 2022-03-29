import React, {useMemo, useState} from 'react'
import {Button, Container, Grid, TextField} from "@mui/material";
import findParkingLotsByLocation from "../services/yelpService";
import Results from "../components/Results";
import ResultItem from "../components/ResultItem";

const computeAndAddScore = (businesses) => {
  return businesses.map(({ review_count, rating, ...rest }) => {
    const score = (review_count * review_count) / (review_count + 1)
    return {
      score,
      rating,
      review_count,
      ...rest
    }
  }).sort((a, b) => a.score - b.score)
}


const HomePage = () => {

  const [location, setLocation] = useState('')
  const [{ total, businesses }, setResponse] = useState({ total: 0, businesses: [] })

  const handleLocationChange = (inputVal) => {
    setLocation(inputVal.target.value)
    // TODO: Add/update a url query param that can be used to seed location
  }

  const handleLocationSubmit = async () => {
    try {
      if (!location || !location.trim()) {
        return
      }
      const data = await findParkingLotsByLocation({ location }) || {}
      setResponse(data.response)
      setLocation('')
    } catch (e) {
      // TODO: handle and show error to user
    }
  }

  const sortedBusinesses = useMemo(() => computeAndAddScore(businesses), [businesses])

  return (
    <Container maxWidth={false}>
      <Grid container columns={6}>
        <Grid item xs={6} component="span">
          <TextField
            id="outlined-basic"
            label="Enter Location"
            variant="outlined"
            size="small"
            value={location}
            style={{marginRight: 5}}
            onChange={handleLocationChange}
          />
          <Button
            style={{marginLeft: 5}}
            variant="outlined"
            onClick={handleLocationSubmit}
            disabled={!location || !location.trim()}
          >
            Search!
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        columns={12}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}
      >
        {businesses?.length > 0 && (
          <Results>
            {
              sortedBusinesses.map(({ name, image_url, url, location, score, review_count, rating }) =>
                <ResultItem
                  name={name}
                  address={location?.display_address?.join(',')}
                  imageUrl={image_url}
                  url={url}
                  score={score}
                  reviewCount={review_count}
                  rating={rating}
                />
              )}
          </Results>
        )}
      </Grid>
    </Container>)
}

export default HomePage