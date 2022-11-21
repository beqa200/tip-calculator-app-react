import styled from "styled-components";

export const Inputs = styled.div`
  width: 96%;

  @media (min-width: 965px) {
    max-width: 90%;
  }
  p {
    font-size: 16px;
    color: #5e7a7d;
    display: block;
  }

  input {
    width: 100%;
    height: 40px;
    background: #f3f9fa;
    border-radius: 5px;
    border: 2px solid #f3f9fa;
    outline: none;
    margin-top: 6px;
    text-align: right;
    font-size: 24px;
    color: #00474b;
    cursor: pointer;

    &:focus {
      border: 2px solid #26c2ae;
    }

    &::placeholder {
      opacity: 0.35;
    }

    &[type="number"] {
      padding-right: 10px;
    }

    &::-webkit-inner-spin-button {
      appearance: none;
    }

    @media (min-width: 965px) {
      width: 100%;
    }
  }

  img {
    margin-top: 19px;
    margin-left: -310px;

    @media (min-width: 965px) {
      margin-left: -355px;
    }
  }
`;
