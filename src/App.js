import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField, Button } from '@mui/material';
import "./App.css"
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    axios.get("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/anamika.json").then(res => {
      setQuantity(res.data)
    })
  }, [])

  const updateValue = () => {
    let data = {
      'anamika': quantity
    }
    axios.put("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json", data)
  }
  return (
    <Box sx={{ flexGrow: 1 }} className="App">
      <Grid container spacing={2}>
        {/* <Grid item lg={12} style={{textAlign:"center"}}>
          {loading ? <> <CircularProgress /> {"saving counter value"} </>: "" }
        </Grid> */}
        <Grid item lg={12}>
          <Button variant="outlined" onClick={() => {
            setQuantity(quantity - 1)
            updateValue()
          }}>{'<'}</Button>
          <TextField id="outlined-basic" variant="outlined" className="input-cus" onChange={(event) => {
            if (event.target.value > 1000) {
              return
            } else {
              if (event.target.value != "")
                setQuantity(parseInt(event.target.value))
              else
                setQuantity(0)
            }
            updateValue()
          }}
            value={quantity}
            style={{height:3}}
          />
          <Button variant="outlined" onClick={() => {
            setQuantity(quantity + 1)
            updateValue()
          }}>{'>'}</Button>

        </Grid>
        <Grid item lg={12}>
          <h5>Counter value: {quantity}</h5>
        </Grid>

      </Grid>
    </Box>
  );
}


export default App;