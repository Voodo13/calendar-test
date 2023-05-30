import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: .46rem;
  height: .46rem;
  font-size: .40em;
  color: #ff3131;
  background-color: #fff;
  border: none;
  border-radius: .40rem;
  transition: background-color, .2s;

  @media (hover: hover) {
    &:hover {
      color: #fff;
      background-color: #ff3131;
    }
  }

  &:active {
    color: #fff;
    background-color: #ff3131;
  }
`

const AddButton = ({children}) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    );
};

export default AddButton;