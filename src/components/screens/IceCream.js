import React from "react";
import styled from "styled-components";
import LeftBar from "./LeftBar";
import Nav from "./Nav";
import Right from "./Right";

function IceCream() {
  return (
    <>
      <Container>
        <LeftBar />
        {/* Structuring of middle container starts */}
        <MiddleContainer>
          <Header>
            <HeadLeft>
              <Heading>Welcome,Epan Danis!</Heading>
              <SmallHeading>
                Dont forget to have breakfast today yeah !
              </SmallHeading>
            </HeadLeft>
            <HeadRight>
              <Buttons>
                <MenuButton>Menu</MenuButton>
                <MealButton>Meal plans</MealButton>
                <DeliveryButton>Delivery</DeliveryButton>
              </Buttons>
              <FormSearch>
                <FormInput placeholder="Search your food..."></FormInput>
                <FormImageContainer>
                  <FormImage
                    src={require("../../Assets/images/search.svg").default}
                  ></FormImage>
                </FormImageContainer>
              </FormSearch>
            </HeadRight>
          </Header>

          <SubHeading>Find the menu you want</SubHeading>

          <Nav />

          <Content>
            <ImageContainer>
              <Image src={require("../../Assets/images/icecream.webp")}></Image>
            </ImageContainer>
            <Caption>Coming to you real soon</Caption>
          </Content>
        </MiddleContainer>
        {/* Structuring of Middle container ends */}
        <Right />
      </Container>
    </>
  );
}

export default IceCream;
const Container = styled.div`
  // height: 100vh;
  display: flex;
`;

const MiddleContainer = styled.div`
  width: 70%;
  padding: 20px 0;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-bottom: 10px;
  @media all and (max-width: 360px) {
    margin-bottom: 10px;
    height: 50px;
  }
`;
const HeadLeft = styled.div`
  width: 35%;
  @media all and (max-width: 768px) {
    width: 40%;
    @media all and (max-width: 640px) {
      width:100%;
  }
`;
const Heading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  @media all and (max-width: 980px) {
    font-size: 16px;
  }
  @media all and (max-width: 640px) {
    font-size: 25px;
  }
  @media all and (max-width: 480px) {
    font-size: 20px;
  }
  @media all and (max-width: 360px) {
    font-size: 18px;
    margin-bottom: 3px;
  }
`;
const SmallHeading = styled.h6`
  font-size: 12px;
  font-weight: 700;
  color: #757575;
  @media all and (max-width: 980px) {
    font-size: 8.5px;
  }
  @media all and (max-width: 768px) {
    font-size: 9.5px;
  }
  @media all and (max-width: 640px) {
    font-size: 11px;
  }
  @media all and (max-width: 480px) {
    font-size: 10px;
  }
  @media all and (max-width: 360px) {
    font-size: 9px;
  }
`;
const HeadRight = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;

  @media all and (max-width: 768px) {
    width: 58%;
  }
  @media all and (max-width: 640px) {
    display :none;
`;
const Buttons = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 1280px) {
    width: 50%;
  }
  @media all and (max-width: 1080px) {
    width: 55%;
  }
  @media all and (max-width: 980px) {
    width: 58%;
  }
  @media all and (max-width: 768px) {
    width: 80%;
`;
const MenuButton = styled.button`
  height: 35px;
  width: 60px;
  font-size: 12px;
  background-color: #eeeeee;
  border-radius: 50px;
  color: #7c7c7c;
  font-weight: 500;
  font-family: "Inter regular";
  &:hover {
    background-color: var(--orange);
    color: #fff;
  }
  @media all and (max-width: 980px) {
    height: 30px;
    width: 50px;
    font-size: 11px;
    // @media all and (max-width: 768px) {
    //   height: 25px;
    //   width: 40px;
    //   font-size: 9px;
    // }
`;
const MealButton = styled.button`
  height: 35px;
  width: 90px;
  font-size: 12px;
  background-color: #eeeeee;
  border-radius: 50px;
  color: #7c7c7c;
  font-weight: 500;
  font-family: "Inter regular";
  &:hover {
    background-color: var(--orange);
    color: #fff;
  }
  @media all and (max-width: 980px) {
    height: 30px;
    width: 75px;
    font-size: 11px;
`;
const DeliveryButton = styled.button`
  height: 35px;
  width: 75px;
  font-size: 12px;
  background-color: #eeeeee;
  border-radius: 50px;
  color: #7c7c7c;
  font-weight: 500;
  font-family: "Inter regular";
  &:hover {
    background-color: var(--orange);
    color: #fff;
  }
  @media all and (max-width: 980px) {
    height: 30px;
    width: 55px;
    font-size: 11px;
  }
`;
const FormSearch = styled.form`
  display: flex;
  position: relative;
  @media all and (max-width: 768px) {
    display: none;
  }
`;
const FormInput = styled.input`
  padding: 10px 15px;
  background-color: #eeeeee;
  border-radius: 50px;
  color: #7c7c7c;
  font-weight: 500;
  font-family: "Inter regular";
  width: 155px;
  font-size: 12px;
  border: none;
  @media all and (max-width: 980px) {
    width: 120px;
    padding: 9px 8px;
    font-size: 11px;

`;
const FormImageContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: 10px;
  width: 10%;
  @media all and (max-width: 980px) {
    right:3px;
`;
const FormImage = styled.img`
  width: 100%;
  display: block;
`;
const SubHeading = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  @media all and (max-width: 768px) {
    font-size: 16px;
  }
  @media all and (max-width: 360px) {
    font-size: 14px;
  }
  @media all and (max-width: 360px) {
    margin-bottom: 10px;
  }
`;
const Content = styled.div``;
const ImageContainer = styled.div`
  width: 30%;
  margin: auto;
  border-radius: 10px;
  padding-top: 20px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  display: block;
  overflow: hidden;
`;
const Caption = styled.h2`
  font-size: 1em;
  font-weight: 700;
  margin-top: 20px;
  text-align: center;
  color: var(--orange);
`;
