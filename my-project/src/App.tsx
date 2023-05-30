import React, {useState} from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import {Box, Button, Container, Stack} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const classes = {
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: '.7',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3,
    transition: 'all .7s',
  },

  closeButton: {
    cursor: 'pointer',
    color: 'gray',
    position: 'absolute',
    right: '10px',
    top: '10px',
  },

  inactive: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'all .7s',
  },

  modal: {
    width: '500px',
    height: '400px',
    backgroundColor: 'white',
    position: 'absolute',
    top: '100px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 5,
    transition: 'all .7s',
  }
}


function App() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Container maxWidth='xs'>
        <Stack>
          <Button
            variant='outlined'
            sx={{marginTop: '300px'}}
            onClick={(): void => setShow(true)}
            startIcon={<LaunchIcon/>}>
            Open Modal
          </Button>
        </Stack>
      </Container>
      <Box sx={show ? classes.overlay : null}/>
      <Box sx={show ? classes.modal : null}>
        <CloseOutlinedIcon
          sx={show ? classes.closeButton : classes.inactive}
          onClick={(): void => setShow(!show)}
        />
      </Box>
    </>
  );
}

export default App;