import { Button, Typography } from '@mui/material'
import React,{useEffect, useState} from 'react'

const Page = () => {
    var[pagename,setPagename] = useState()


  useEffect(()=>{
    setPagename("use effect")
  },[])
  return (
    <div>
      <br></br>
      <Button variant='contained'>Home Page</Button>
      <Button variant='contained' >Gallery Page</Button>
      <Button variant='contained' >Contact Page</Button>
      <Typography>Welcome to {pagename}</Typography>
      </div>
  )
}

export default Page
