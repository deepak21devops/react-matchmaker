import React from "react";
import styled from "styled-components";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const SideBar = () => {
  const SideContainer = styled.div`
    flex: 1.3;
    // background-color: red;
    padding: 10px;
    background-color: #f8f0fb;
  `;
  const Logo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  `;
  const LogoImg = styled.img`
    width: 100px;
    cursor: pointer;
  `;
  const SideList = styled.ul``;
  const SideItems = styled.li`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.5s ease;
    color: #031a6b;
    :hover {
      background-color: #001f54;
      color: white;
    }
  `;
  const UserName = styled.div``;
  const List = styled.span`
    display: flex;
    align-items: center;
  `;
  const ListNotify = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bolder;
    font-size: 13px;
  `;
  return (
    <SideContainer>
      <Logo>
        <LogoImg src="/images/logo2.png"></LogoImg>
      </Logo>
      <SideList>
        <SideItems>
          <List>
            <EmailOutlinedIcon style={{ marginRight: "10px" }} />
            Messages
          </List>
          <ListNotify>10</ListNotify>
        </SideItems>
        <SideItems>
          <List>
            <ChatOutlinedIcon style={{ marginRight: "10px" }} />
            My Posts
          </List>
          <ListNotify>250</ListNotify>
        </SideItems>
        <SideItems>
          <List>
            <ThumbUpOutlinedIcon style={{ marginRight: "10px" }} />
            Liked Profiles
          </List>
          <ListNotify>300</ListNotify>
        </SideItems>
        <SideItems>
          <List>
            <AssignmentTurnedInOutlinedIcon style={{ marginRight: "10px" }} />
            Shortlisted Profiles
          </List>
          <ListNotify>20</ListNotify>
        </SideItems>
        <SideItems>
          <List>
            <ThumbDownAltOutlinedIcon style={{ marginRight: "10px" }} />
            Rejected Profiles
          </List>
          <ListNotify>25</ListNotify>
        </SideItems>
        <SideItems>
          <List>
            <AccountCircleOutlinedIcon style={{ marginRight: "10px" }} />
            My Profile
          </List>
        </SideItems>
        <SideItems>
          <List>
            <SettingsOutlinedIcon style={{ marginRight: "10px" }} />
            Settings
          </List>
        </SideItems>
      </SideList>
      <UserName></UserName>
    </SideContainer>
  );
};

export default SideBar;
