import React from 'react';
import { Box, List, ListItem, TextField, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from '@emotion/styled';

const StyledInput = styled(TextField)({
  '& .MuiInputBase-input': {
    fontSize: '2rem',
    fontWeight: 'bold',
    letterSpacing: '1.3px',
    outline: 'none',
    marginTop: '20px',
    borderRadius: '5px',
  }
})

const StyledList = styled(List)({
  display: 'flex',
  listStyle: 'none',
  padding: '0',
  margin: '0',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '5px',
  overflow: 'hidden',
  marginBottom: 20
})

const StyledListItems = styled(ListItem)({
  display: 'inline-flex',
  padding: '10px 20px',
  borderRight: '1px solid rgba(0, 0, 0, 0.05)',
  cursor: 'pointer',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },
  '&:active': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  },
  '&.active': {
    backgroundColor: '#16b67f',
    color: '#fff',
  }
})

const defaultCurrencies: string[] = ['USD', 'EUR', 'MDL', 'RUB'];

interface Props {
  value: number,
  currency: string,
  mr?: number,
  onChangeValue: (value: number) => void,
  onChangeCurrency: (value: string) => void,
}

export const Block: React.FC<Props> = (props) => {
  return (
    <Box display="flex" flexDirection="column" mr={props.mr}>
      <StyledList>
        {defaultCurrencies.map(item => {
          return (
            <StyledListItems
              key={item}
              className={props.currency === item ? 'active' : ''}
              onClick={() => props.onChangeCurrency(item)}
            >
              {item}
            </StyledListItems>
          )
        })}
        <Button color='success'>
          <KeyboardArrowDownIcon fontSize='small' />
        </Button>
      </StyledList>
      <StyledInput
        color='success'
        type='number'
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChangeValue(Number(e.target.value))}
      />

    </Box >
  )
}