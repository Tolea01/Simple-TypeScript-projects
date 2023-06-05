import React from 'react';
import { ListItem, Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { UserList } from '../../types-and-interfaces';

interface Props extends UserList {
  isInvited: boolean,
  onClickInvite: (id: number) => void,
}

export const User: React.FC<Props> = (props) => {
  return (
    <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
      <Box mr="13px">
        <img
          src={props.avatar}
          alt="avatar"
          width={55}
          height={55}
          style={{ borderRadius: '50%' }}
        />
      </Box>
      <Box>
        <Typography component="h6">{props.first_name} {props.last_name}</Typography>
        <Typography component="p">{props.email}</Typography>
      </Box>
      <Box ml="auto">
        <Button
          variant="text"
          onClick={() => props.onClickInvite(props.id)}
          sx={{ borderRadius: '50%', height: '50px', minWidth: '50px' }}>
          {props.isInvited ? (<RemoveIcon fontSize="medium" />) : (<AddIcon fontSize="medium" />)}
        </Button>
      </Box>
    </ListItem>

  )
}
