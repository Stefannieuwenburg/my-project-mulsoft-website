import React from "react";
import styled from "styled-components";


import BackgroundImg from "../assets/pictures/company_team.jpg";
import { Button } from "./button";
import { Logo } from "./logo";
import { Marginer } from "./marginer";
import { Navbar } from "./navbar";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.89);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
  text-align: center;
`;



export function TopSection(props) {
  return (
      <TopContainer>
        <BackgroundFilter>
          <Navbar />
          <Marginer direction="vertical" margin="8em" />
          <Logo />
          <Marginer direction="vertical" margin="4em" />
          <MotivationalText>Software Development</MotivationalText>
          <MotivationalText>From the Best in the Industry</MotivationalText>
          <Marginer direction="vertical" margin="2em" />
          <Button>Start your Project</Button>
        </BackgroundFilter>
      </TopContainer>
  );
}
export default TopSection;
