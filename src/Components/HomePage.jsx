import styled from "styled-components"
import { Button } from "../styled/Button"



const HomePage = ({toggle}) => {
  return (
    <Container>
        <div className="">
       <img src="./Homepage/dices.png" alt="" />
        </div>
       <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
        </div> 

    </Container>
  )
}

export default HomePage

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;
    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

`
