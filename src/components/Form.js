import * as React from "react";
import Input from "@mui/material/Input";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ariaLabel = { 'aria-label': 'description' };

export default function Form() {

    
    return (
        <Box
            component="form"
            sx={{
            '& > :not(style)': {m: 1},
            }}
            noValidate
            autoComplete="off"
        >
            <Input placeholder="First Name" inputProps={ariaLabel} />
            <Input placeholder="Last Name" inputProps={ariaLabel} />
            <Input placeholder="Business Email" inputProps={ariaLabel} />

            <Button >Submit</Button>
            
        </Box>
        
    );
}