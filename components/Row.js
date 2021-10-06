import { Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Form from "../components/Form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Row(resource) {
    // row openning
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { row } = resource;

    // form openning
    const [openMod, setOpenMod] = React.useState(false);
    const handleOpenMod = () => setOpenMod(true);
    const handleCloseMod = () => setOpenMod(false);
        
    //Delete confirmation
    
    const [openDel, setOpenDel] = React.useState(false);
    const handleClickOpenDel = () => {setOpenDel(true);};

    const handleCloseDel = () => {setOpenDel(false);};   

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.dispenser.display}</TableCell>
        </TableRow>
        <TableRow className=''>
          <TableCell className='py-0' colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">Resource</Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Resource type</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Dispenser display</TableCell>
                      <TableCell>Prescription</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>When handed over</TableCell>
                      <TableCell>Dosage</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableCell>{row.resourceType}</TableCell>
                    <TableCell>{row.text.status}</TableCell>
                    <TableCell>{row.dispenser.display}</TableCell>
                    <TableCell>{row.authorizingPrescription.map(({display})=>(display==="Prescription"?(<CheckIcon key={row.id}/>):(<ClearIcon/>)))}</TableCell>
                    <TableCell>{row.quantity.value}</TableCell>
                    <TableCell>{row.whenHandedOver}</TableCell>
                    <TableCell>{row.dosageInstruction.map(({text})=>(text))}</TableCell>


                    <TableCell><CreateIcon onClick={handleOpenMod} className='cursor-pointer hover:text-green-400'/><DeleteIcon onClick={handleClickOpenDel} className='cursor-pointer hover:text-red-500'/></TableCell>
                    <Modal open={openMod} onClose={handleCloseMod} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                      <Form key={row.id} cols={row} />
                    </Modal>
                  </TableBody>
                </Table>      
                   <Dialog open={openDel} onClose={handleCloseDel} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title"></DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete this element?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleCloseDel}>Delete</Button>
                          <Button onClick={handleCloseDel} autoFocus>Cancel</Button>
                        </DialogActions>
                    </Dialog>

                  
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
}