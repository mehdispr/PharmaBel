import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react";


function Form({cols}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {setOpen(true);};

    const handleClose = () => {setOpen(false);};    
    
    let handleDate =new Date(cols.whenHandedOver)
    handleDate=`${handleDate.getFullYear()}-${handleDate.getMonth()>10?(handleDate.getMonth()):('0'+handleDate.getMonth())}-${handleDate.getDay()>10?(handleDate.getDay()):('0'+handleDate.getDay())}`
    

    return (
        <div>
             <Box  className='w-3/4 md:w-2/3 lg:w-auto absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]'>
             <div className="container items-center">

                <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg ">

                    <div className="relative pt-4">
                        <label for="name" className="text-base leading-7 text-blueGray-500">Resource type</label>
                        <input contentEditable={false} type="text" id="name" name="name" placeholder="Resource type" value={cols.resourceType} className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out 
        transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white 
        focus:outline-none focus:ring-2 ring-offset-current ring-offset-2;"/>
                    </div>

                    <div className="relative pt-4">
                        <label for="name" className="text-base leading-7 text-blueGray-500">status</label>
                        <input contentEditable={false} type="text" id="name" name="name" placeholder="Resource type" value={cols.text.status} className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out 
        transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white 
        focus:outline-none focus:ring-2 ring-offset-current ring-offset-2;"/>
                    </div>

                    <div className="relative pt-4">
                        <label for="name" className="text-base leading-7 text-blueGray-500">Dispenser display</label>
                        <input contentEditable={false} type="text" id="name" name="name" placeholder="Resource type" value={cols.dispenser.display} className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out 
        transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white 
        focus:outline-none focus:ring-2 ring-offset-current ring-offset-2;"/>
                    </div>

                    <div className="relative pt-4">
                        <label for="name" className="text-base leading-7 text-blueGray-500">Prescription</label>
                        <input contentEditable={false} type="text" id="name" name="name" placeholder="Resource type" value={cols.authorizingPrescription.map(({display})=>(display))} className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out 
        transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white 
        focus:outline-none focus:ring-2 ring-offset-current ring-offset-2;"/>
                    </div>

                    <div className="relative pt-4">
                        <label for="name" className="text-base leading-7 text-blueGray-500">Quantity</label>
                        <input contentEditable={false}  type="number" defaultValue={cols.quantity.value} className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out 
        transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white 
        focus:outline-none focus:ring-2 ring-offset-current ring-offset-2;"/>
                    </div>

            <div className="relative pt-4">
                                    <label for="name" className="text-base leading-7 text-blueGray-500">When Handed Over</label>
                                    <input contentEditable={false} type="date" id="date" name="date" value={handleDate} className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out 
                    transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white 
                    focus:outline-none focus:ring-2 ring-offset-current ring-offset-2;"/>
                                </div>

                    <div className="relative pt-4">
                        <label for="name" className="text-base leading-7 text-blueGray-500">Dosage</label>
                        <input contentEditable={false} type="text" id="name" name="name" placeholder="Resource type" value={cols.dosageInstruction.map(({text})=>(text))} className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out 
        transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white 
        focus:outline-none focus:ring-2 ring-offset-current ring-offset-2;"/>
                    </div>
                    
                   <Button variant="contained" className='mt-5' onClick={handleClickOpen}>Save</Button>
                   <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title"></DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to continue?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Confirm</Button>
                        <Button onClick={handleClose} autoFocus>Cancel</Button>
                        </DialogActions>
                    </Dialog>
                </form>
                </div>
            </Box>
        </div>
    )
}

export default Form
