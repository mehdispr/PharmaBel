import { useState } from "react";
import { Alert, AlertTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Row from '../components/Row'

export default function Home(props) {
  const [data, setData] = useState(props.data)
  const {row} = data;

  return (
   <div>
     <Alert className='relative w-1/3 my-3 mx-auto block' severity="info">
        <AlertTitle>Info</AlertTitle>
        This is a demo!
      </Alert>

      <TableContainer className='bg-gray-100 lg:w-[85vw] sm:w-full relative left-1/2 translate-x-[-50%] mt-32'>
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
  //  const data=await fetch('http://127.0.0.1:8000/api/be-apb-gfddpp-services-PCDH-FHIR/fhir/MedicationDispense').then(res => res.json())

  const data=[
     {
          "fullUrl": "https://int-pcdh.gfd-dpp.be/be-apb-gfddpp-services-PCDH-FHIR/fhir/MedicationDispense/1",
          "resource": {
              "resourceType": "MedicationDispense",
              "id": "1",
              "text": {
                  "status": "generated",
                  "div": "<div lang=\"fr-BE\" xml:lang=\"fr-BE\" xmlns=\"http://www.w3.org/1999/xhtml\" style=\"overflow-y:scroll; overflow-x:hidden; height:400px;\">\n\t<p>\n\t\t<b>Generated Narrative</b>\n\t</p>\n\t<p>\n\t\t<b>id</b>: 1</p>\n\t<p>\n\t\t<b>language</b>: nl-BE</p>\n\t<p>\n\t\t<b>identifier</b>: dguid = a8ca980c-72aa-11e7-8cf7-a6006ad3dba0</p>\n\t<p>\n\t\t<b>status</b>: completed</p>\n\t<p>\n\t\t<b>medication</b>: \n\t\t<span title=\"Codes: {https://cnk.apb.be/codings/cnk_product_codes 1439562}\">Topazolam tab 50x 1,0mg</span></p>\n\t<p>\n\t\t<b>subject</b>: identifier = 64110219106</p>\n\t<p>\n\t\t<b>context</b>:\n\t\t<span title=\"Codes: {https://www.gfd-dpp.be/fhir/reference/sguid}\">b8ca980c-72aa-11e7-8cf7-a6006ad3dba0</span>\n\t</p>\n\t<p>\n\t<b>Performers:</b>\n\t<dl>\n\t  <tab/><dt>Actor system id</dt>\n\t  <tab/><dd> - https://www.gfd-dpp.be/fhir/NamingSystem/pharmacy/nihdi</dd>\n\t  <tab/><dt>Actor id value</dt>\n\t  <tab/><dd> - 27457532</dd>\n\t  <tab/><dt>Actor display</dt>\n\t  <tab/><dd> - Apotheek onder de toren</dd>\n\t</dl> \n\t</p>\n\t<p>\n\t\t<b>authorizingPrescription</b>: Prescription</p>\n\t<p>\n\t\t<b>quantity</b>: 1 package</p>\n\t<p>\n\t\t<b>whenHandedOver</b>: Mar 10, 2020, 12:00:00 AM</p>\n\t<p>\n\t\t<b>dosageInstruction</b>: 3 x per dag</p>\n</div>"
              },
              "identifier": {
                  "system": "https://www.gfd-dpp.be/fhir/reference/dguid",
                  "value": "a8ca980c-72aa-11e7-8cf7-a6006ad3dba0"
              },
              "status": "completed",
              "dispenser": {
                  "id": "https://www.gfd-dpp.be/fhir/NamingSystem/pharmacy/nihdi",
                  "reference": "27457532",
                  "display": "Apotheek onder de toren"
              },
              "authorizingPrescription": [
                  {
                      "display": "Prescription"
                  }
              ],
              "quantity": {
                  "value": 1,
                  "system": "https://www.gfd-dpp.be/fhir/reference/packaging",
                  "code": "package"
              },
              "whenHandedOver": "2020-06-29T12:32:45+02:00",
              "dosageInstruction": [
                  {
                      "text": "3 x per dag"
                  }
              ]
          }
      },
      {
          "fullUrl": "https://int-pcdh.gfd-dpp.be/be-apb-gfddpp-services-PCDH-FHIR/fhir/MedicationDispense/1",
          "resource": {
              "resourceType": "MedicationDispense 2",
              "id": "2",
              "text": {
                  "status": "generated",
                  "div": "<div lang=\"fr-BE\" xml:lang=\"fr-BE\" xmlns=\"http://www.w3.org/1999/xhtml\" style=\"overflow-y:scroll; overflow-x:hidden; height:400px;\">\n\t<p>\n\t\t<b>Generated Narrative</b>\n\t</p>\n\t<p>\n\t\t<b>id</b>: 1</p>\n\t<p>\n\t\t<b>language</b>: nl-BE</p>\n\t<p>\n\t\t<b>identifier</b>: dguid = a8ca980c-72aa-11e7-8cf7-a6006ad3dba0</p>\n\t<p>\n\t\t<b>status</b>: completed</p>\n\t<p>\n\t\t<b>medication</b>: \n\t\t<span title=\"Codes: {https://cnk.apb.be/codings/cnk_product_codes 1439562}\">Topazolam tab 50x 1,0mg</span></p>\n\t<p>\n\t\t<b>subject</b>: identifier = 64110219106</p>\n\t<p>\n\t\t<b>context</b>:\n\t\t<span title=\"Codes: {https://www.gfd-dpp.be/fhir/reference/sguid}\">b8ca980c-72aa-11e7-8cf7-a6006ad3dba0</span>\n\t</p>\n\t<p>\n\t<b>Performers:</b>\n\t<dl>\n\t  <tab/><dt>Actor system id</dt>\n\t  <tab/><dd> - https://www.gfd-dpp.be/fhir/NamingSystem/pharmacy/nihdi</dd>\n\t  <tab/><dt>Actor id value</dt>\n\t  <tab/><dd> - 27457532</dd>\n\t  <tab/><dt>Actor display</dt>\n\t  <tab/><dd> - Apotheek onder de toren</dd>\n\t</dl> \n\t</p>\n\t<p>\n\t\t<b>authorizingPrescription</b>: Prescription</p>\n\t<p>\n\t\t<b>quantity</b>: 1 package</p>\n\t<p>\n\t\t<b>whenHandedOver</b>: Mar 10, 2020, 12:00:00 AM</p>\n\t<p>\n\t\t<b>dosageInstruction</b>: 3 x per dag</p>\n</div>"
              },
              "identifier": {
                  "system": "https://www.gfd-dpp.be/fhir/reference/dguid",
                  "value": "a8ca980c-72aa-11e7-8cf7-a6006ad3dba0"
              },
              "status": "completed",
              "dispenser": {
                  "id": "https://www.gfd-dpp.be/fhir/NamingSystem/pharmacy/nihdi",
                  "reference": "27457532",
                  "display": "Apotheek onder de toren"
              },
              "authorizingPrescription": [
                  {
                      "display": "Prescription"
                  }
              ],
              "quantity": {
                  "value": 1,
                  "system": "https://www.gfd-dpp.be/fhir/reference/packaging",
                  "code": "package"
              },
              "whenHandedOver": "2020-10-29T12:32:45+02:00",
              "dosageInstruction": [
                  {
                      "text": "3 x per dag"
                  }
              ]
          }
      },
      {
          "fullUrl": "https://int-pcdh.gfd-dpp.be/be-apb-gfddpp-services-PCDH-FHIR/fhir/MedicationDispense/1",
          "resource": {
              "resourceType": "MedicationDispense 3",
              "id": "3",
              "text": {
                  "status": "generated",
                  "div": "<div lang=\"fr-BE\" xml:lang=\"fr-BE\" xmlns=\"http://www.w3.org/1999/xhtml\" style=\"overflow-y:scroll; overflow-x:hidden; height:400px;\">\n\t<p>\n\t\t<b>Generated Narrative</b>\n\t</p>\n\t<p>\n\t\t<b>id</b>: 1</p>\n\t<p>\n\t\t<b>language</b>: nl-BE</p>\n\t<p>\n\t\t<b>identifier</b>: dguid = a8ca980c-72aa-11e7-8cf7-a6006ad3dba0</p>\n\t<p>\n\t\t<b>status</b>: completed</p>\n\t<p>\n\t\t<b>medication</b>: \n\t\t<span title=\"Codes: {https://cnk.apb.be/codings/cnk_product_codes 1439562}\">Topazolam tab 50x 1,0mg</span></p>\n\t<p>\n\t\t<b>subject</b>: identifier = 64110219106</p>\n\t<p>\n\t\t<b>context</b>:\n\t\t<span title=\"Codes: {https://www.gfd-dpp.be/fhir/reference/sguid}\">b8ca980c-72aa-11e7-8cf7-a6006ad3dba0</span>\n\t</p>\n\t<p>\n\t<b>Performers:</b>\n\t<dl>\n\t  <tab/><dt>Actor system id</dt>\n\t  <tab/><dd> - https://www.gfd-dpp.be/fhir/NamingSystem/pharmacy/nihdi</dd>\n\t  <tab/><dt>Actor id value</dt>\n\t  <tab/><dd> - 27457532</dd>\n\t  <tab/><dt>Actor display</dt>\n\t  <tab/><dd> - Apotheek onder de toren</dd>\n\t</dl> \n\t</p>\n\t<p>\n\t\t<b>authorizingPrescription</b>: Prescription</p>\n\t<p>\n\t\t<b>quantity</b>: 1 package</p>\n\t<p>\n\t\t<b>whenHandedOver</b>: Mar 10, 2020, 12:00:00 AM</p>\n\t<p>\n\t\t<b>dosageInstruction</b>: 3 x per dag</p>\n</div>"
              },
              "identifier": {
                  "system": "https://www.gfd-dpp.be/fhir/reference/dguid",
                  "value": "a8ca980c-72aa-11e7-8cf7-a6006ad3dba0"
              },
              "status": "completed",
              "dispenser": {
                  "id": "https://www.gfd-dpp.be/fhir/NamingSystem/pharmacy/nihdi",
                  "reference": "27457532",
                  "display": "Apotheek onder de toren"
              },
              "authorizingPrescription": [
                  {
                      "display": "Prescription"
                  }
              ],
              "quantity": {
                  "value": 1,
                  "system": "https://www.gfd-dpp.be/fhir/reference/packaging",
                  "code": "package"
              },
              "whenHandedOver": "2020-12-29T12:32:45+02:00",
              "dosageInstruction": [
                  {
                      "text": "3 x per dag"
                  }
              ]
          }
      }
    ]

   return {
     props:{
       data,
     }
   }
 }