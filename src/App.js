import * as React from 'react';
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

export default function BasicGrid() {
  let [quantity, setQuantity] = React.useState(0);
  let [loading, setLoading] = React.useState(true)

  const plusQuantity = () => {
    setQuantity(quantity + 1)
    updateValue()
  }
  const minusQuantity = () => {
    setQuantity(quantity - 1)
    updateValue()
  }

  React.useEffect(() => {
    // axios.get(url, header).then(res => {
    //   setQuantity()
    // })
  }, [])

  const updateValue = () => {
    // let data = {
    //   'counter1': quantity
    // }
    // axios.put(link, data)
  }
  return (
    <Box sx={{ flexGrow: 1 }} className="App">
      <Grid container spacing={2}>
        <Grid item lg={12} style={{textAlign:"center"}}>
          {loading ? <> <CircularProgress /> {"saving counter value"} </>: "" }
        </Grid>
        <Grid item lg={12}>
          <Button variant="outlined" onClick={minusQuantity}>{'<'}</Button>
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
          <Button variant="outlined" onClick={plusQuantity}>{'>'}</Button>

        </Grid>
        <Grid item lg={12}>
          <h5>Counter value: {quantity}</h5>
        </Grid>

      </Grid>
    </Box>
  );
}
