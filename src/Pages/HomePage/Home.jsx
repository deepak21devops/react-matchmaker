import React from "react";
import NavBar from "../../Components/NavBar";
import SideBar from "../../Components/SideBar";
import styled from "styled-components";
import OverView from "../../Components/OverView";
import NewProfiles from "../../Components/NewProfiles";
import ShowProfiles from "../../Components/ShowProfiles";

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
        <OverView />
        <NewProfiles />
        <ShowProfiles />
      </Container>
    </MainContainer>
  );
};

export default Home;
