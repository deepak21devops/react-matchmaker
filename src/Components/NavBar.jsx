import React from "react";
import styled from "styled-components";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const NavBar = () => {
  const NavBar = styled.div`
    // background-color: red;
  `;
  const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color: #f3ffb6;
  `;
  const MenuList = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 40px;
  `;
  const MenuItem = styled.li`
    list-style-type: none;
    margin-right: 20px;
    cursor: pointer;
    padding: 10px;

    transition: all 0.5s ease;
    font-weight: bold;

    :hover {
      background-color: #3a1772;
      color: white;
    }
  `;

  const ProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 20px;
    cursor: pointer;
  `;
  const NotifyDiv = styled.div`
    position: relative;
  `;
  const NotifySpan = styled.span`
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bolder;
    right: 0;
    top: -10px;
    left: 13px;
    font-size: 12px;
  `;

  return (
    <NavBar>
      <NavContainer>
        <MenuList>
          <MenuItem>MY HOME</MenuItem>
          <MenuItem>SEARCH</MenuItem>
          <MenuItem>MATCHES</MenuItem>
          <MenuItem>MAILBOX</MenuItem>
          <MenuItem>UPGRADE NOW</MenuItem>
        </MenuList>
        <ProfileContainer>
          <NotifyDiv>
            <NotificationsActiveOutlinedIcon />
            <NotifySpan>20</NotifySpan>
          </NotifyDiv>

          <ProfileImage src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></ProfileImage>
          <KeyboardArrowDownOutlinedIcon
            style={{ cursor: "pointer", marginRight: "20px" }}
          />
        </ProfileContainer>
      </NavContainer>
    </NavBar>
  );
};

export default NavBar;
