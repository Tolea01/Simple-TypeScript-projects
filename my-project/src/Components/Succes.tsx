import React from 'react';
import { CustomStack } from './Users/styled';
import { Box, Typography, Button } from '@mui/material';

interface Props {
  count: number
}

export const Succes: React.FC<Props> = ({ count }) => {
  return (
    <CustomStack spacing={2}>
      <Box padding={10} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <img src="https://cdn-icons-png.flaticon.com/512/148/148767.png"
          alt="succes-icon"
          width={100}
          height={100}
        />
        <Typography component="h4" variant="h4" mt={2}>Succes!</Typography>
        <Typography component="h6" variant="h6">Invitations have been sent to {count} users</Typography>
        <Button
        onClick={() => window.location.reload()}
          variant="contained"
          sx={{ height: '40px', marginTop: '15px' }}>
          Go Back
        </Button>
      </Box>
    </CustomStack>
  )
}