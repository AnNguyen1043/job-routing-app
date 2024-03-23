
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { useParams } from 'react-router-dom'
import jobs from "../jobs.json"

function DetailPage() {
  const params=useParams();
  const jobId=params.id;
  const job= jobs.find((job)=>job.id===jobId);

  if(!job)
    return(
      <Typography variant="h3" marginTop={3}>
        No Job found!
      </Typography>
    );

  return (
    <Container sx={{width:900}}>
      <Typography variant="h3" marginTop={3}>
        {job.title}
      </Typography>
      {/* <Box marginTop={3} sx={{display:"flex"}}>
        <p>{job.description}</p>

      </Box> */}
    </Container>
  )
}

export default DetailPage
