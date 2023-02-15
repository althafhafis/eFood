import React from "react";
import styled from "styled-components";
import { useState } from "react";
import DatePicker from "react-datepicker";

export default function Right() {
  const [startDate, setStartDate] = useState(new Date());
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
  return (
    <>
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
                  <Discount>
                    <DollarSign>$</DollarSign>8,10
                  </Discount>
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
    </>
  );
}
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
// const BreakFast = styled.ul``;
// const BreakFastList = styled.li`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 10px;
//   background-color: #fff;
//   border-radius: 6px;
// `;
// const BreakFastLeft = styled.div`
//   width: 35%;
//   @media all and (max-width: 980px) {
//     width: 70%;
//   }
//   @media all and (max-width: 480px) {
//     display: none;
//   }
// `;
// const BreakFastImgCont = styled.div`
//   width: 100%;
//   overflow: hidden;
//   border-bottom-left-radius: 6px;
//   border-top-left-radius: 6px;
//   @media all and (max-width: 980px) {
//     width: 95%;
//   }
// `;
// const BreakFastImg = styled.img`
//   display: block;
//   width: 100%;
// `;
// const BreakFastRight = styled.div`
//   width: 62%;
//   @media all and (max-width: 980px) {
//     width: 70%;
//   }
//   @media all and (max-width: 480px) {
//     width: 98%;
//     margin-left: 3px;
//   }
// `;
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
