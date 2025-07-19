import styled from "styled-components";

function Rules() {
  return (
    <RulesR>
      <h1>How to play dice game</h1>
      <div className="rule">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesR>
  );
}

export default Rules;

const RulesR = styled.div`
  background-color: #f8e5e5;
  padding: 20px;
  /* margin: 20px; */
  /* margin-bottom: 50px; */
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  transition: 0.3s background ease-in;
  h2{
    font-size: 24px;
  }
  .rule{
    margin-top: 24px;
  }
  
`;
