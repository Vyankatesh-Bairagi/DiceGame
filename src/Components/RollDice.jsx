import { useState } from "react";
import styled from "styled-components";

const RollDice = ({currentDice, roleDice}) => {
  
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/dice/${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
