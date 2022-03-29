import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";

const OverView = () => {
  const Overview = styled.div``;
  const OverViewContainer = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
  `;
  const Card = styled.div`
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    margin-right: 20px;
    font-weight: bolder;
    :nth-child(1) {
      background-color: #2e294e;
      color: white;
    }
    :nth-child(2) {
      background-color: #832161;
      color: white;
    }
    :nth-child(3) {
      background-color: #a2d729;
      color: white;
    }
    :nth-child(4) {
      background-color: #ed254e;
      color: white;
    }
  `;
  const CardTop = styled.div`
    // background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
  `;
  const CardNum = styled.span`
    font-size: 40px;
    margin-bottom: 20px;
  `;
  const CardSpan = styled.span``;
  const CardDesc = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    font-size: 20px;
    padding: 10px;

    color: black;
  `;
  return (
    <Overview>
      <OverViewContainer>
        <Card>
          <CardTop>
            <CardNum>10</CardNum>
            <CardSpan>10 New</CardSpan>
          </CardTop>
          <CardDesc>New Profiles</CardDesc>
        </Card>
        <Card>
          <CardTop>
            <CardNum>20</CardNum>
            <CardSpan>20 Liked</CardSpan>
          </CardTop>
          <CardDesc>Liked Your Profile</CardDesc>
        </Card>
        <Card>
          <CardTop>
            <CardNum>30</CardNum>
            <CardSpan>30 Shortlisted</CardSpan>
          </CardTop>
          <CardDesc>Shortlisted your Profile</CardDesc>
        </Card>
        <Card>
          <CardTop>
            <CardNum>40</CardNum>
            <CardSpan>40 View</CardSpan>
          </CardTop>
          <CardDesc>Viewed Your Profile</CardDesc>
        </Card>
      </OverViewContainer>
    </Overview>
  );
};

export default OverView;
