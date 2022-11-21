import styled from "styled-components";

export const Buttons = styled.div`
  margin-top: 32px;
  p {
    color: #5e7a7d;
    font-size: 16px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 190px;
    justify-content: space-between;
    align-content: space-between;
    margin-top: 24px;

    @media (min-width: 965px) {
      max-width: 94%;
      height: 110px;
    }

    button {
      width: 150px;
      height: 48px;
      border: none;
      background-color: #00474b;
      border-radius: 5px;
      color: white;
      font-size: 24px;
      cursor: pointer;

      @media (min-width: 965px) {
        width: 120px;
      }
    }

    .isActive {
      background-color: #26c2ae;
      color: #00474b;
    }

    .isNotActive {
      &:hover {
        background: #9fe8df;
        color: #00474b;
      }
    }

    input {
      width: 135px;
      border-radius: 5px;
      outline: none;
      background-color: #f3f9fa;
      border: 2px solid #f3f9fa;
      color: #00474b;
      font-size: 24px;
      text-align: right;
      cursor: pointer;

      &::placeholder {
        opacity: 0.35;
        color: #547878;
      }

      &::-webkit-inner-spin-button {
        appearance: none;
      }

      &[type="number"] {
        padding-right: 10px;
      }

      @media (min-width: 965px) {
        width: 105px;
      }
    }
  }
`;
