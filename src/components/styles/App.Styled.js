import styled from "styled-components";

export const Calculator = styled.div`
  height: 750px;
  max-width: 330px;
  background-color: white;
  padding: 32px;
  border-radius: 25px 25px 0px 0px;
  bottom: 0px;

  @media (min-width: 965px) {
    display: flex;
    height: 380px;
    max-width: 900px;
    border-radius: 25px;
    align-items: center;
  }

  div {
    @media (min-width: 965px) {
      width: 400px;
    }
  }
`;
