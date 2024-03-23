import  React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SkillChip from './SkillChip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AppContext } from '../AppContext';


export default function JobCard({job}) {
  const {isLoggedin, handleOpenLogIn } = useContext(AppContext);

  const onDetailClick=()=>{
    isLoggedin? navigate(`/job/${job.id}`) 
    : handleOpenLogIn({jobId: job.id});
  }


  const navigate= useNavigate();
  return (
   
    //onClick={()=> navigate(`/job/${job.id}`)}
      <Card >
        <CardActionArea>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {job.title}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {job.skills.slice(0,4).map((skill)=> (<SkillChip skill={skill} />))}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Requirements: {job.description}
            </Typography>

            <Stack alignItems="center" spacing={2}>
              <Button variant="contained" color='info' onClick={onDetailClick}>Detail</Button>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
  
  );
}
