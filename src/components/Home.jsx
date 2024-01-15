import React from 'react'
import './Main.css'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  
        <div className='background-container'>
     
     <center>

       <LocalFloristIcon style={{ fontSize : 100 , color : 'inherit'}}/>
       <h1 style={{ fontFamily : 'Cursive ', color : 'inherit'}}>BloomingBuds</h1>
       <h3 style={{ fontFamily : 'Lucida Handwriting ', color : 'inherit'}}>
       Blossom Every Moment with BloomingBuds</h3>
       <br />
       <Link to="/login"
       style={{color:'white'}}
       hoverable>
       <Button variant="text" color='inherit'>LOGIN</Button>
       </Link>
       
     </center>

    </div>

  )
}

export default Home