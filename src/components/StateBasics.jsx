import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname, setFname] = useState(" Akhina<3")


    const changeName = () => {
        setFname("Arjun<3")
    }

    return (
        <div>
            <Typography>Welcome {fname}</Typography>
            <br></br>
            <Button variant='contained' onClick={changeName}>change</Button>
        </div>
    )
}

export default StateBasics
