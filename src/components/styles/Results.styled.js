import styled from "styled-components";

export const Result = styled.div`
  background-color: #00474b;
  width: 100%;
  margin: 32px auto;
  border-radius: 15px;
  padding-bottom: 1px;

  @media (min-width: 965px) {
    height: 100%;
    width: 350px;
  }
  .forFlex {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    h1 {
      font-size: 32px;
      color: #26c2ae;

      @media (min-width: 965px) {
        font-size: 48px;
      }
    }

    h2 {
      color: white;
      font-size: 16px;
    }

    p {
      color: #7f9d9f;
      font-size: 13px;
    }
  }

  .tipAmount {
    padding-top: 31px;
  }

  .totalAmount {
    margin-top: 25px;
  }

  button {
    font-size: 20px;
    width: 90%;
    height: 48px;
    background-color: #0d686d;
    color: #00474b;
    display: block;
    margin: 35px auto;
    border: none;
    border-radius: 5px;

    @media (min-width: 965px) {
      margin-top: 100px;
      width: 333px;
    }
  }

  .isActivate {
    background-color: #26c2ae;
    color: #00474b;
  }

  .isNotActivate {
    background-color: #0d686d;
  }

  @media (min-width: 965px) {
    .isActivate:hover {
      background-color: #9fe8df;
      cursor: pointer;
    }
  }
`;
