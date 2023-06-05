import React from 'react';
import { CustomStack } from './styled';
import { TextField, InputAdornment, List, Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { UserList } from '../../types-and-interfaces';
import { User } from './User';
import { Skeleton } from './Skeleton';

interface Props {
  items: UserList[],
  isLoading: boolean,
  searchValue: string,
  onChangheSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
  invites: number[],
  onClickInvite: (id: number) => void,
  onClickSendInvites: () => void,
}

const Users: React.FC<Props> = (props) => {
  const filteredSearchValue = props.searchValue.toLowerCase();

  const filteredUsers = props.items.filter(obj => {
    const fullName = (obj.first_name + obj.last_name).toLowerCase();
    return (
      fullName.includes(filteredSearchValue) ||
      obj.email.toLowerCase().includes(filteredSearchValue)
    );
  });


  return (
    <CustomStack spacing={2}>
      <TextField
        id="outlined-basic"
        placeholder="Search user"
        variant="outlined"
        fullWidth
        size="small"
        value={props.searchValue}
        onChange={props.onChangheSearchValue}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          )
        }}
      />
      {props.isLoading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <List>
          {
            filteredUsers.map((obj, index) => {
              return (
                <User
                  isInvited={props.invites.includes(obj.id)}
                  key={index}
                  {...obj}
                  onClickInvite={props.onClickInvite}
                />
              )
            })
          }
        </List>
      )}

      {props.invites.length > 0 && (
        <Button
          variant="contained"
          onClick={props.onClickSendInvites}
          sx={{ height: '40px' }}>
          Send an invitation
        </Button>
      )}

    </CustomStack>
  )
}

export default Users;