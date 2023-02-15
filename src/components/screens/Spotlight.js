import React from "react";
import styled from "styled-components";
import "../../App.css";
import products from "../json/Product.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Nav from "./Nav";

export default function Spotlight() {
  const [startDate, setStartDate] = useState(new Date());
  const [orders, setOrders] = useState([]);

  // add to cart
  const addToCart = (id) => {
    let new_food = products.find((products) => products.id === id);
    setOrders([new_food, ...orders]);
  };

  // render order function
  const renderOrder = () => {
    return orders.map((product) => {
      return (
        <BreakFastList>
          <BreakFastLeft>
            <BreakFastImgCont>
              <BreakFastImg
                src={require(`../../Assets/images/${product.image}`)}
              ></BreakFastImg>
            </BreakFastImgCont>
          </BreakFastLeft>
          <BreakFastRight>
            <Name>{product.title} </Name>
            <Pricing>
              <DisCounter>
                <Discount>
                  <DollarSign>$</DollarSign>
                  {product.Discount_Price}
                </Discount>
              </DisCounter>
              <Actual>{product.Actual_Price}</Actual>
            </Pricing>
          </BreakFastRight>
        </BreakFastList>
      );
    });
  };

  // function to render date
  function renderDate() {
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd MMM yyyy"
      />
    );
  }

  //function to render the products
  let renderProduct = () => {
    return products.map((product) => {
      return (
        <Productlist key={product.id}>
          <PicContainer>
            <Photo
              src={require(`../../Assets/images/${product.image}`)}
            ></Photo>
          </PicContainer>
          <Title>{product.title}</Title>
          <Detail>
            <PriceContainer>
              <DiscountPrice>
                <Dollar>$</Dollar>
                {product.Discount_Price}
              </DiscountPrice>
              <ActualPrice>{product.Actual_Price}</ActualPrice>
            </PriceContainer>
            <OrderButton onClick={() => addToCart(product.id)}>
              Order
            </OrderButton>
          </Detail>
        </Productlist>
      );
    });
  };
  return (
    <>
      <MainContainer>
        {/* Structuring of left container starts */}
        <LeftContainer>
          <ContentContainer>
            <LogoContainer>
              <LogoImage
                src={require("../../Assets/images/logo.svg").default}
              ></LogoImage>
            </LogoContainer>

            <WidgetContainer>
              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/menu.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/circlepiece.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/love.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/square.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/cart.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/settings.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/profile.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>

              <WidgetImageContainer>
                <WidgetImage
                  src={require("../../Assets/images/exclamation.svg").default}
                ></WidgetImage>
              </WidgetImageContainer>
            </WidgetContainer>

            <ProfilePic>
              <Picture src={require("../../Assets/images/pic.jpg")}></Picture>
            </ProfilePic>
          </ContentContainer>
        </LeftContainer>
        {/* Structuring of left container ends */}

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

          <Content>{renderProduct()}</Content>
        </MiddleContainer>
        {/* Structuring of Middle container ends */}
        {/* Structuring of Right container starts */}
        <RightContainer>
          <DateContainer>
            <HeadLine>Your meal plan</HeadLine>
            <DateBar>
              {renderDate()}
              <CalenderContainer>
                <Calender
                  src={require("../../Assets/images/calender.svg").default}
                ></Calender>
              </CalenderContainer>
              <ArrowContainer>
                <Arrow
                  src={require("../../Assets/images/arrowdown.svg").default}
                ></Arrow>
              </ArrowContainer>
            </DateBar>
          </DateContainer>

          <BreakfastContainer>
            <CaptionContainer>
              <Banner>Breakfast</Banner>
              <Purchased>Purchased</Purchased>
            </CaptionContainer>
            <Time>06.30AM</Time>
            <BreakFast>{renderOrder()}</BreakFast>
          </BreakfastContainer>

          <LunchContainer>
            <CaptionContainer>
              <Lemma>Lunch</Lemma>
              <Being>Being ordered</Being>
            </CaptionContainer>
            <Time>01.30PM</Time>
            <Lunch>
              <LunchList>
                <LunchLeft>
                  <LunchImgCont>
                    <LunchImg
                      src={require("../../Assets/images/one.jpg")}
                    ></LunchImg>
                  </LunchImgCont>
                </LunchLeft>
                <LunchRight>
                  <Name>Nasi Goreng Park Parjo </Name>
                  <Pricing>
                    <DisCounter>
                      <Discount>
                        <DollarSign>$</DollarSign>8,10
                      </Discount>
                    </DisCounter>
                    <Actual>$10,10</Actual>
                  </Pricing>
                </LunchRight>
              </LunchList>
            </Lunch>

            <Lunch>
              <LunchList>
                <LunchLeft>
                  <LunchImgCont>
                    <LunchImg
                      src={require("../../Assets/images/one.jpg")}
                    ></LunchImg>
                  </LunchImgCont>
                </LunchLeft>
                <LunchRight>
                  <Name>Nasi Goreng Park Parjo </Name>
                  <Pricing>
                    <Discount>
                      <DollarSign>$</DollarSign>8,10
                    </Discount>
                    <Actual>$10,10</Actual>
                  </Pricing>
                </LunchRight>
              </LunchList>
            </Lunch>
          </LunchContainer>

          <DinnerContainer>
            <CaptionContainer>
              <Banner>Dinner</Banner>
              <Order>Haven't ordered yet</Order>
            </CaptionContainer>
            <Time>09.30PM</Time>
            <Dinner>
              <DinnerList>
                <DinnerLeft>
                  <DinnerImgCont>
                    <DinnerImg
                      src={require("../../Assets/images/night.jpg")}
                    ></DinnerImg>
                  </DinnerImgCont>
                </DinnerLeft>
                <DinnerRight>
                  <Name>Nasi Goreng Park Parjo </Name>
                  <Pricing>
                    <Discount>
                      <DollarSign>$</DollarSign>8,10
                    </Discount>
                    <Actual>$10,10</Actual>
                  </Pricing>
                </DinnerRight>
              </DinnerList>
            </Dinner>
          </DinnerContainer>
          <DropContainer>
            <Drop>Drop here to add</Drop>
          </DropContainer>
        </RightContainer>
        {/* Structuring of right container ends */}
      </MainContainer>
      {/* Structuring ends*/}
    </>
  );
}
const MainContainer = styled.section`
  // height: 100vh;

  display: flex;
`;
const LeftContainer = styled.aside`
  width: 10%;
  padding: 20px 0;
  @media all and (max-width: 768px) {
    width: 12%;
  }
  @media all and (max-width: 640px) {
    width: 13%;
  }
`;
const ContentContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  @media all and (max-width: 768px) {
    width: 50%;
  }
  @media all and (max-width: 640px) {
    width: 60%;
  }
`;
const LogoContainer = styled.div`
  width: 100%;
`;
const LogoImage = styled.img`
  width: 100%;
  display: block;
`;
const WidgetContainer = styled.ul`
  background: var(--orange);
  margin: 120px 0;
  padding: 20px 0;
  border-radius: 50px;
  @media all and (max-width: 768px) {
    margin: 180px 0;
  }
`;

const WidgetImageContainer = styled.li`
  width: 40%;
  margin: 0 auto 20px;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  &::after {
    content: "";
    position: absolute;
    top: -9px;
    left: -8px;
    display: block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    opacity: 0;
    border-radius: 50%;
    background-color: #ffffff;
  }
  &:hover {
    &::after {
      opacity: 0.3;
    }
  }
`;
const WidgetImage = styled.img`
  width: 100%;
  display: block;
`;
const ProfilePic = styled.div`
  border-radius: 50%;
  overflow: hidden;
  @media all and (max-width: 360px) {
    margin-top: 690px;
  }
`;
const Picture = styled.img`
  width: 100%;
  display: block;
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
const Content = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
`;
const Productlist = styled.li`
  background: #f6f5fa;
  margin-bottom: 20px;
  width: 32%;
  border-radius: 15px;
  overflow: hidden;
  @media all and (max-width: 768px) {
    flex-wrap: wrap;
    width: 48%;
  }
  @media all and (max-width: 640px) {
    width: 75%;
    margin: 0 auto 15px auto;
  }
`;
const PicContainer = styled.div`
  margin-bottom: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
`;
const Photo = styled.img`
  width: 100%;
  display: block;
`;
const Title = styled.h4`
  font-size: 15px;
  margin-left: 10px;
  margin-bottom: 15px;
  font-weight: 600;
  @media all and (max-width: 980px) {
    font-size: 12px;
  }
`;
const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  height: 35px;
  align-items: center;
  @media all and (max-width: 980px) {
    justify-content: space-around;
  }
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  @media all and (max-width: 980px) {
    width: 59%;
  }
  @media all and (max-width: 360px) {
    width: 52%;
  }
`;
const Dollar = styled.span`
  color: var(--orange);
  display: inline-block;
`;
const DiscountPrice = styled.h4`
  font-size: 20px;
  font-weight: 700;

  @media all and (max-width: 1080px) {
    font-size: 17px;
  }
  @media all and (max-width: 480px) {
    font-size: 15px;
  }
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;
const ActualPrice = styled.span`
  display: inline-block;
  color: #747474;
  text-decoration: line-through;
  font-size: 16px;
  @media all and (max-width: 980px) {
    font-size: 14px;
  }
  @media all and (max-width: 360px) {
    font-size: 11px;
  }
`;
const OrderButton = styled.button`
  background-color: var(--orange);
  border-radius: 50px;
  color: #fff;
  font-size: 12px;
  height: 25px;
  width: 50px;
  &:hover {
    cursor: pointer;
  }
  @media all and (max-width: 980px) {
    height: 20px;
    width: 40px;
    font-size: 11px;
  }
`;
const RightContainer = styled.aside`
  background: #eeeeee;
  width: 20%;
  padding: 0 15px;
  @media all and (max-width: 768px) {
    width: 25%;
    padding: 0 8px;
  }
  @media all and (max-width: 640px) {
    width: 30%;
    padding: 0 8px;
  }
  @media all and (max-width: 480px) {
    padding: 60px 8px;
  }
  @media all and (max-width: 360px) {
    padding: 40px 8px;
  }
`;
const DateContainer = styled.div`
  padding-top: 20px;
`;
const HeadLine = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  @media all and (max-width: 980px) {
    font-size: 15px;
  }
  @media all and (max-width: 480px) {
    font-size: 11px;
  }
`;
const DateBar = styled.div`
  position: relative;
`;
const CalenderContainer = styled.div`
  width: 22px;
  top: 7px;
  position: absolute;
  left: 7px;
  @media all and (max-width: 980px) {
    width: 20px;
  }
  @media all and (max-width: 480px) {
    display: none;
  }
`;
const Calender = styled.img`
  display: block;
  width: 100%;
`;
const ArrowContainer = styled.div`
  width: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
  @media all and (max-width: 980px) {
    width: 13px;
    right: 11px;
  }
  @media all and (max-width: 480px) {
    display: none;
  }
`;
const Arrow = styled.img`
  display: block;
  width: 100%;
`;
const BreakfastContainer = styled.div`
  // padding-bottom: 10px;
`;
const CaptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  @media all and (max-width: 480px) {
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;
const Banner = styled.h5`
  font-size: 15px;
  font-weight: 700;
  @media all and (max-width: 980px) {
    font-size: 12px;
  }
  @media all and (max-width: 640) {
    font-size: 11px;
  }
`;
const Purchased = styled.div`
  background: #d9ffe5;
  color: #5cbe7b;
  font-size: 11px;
  border-radius: 10px;
  padding: 3px 11px;
  font-weight: 700;
  @media all and (max-width: 980px) {
    font-size: 9px;
    // margin-left: 8px;
    padding: 3px 10px;
  }
  @media all and (max-width: 480px) {
    display: none;
  }
`;
const Time = styled.h5`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
  @media all and (max-width: 480px) {
    font-size: 10px;
  }
`;
const BreakFast = styled.ul``;
const BreakFastList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 6px;
`;
const BreakFastLeft = styled.div`
  width: 35%;
  @media all and (max-width: 980px) {
    width: 70%;
  }
  @media all and (max-width: 480px) {
    display: none;
  }
`;
const BreakFastImgCont = styled.div`
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  @media all and (max-width: 980px) {
    width: 95%;
  }
`;
const BreakFastImg = styled.img`
  display: block;
  width: 100%;
`;
const BreakFastRight = styled.div`
  width: 62%;
  @media all and (max-width: 980px) {
    width: 70%;
  }
  @media all and (max-width: 480px) {
    width: 98%;
    margin-left: 3px;
  }
`;
const Name = styled.h5`
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 10px;
  @media all and (max-width: 980px) {
    font-size: 9px;
  }
`;
const Pricing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;
const DollarSign = styled.span`
  display: inline-block;
  font-size: 10px;
  color: var(--orange);
  @media all and (max-width: 980px) {
    display: inline;
  }
`;
const Discount = styled.h4`
  font-size: 12px;
  font-weight: 700;
  @media all and (max-width: 980px) {
    font-size: 10px;
  }
`;
const Actual = styled.h6`
  font-size: 10px;
  text-decoration: line-through;
  color: #747474;
  @media all and (max-width: 980px) {
    font-size: 9px;
    margin-left: 5px;
  }
`;
const LunchContainer = styled.div``;
const Lemma = styled.h5`
  font-size: 15px;
  font-weight: 700;
  @media all and (max-width: 980px) {
    font-size: 12px;
   
`;

const Being = styled.div`
  font-size: 10px;
  border-radius: 10px;
  background: #fef3df;
  color: #dfb77f;
  padding: 3px 11px;
  font-weight: 700;
  @media all and (max-width: 980px) {
    margin-left:7px;
    font-size: 9px;
    padding: 3px 10px;
    @media all and (max-width: 640px) {
      padding: 3px 6px;
    }
    @media all and (max-width: 480px) {
      display: none;
    }
`;

const Lunch = styled.ul``;
const LunchList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 6px;
`;
const LunchLeft = styled.div`
  width: 35%;
  @media all and (max-width: 980px) {
    width: 70%;
  }
  @media all and (max-width: 480px) {
    display: none;
  }
`;
const LunchImgCont = styled.div`
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  @media all and (max-width: 980px) {
    width: 95%;
  }
`;
const LunchImg = styled.img`
  display: block;
  width: 100%;
`;
const LunchRight = styled.div`
  width: 62%;
  @media all and (max-width: 980px) {
    width: 70%;
  }
  @media all and (max-width: 480px) {
    width: 100%;
    margin-left: 3px;
  }
`;
const DisCounter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DinnerContainer = styled.div``;
const Order = styled.div`
  font-size: 10px;
  border-radius: 10px;
  background: #ffeae9;
  color: #d37670;
  padding: 3px 11px;
  font-weight: 600;
  @media all and (max-width: 980px) {
    font-size: 8px;
    padding: 3px 2px;
  }
  @media all and (max-width: 480px) {
    display: none;
  }
`;
const Dinner = styled.ul``;
const DinnerList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 6px;
`;
const DinnerLeft = styled.div`
  width: 35%;
  @media all and (max-width: 480px) {
    display: none;
  }
`;
const DinnerImgCont = styled.div`
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
`;
const DinnerImg = styled.img`
  display: block;
  width: 100%;
`;
const DinnerRight = styled.div`
  width: 62%;
  @media all and (max-width: 480px) {
    width: 100%;
    margin-left: 3px;
  }
`;
const DropContainer = styled.div`
  padding-top: 10px;
`;
const Drop = styled.div`
  font-size: 16px;
  border-radius: 10px;
  border: 1px dashed #eac1a5;
  padding: 10px 50px;
  color: #d8772a;
  font-weight: 600;
  background-color: #ffecde;
  @media all and (max-width: 1080px) {
    padding: 10px 30px;
  }
  @media all and (max-width: 980px) {
    padding: 10px 15px;
    font-size: 11px;
  }
  @media all and (max-width: 480px) {
    display: none;
  }
`;
