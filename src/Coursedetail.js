import React from 'react';
import { Typography, Container,Paper,Box,Grid} from '@material-ui/core';
import './App.css';
import { Link } from 'react-router-dom';

function Coursedetail(props){

    const item = props.location.state.item;

    return(
        <div>
            <br/> <br/>
           <h1 className="text-center">About Course Details</h1><hr/>

    <div className="deco">   
        <br/> <br/>
    <Container >
      <Grid container justify="center space-evenly">


        <Grid item lg={4}>
             <Paper>
               <Box p={4} borderLeft={14} borderColor="secondary.main" boxShadow={8}>
                  <Typography variant="h4">1.Detailed Course</Typography>
                     <Typography variant="subtitle1">
                          Each and every topics will be cover in depth
                          and you will get to know about all the topics.
                    </Typography> 
                </Box>
             </Paper>
        </Grid>


        <Grid item lg={4}>
             <Paper>
               <Box p={4} borderLeft={14} borderColor="secondary.main" boxShadow={8}>
                  <Typography variant="h4">2.Mentorship</Typography>
                     <Typography variant="subtitle1">
                          Each and every student will have personal
                          Mentor Facility.
                    </Typography> 
                </Box>
             </Paper>
        </Grid>


        <Grid item lg={4}>
             <Paper>
               <Box p={4} borderLeft={14} borderColor="secondary.main" boxShadow={8}>
                  <Typography variant="h4">3.Certification</Typography>
                     <Typography variant="subtitle1">
                          Each and every Student will access their 
                          Certificate on completion of course.
                    </Typography> 
                </Box>
             </Paper>
        </Grid> 

      </Grid>
    </Container>
    

     <br/> <br/> <br/> </div> <hr/>
    <h4 className="text-center">Click On The Button Given Below To Enroll Yourself</h4>
    <hr/>
    <div class="text-center">
    <Link class="btn btn-primary" to={{pathname: '/cart',state: {item:item}}}>Add To Cart</Link>
    </div>
    </div>

    )
}
export default Coursedetail;