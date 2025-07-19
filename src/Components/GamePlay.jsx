import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSel from "./NumberSel";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, Outlined } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, SetCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [rule, SetRules] = useState(false);


  const GenRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You Have not selected a Number !!");
      return;
    }
    const randomNumber = GenRandomNum(1, 7);
    SetCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };
  const reset = () => {
    setScore(0);
  };
  return (
    <MainContaner>
      <div className="topSection">
        <TotalScore score={score} />
        <NumberSel
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <Outlined onClick={reset}>Reset</Outlined>
        <Button onClick={() => SetRules((prev) => !prev)}>
          {rule ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {rule && <Rules />}
    </MainContaner>
  );
};

export default GamePlay;

const MainContaner = styled.main`
  padding-top: 70px;
  margin: 0 70px;
  .topSection {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
`;
