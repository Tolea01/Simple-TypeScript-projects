import React, {useState} from "react";
import {CustomStack, Item} from "./styled";
import {Box, List, Typography} from "@mui/material";
import {questions, QuizObject} from "../questions";
import {Result} from "../Result/Result";

export const Game: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);

  const question: QuizObject = questions[step];

  const handleVariantClick = (variant: number): void => {
    setStep(step + 1);
    if (variant === question.correct) setCorrect(correct + 1);
  }

  return (
    <CustomStack spacing={3}>
      {
        step !== questions.length ? (
          <>
            <Box
              bgcolor={'#e0e0e0'}
              width={'100%'}
              height={'6px'}
              borderRadius={3}
            >
              <Box
                width={`${Math.round(step / questions.length * 100)}%`}
                height={"inherit"}
                borderRadius={"inherit"}
                sx={{background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'}}
              />
            </Box>
            <Typography variant={"h4"}>{question.title}</Typography>
            <List>
              {
                question.variants.map((variant, index) => {
                  return (
                    <Item
                      key={index}
                      onClick={(): void => handleVariantClick(index)}>
                      {variant}
                    </Item>
                  )
                })
              }
            </List>
          </>
        ) : (
          <Result corectAnswers={correct} totalQuestions={questions.length}/>
        )
      }

    </CustomStack>
  )
}