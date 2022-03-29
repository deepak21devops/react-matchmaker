import React from "react";
import styled from "styled-components";

const NewProfiles = () => {
  const NewProfile = styled.div``;
  const NewProfileContainer = styled.div`
    padding: 20px;
    margin: 10px;
  `;
  const HeadContent = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Head = styled.h1`
    margin-bottom: 10px;
  `;
  const ViewMore = styled.h3`
    cursor: pointer;
  `;
  const Description = styled.p``;
  const MemberContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
  `;
  const MemberProfile = styled.div``;
  const ProfileImg = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
  `;
  const ProfileName = styled.h2``;
  const ProfileAge = styled.span`
    margin-right: 20px;
  `;
  const ProfileHeight = styled.span``;

  return (
    <NewProfile>
      <NewProfileContainer>
        <HeadContent>
          <Head>6 New Profiles </Head>
          <ViewMore>See More</ViewMore>
        </HeadContent>
        <Description>
          New members who have joined in the last one month
        </Description>
        <MemberContainer>
          <MemberProfile>
            <ProfileImg src="https://images.pexels.com/photos/8717924/pexels-photo-8717924.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></ProfileImg>
            <ProfileName>Anna Kendrick</ProfileName>
            <ProfileAge>21 Years</ProfileAge>
            <ProfileHeight>5`4"</ProfileHeight>
          </MemberProfile>

          <MemberProfile>
            <ProfileImg src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></ProfileImg>
            <ProfileName>Anna Kendrick</ProfileName>
            <ProfileAge>21 Years</ProfileAge>
            <ProfileHeight>5`4"</ProfileHeight>
          </MemberProfile>

          <MemberProfile>
            <ProfileImg src="https://images.pexels.com/photos/3598251/pexels-photo-3598251.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></ProfileImg>
            <ProfileName>Anna Kendrick</ProfileName>
            <ProfileAge>21 Years</ProfileAge>
            <ProfileHeight>5`4"</ProfileHeight>
          </MemberProfile>

          <MemberProfile>
            <ProfileImg src="https://images.pexels.com/photos/2772099/pexels-photo-2772099.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></ProfileImg>
            <ProfileName>Anna Kendrick</ProfileName>
            <ProfileAge>21 Years</ProfileAge>
            <ProfileHeight>5`4"</ProfileHeight>
          </MemberProfile>

          <MemberProfile>
            <ProfileImg src="https://images.pexels.com/photos/6758073/pexels-photo-6758073.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></ProfileImg>
            <ProfileName>Anna Kendrick</ProfileName>
            <ProfileAge>21 Years</ProfileAge>
            <ProfileHeight>5`4"</ProfileHeight>
          </MemberProfile>
          <MemberProfile>
            <ProfileImg src="https://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"></ProfileImg>
            <ProfileName>Anna Kendrick</ProfileName>
            <ProfileAge>21 Years</ProfileAge>
            <ProfileHeight>5`4"</ProfileHeight>
          </MemberProfile>
        </MemberContainer>
      </NewProfileContainer>
    </NewProfile>
  );
};

export default NewProfiles;
