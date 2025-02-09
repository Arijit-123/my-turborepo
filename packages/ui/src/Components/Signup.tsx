import React, { useState } from 'react'
import { Typography } from '@mui/material';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';
import Card from '@mui/material/Card';
function Signup() {

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
  return (
    <div><div>
    <div style={{
        paddingTop: 150,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center"
    }}>
        <Typography variant={"h6"}>
        Welcome to Coursera. Sign up below
        </Typography>
    </div>
<div style={{display: "flex", justifyContent: "center"}}>

    <Card  style={{width: 400, padding: 20}}>
        <TextField
            onChange={(event) => {
               
            }}
            fullWidth={true}
            label="Email"
            variant="outlined"
        />
        <br/><br/>
        <TextField
            onChange={(e) => {
             
            }}
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={"password"}
        />
        <br/><br/>

        <Button
            size={"large"}
            variant="contained"
           

        > Signup</Button>
    </Card>
</div>
</div></div>
  )
}

export default Signup