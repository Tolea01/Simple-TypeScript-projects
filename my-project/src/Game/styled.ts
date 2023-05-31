import {ListItem, Stack, styled} from "@mui/material";

export const CustomStack = styled(Stack)({
  width: '700px',
  backgroundColor: 'white',
  borderRadius: '15px',
  padding: '7%',
})

export const Item = styled(ListItem)({
  padding: '20px',
  border: '1px solid #9e9e9e',
  borderRadius: '10px',
  cursor: 'pointer',
  marginBottom: '20px',
  '&:hover': {
    borderColor: 'rgb(123 104 238)'
  }
})