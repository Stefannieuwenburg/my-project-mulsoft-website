import React from "react";
import styled, { css } from "styled-components";

import FooterLogo from "../../assets/logo/MuleSoftlogo.png";
import { theme } from "../../GlobalStyle";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 25em;
  height: 10em;

  ${({ inline }) =>
    inline &&
    css`
      width: 90px;
      height: 40px;
      margin-right: 6px;
    `};

  ${({ small }) =>
    small &&
    css`
      width:15em;
      height: 5em;
    `};
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "30px" : small ? "30px" : "50px"};
  color: ${({ inline }) => (inline ? "#fff" : theme.primary)};
  font-weight: 900;
`;

export function Logo(props) {
  const { inline, small } = props;

  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImg src={FooterLogo} inline={inline} small={small} />
      <LogoText inline={inline} small={small}>
        Mulsoft
      </LogoText>
    </LogoContainer>
  );
}
