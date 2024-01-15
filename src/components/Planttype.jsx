import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';


const Planttype = () => {
    var [ptype, setPtype] = useState({ "Planttype": '', "Status": 'ACTIVE' });
    const [status, setStatus] = React.useState('');


    const navigate = useNavigate();

    const ptypehandler = (event) => {
        setStatus(event.target.value);

        const { name, value } = event.target
        setPtype((ptype) => ({ ...ptype, [name]: value }))
        console.log(ptype)
    }

 const saveData = () => {
         axios.post("http://localhost:3005/ptnew", ptype)
           .then((response) => { alert("Record saved") })
           .catch(err => console.log(err))
             navigate('/Planttypeview')

 }
    return (
        <div>
            <h1 >Plant Type</h1>
            <TextField  id="standard-basic" variant="standard"  label="Plant Type" name="Planttype" value={ptype.Planttype} onChange={ptypehandler}/>
            <br></br>
            <br></br>
            


            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={status}
          onChange={ptypehandler}
          label="status"
        >
        
          <MenuItem  value="active">Active</MenuItem>
          <MenuItem  value="inactive">Inactive</MenuItem>
        </Select>
      </FormControl>   


            
            <br></br>
            <br></br>

            <Button variant="contained"  onClick={saveData}>SUBMIT</Button>
        </div>
      
    )
}

export default Planttype
