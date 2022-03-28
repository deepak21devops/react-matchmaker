import React from "react";
import NavBar from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import styled from "styled-components";

const Home = () => {
  const MainContainer = styled.div`
    display: flex;
  `;
  const Container = styled.div`
    flex: 6;
  `;
  return (
    <MainContainer>
      <SideBar />
      <Container>
        <NavBar />
        <div>Hello</div>
      </Container>
    </MainContainer>
  );
};

export default Home;
