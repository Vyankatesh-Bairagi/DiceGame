import React, { useState } from "react";
import styled from "styled-components";


const NumberSel = ({setError ,error, selectedNumber, setSelectedNumber}) => {
  const array = [1, 2, 3, 4, 5, 6];
  
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")
    }

  return (
    <SelectNum>
        <p className="error">{error}</p>
      <div className="flex">
      {array.map((value, i) => (
        <Box key={i}
        isSelected= {value === selectedNumber}
        onClick={() => numberSelectorHandler(value)}
        >{value}</Box>
    ))}
      </div>
    <p>Select Number</p> 
    </SelectNum>
  );
};

export default NumberSel;

const SelectNum = styled.div`
    display: flex;
    align-items: end;
    /* justify-content: end; */
    flex-direction: column;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    .error{
        color: red;
        font-weight: 300;
    }
`
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  background-color: ${(props) => props.isSelected ? "black" : "white"};
  color: ${(props) => props.isSelected ? "white" : "black"};
`;
