import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const SampleArray = () => {
    var Pname =[{name:"arjun",age:20,place:"ijk"},
               {name:"paul",age:20,place:"ktm"},
               {name:"gouri",age:19,place:"kdlr"} ]
  return (
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Pname.map((value,index)=>{
                    return<TableRow>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.age}</TableCell>
                        <TableCell>{value.place}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default SampleArray
