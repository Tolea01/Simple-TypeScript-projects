import React from "react";
import {Box, Button, Typography} from "@mui/material";
import resultImg from './pngegg.png';

interface Props {
  corectAnswers: number,
  totalQuestions: number,
}

export const Result: React.FC<Props> = ({corectAnswers, totalQuestions}) => {
  return (
    <>
      <Box width={'100%'} display={"flex"} justifyContent={"center"}>
        <img src={resultImg} width={150} height={150}/>
      </Box>
      <Typography
        variant={"h4"}
        component={'h4'}
        textAlign={'center'}>
        Scorul acumulat este: {corectAnswers} din {totalQuestions}
      </Typography>
      <Box width={'100%'} display={"flex"} justifyContent={"center"}>
        <Button
          variant={"contained"}
          sx={{width: '50%'}}
          onClick={(): void => window.location.reload()}
          color={"error"}>
          Reincearca
        </Button>
      </Box>
    </>
  )
}