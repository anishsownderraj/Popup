import React from "react";
import Form from "./Form";

import  Box  from "@mui/material/Box";
import Button from "@mui/material/Button";

import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

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
}

export default function SignIn() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <main>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor="secondary"
                color="white"
                sx={{
                    justifyContent: "center",
                    borderRadius: 4,
                    justify: "center",
                    bgcolor: "text.disabled",
                    m: 1,
                    p: 1,
                }}>
                <div>
                    <Button
                        onClick={handleOpen}
                        variant="contained"
                        size="large"   
                    > Join Beta
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Form/>
                        </Box>

                    </Modal>
                </div>

            </Box>
       </main> 
    );


}