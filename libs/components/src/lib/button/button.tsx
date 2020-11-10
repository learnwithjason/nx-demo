import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  text?: string
}

const StyledButton = styled.button`
  color: black;
  display: block;
  margin: 1rem auto;
  width: 300px;
`;

export const Button = ({ text = "Click Me"}: ButtonProps) => {
  return (
    <StyledButton>
      {text}
    </StyledButton>
  );
};

export default Button;
