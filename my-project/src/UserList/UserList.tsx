import React, { ChangeEvent, useEffect, useState } from "react";
import { CustomStack } from "./styled";
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, Box, Typography, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface UserList {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
}

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserList[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<UserList[]>([]);

  const handleSearchUsers = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    const searchValue = e.target.value.toLowerCase();

    const filteredUsers = users.filter(user =>
      user.first_name.toLowerCase().includes(searchValue) ||
      user.last_name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue)
    );

    setSearchResults(filteredUsers);
  }

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(userList => setUsers(userList.data))
      .catch(err => console.error(err));
  }, [])

  return (
    <CustomStack direction={'column'} spacing={3}>
      <TextField
        id="outlined-basic"
        placeholder="Search user"
        variant="outlined"
        fullWidth
        size="small"
        value={inputValue}
        onChange={handleSearchUsers}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
      {(searchResults.length > 0 ? searchResults : users).map((user, index) => {
        return (
          <Box key={index}
            display={"flex"}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <img
              src={user.avatar}
              alt="user-img"
              width={70}
              height={70}
              style={{ borderRadius: '50%', marginRight: '10px' }}
            />
            <Box>
              <Typography
                variant="h6"
                fontWeight={'bold'}>{user.first_name} {user.last_name}
              </Typography>
              <Typography variant="h6" color={'gray'}>{user.email}</Typography>
            </Box>
            <Button
              variant="text"
              sx={{ borderRadius: '50%', height: '60px', minWidth: '60px' }}>
              <AddIcon fontSize="medium" />
            </Button>
          </Box>
        )
      })}
      <Button variant="contained"
        sx={{ height: '40px' }}
        disabled={users.length === 0}>
        Send an invitation
      </Button>
    </CustomStack>
  )
}