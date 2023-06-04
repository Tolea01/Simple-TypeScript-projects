import React from 'react';
import { CustomStack } from './styled';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const User: React.FC = () => {
  return (
    <CustomStack>
      <TextField
        id="outlined-basic"
        placeholder="Search user"
        variant="outlined"
        fullWidth
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </CustomStack>
  )
}
