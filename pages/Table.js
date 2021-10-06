import { useState } from "react";
import { Alert, AlertTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Row from '../components/Row'

export default function Home({data}) {
  
//   const [data, setData] = useState([props.data])
  
  return (
   <div className='mb-16'>
     <Alert className='relative w-1/3 my-3 mx-auto block' severity="info">
        <AlertTitle>Info</AlertTitle>
        This is a demo!
      </Alert>

      <TableContainer className='bg-gray-100 lg:w-[80vw] sm:w-full relative left-1/2 translate-x-[-50%] mt-32'>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell>dispenser display</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row key={row.resource.id} row={row.resource} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
  )
}
 export async function getStaticProps() {
   const data=await fetch('http://127.0.0.1:8000/api/be-apb-gfddpp-services-PCDH-FHIR/fhir/MedicationDispense').then(res => res.json())
   return {
     props:{
       data,
     }
   }
 }