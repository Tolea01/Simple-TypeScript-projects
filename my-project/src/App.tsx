import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import Button from '@mui/material/Button/Button';
import styled from '@emotion/styled';

const CustomButton = styled(Button)({
  width: '75px',
  marginTop: '30px',
  padding: '10px'
})

function App() {
  const [counter, setCounter] = useState<number>(0);

  const increment = (): void => {
    setCounter(counter + 1);
  }

  const decrement = (): void => {
    setCounter(counter - 1);
  }

  return (
    <>
      <Typography variant='h3'>Counter:</Typography>

      <Typography
        sx={{ marginTop: '30px', textAlign: 'center' }}
        variant='h2'>
        {counter}
      </Typography>

      <Box width='100%' display='flex' justifyContent='space-between'>
        <CustomButton
          onClick={decrement}
          variant='contained'
          color='error'>
          Minus
        </CustomButton>

        <CustomButton
          onClick={increment}
          variant='contained'
          color='primary'>
          Plus
        </CustomButton>
      </Box>
    </>
  );
}

export default App;