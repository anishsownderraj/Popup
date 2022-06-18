import * as React from "react";
import Input from "@mui/material/Input";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function Form() {

    const ariaLabel = { 'aria-label': 'description' };
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    return (
        <Box

            component="form"
            sx={{
            '& > :not(style)': {m: 1},
            }}
            noValidate
            autoComplete="off"
        >
            <h1 style={{fontFamily: 'Segoe UI'}}>Join Beta Today!</h1>
            <Input placeholder="First Name" inputProps={ariaLabel} />
            <Input placeholder="Last Name" inputProps={ariaLabel} />
            <Input placeholder="Business Email" inputProps={ariaLabel} />
            <TextField
          id="outlined-multiline-flexible"
          label="Questions or Comments"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />

            <Button  >Submit</Button>

        </Box>

    );
}