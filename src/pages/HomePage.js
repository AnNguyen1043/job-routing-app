import React from 'react'
import Grid from '@mui/material/Grid';
import jobs from "../jobs.json"
import { Container } from '@mui/system';
import JobCard from '../components/JobCard';
import PaginationButton from '../components/PaginationButton';



function HomePage() {
  return (
      <Container>
        <Grid container spacing={2} mt={1}>
          {jobs.slice(0,5).map((job)=> (
            <Grid key={job.id} item xs={12} md={6} lg={4}>
              <JobCard job={job}  />
            </Grid>
          ))}
        </Grid>
        
        <Grid mt={2}>
          {<PaginationButton/>}
        </Grid>
      </Container>
  );
}

export default HomePage
