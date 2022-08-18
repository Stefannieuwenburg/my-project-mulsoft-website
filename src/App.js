import React from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { Footer } from "./components/footer";
import { Marginer } from "./components/marginer";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { TopSection } from "./components/TopSection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App(props) {
  return (
    <PageContainer>
      <GlobalStyle />
      <TopSection />
      <ServicesSection />
      <Marginer direction="vertical" margin="2em" />
      <AboutSection />
      <Marginer direction="vertical" margin="8em" />
      <Footer />
    </PageContainer>
  );
}
export default App;
