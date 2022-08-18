import React from "react";
import styled from "styled-components";
import { Marginer } from "./marginer";
import { OurSerivce } from "./ourService";
import { SectionTitle } from "./sectionTitle";

import Service1Img from "../assets/illustrations/Service.png";
import Service2Img from "../assets/illustrations/Mobile.png";
import Service3Img from "../assets/illustrations/Quality.png";

const ServicesContainer = styled.div`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer>
      <SectionTitle>Best Quality Software</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Fully integrated services"
        description="We build and deliver fully integrated webapps
          with customized control panels that fit your 
          compnay needs"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Mobile optimized"
        description="We build and deliver fully integrated webapps
          with customized control panels that fit your 
          compnay needs"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Quality is our priority"
        description="We have teams of professional developers, designers
        and managers that ensures delivering the best 
        software quality for your company"
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}
