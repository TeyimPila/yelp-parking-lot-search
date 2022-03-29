import React from 'react'
import {Card} from "@mui/material";

const Results = ({ children }) => {
  return (
    <Card style={{overflowY: "scroll", height: '80vh'}}>
      {children}
    </Card>
  )
}

export default Results