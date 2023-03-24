import { Button,Typography} from '@mui/material'
import React,{useState} from 'react'

const Counter = () => {
    var[num,setNum]=useState(0)
   
    var increament=()=>{
        setNum(num+1)
    }
    var decreament=()=>{
        setNum(num-1)
    }
  return (
    <div>
        <Typography>{num}</Typography>
      
      <br></br>
      <Button variant='contained'onClick={increament}>Increment</Button>
      <Button variant='contained'onClick={decreament}>Decrement</Button>
    </div>
  )
}

export default Counter
