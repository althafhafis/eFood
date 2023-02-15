import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [itemId, setItemId] = useState();
  const Items = [
    { id: 1, title: "Recommended", link: "/" },
    { id: 2, title: "Breakfast", link: "/breakfast" },
    { id: 3, title: "Lunch", link: "/lunch" },
    { id: 4, title: "Dinner", link: "/dinner" },
    { id: 5, title: "Ice Cream", link: "/icecream" },
    { id: 6, title: "Coffee", link: "/coffee" },
  ];

  const setEachId = (id) => {
    setItemId(id);
  };
  return (
    <>
      <NavBar>
        <Navs>
          {Items.map((item) => (
            <Item key={item.id} onClick={() => setEachId(item.id)}>
              <Menu to={item.link} className={item.id === itemId && "setColor"}>
                {item.title}
              </Menu>
            </Item>
          ))}
        </Navs>
      </NavBar>
    </>
  );
}
const NavBar = styled.div`
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 20px;
`;
const Navs = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-bottom: 5px;
  @media all and (max-width: 768px) {
    width: 95%;
  }
  @media all and (max-width: 640px) {
    width: 100%;
  }
  @media all and (max-width: 360px) {
    display: none;
  }
`;
const Menu = styled(Link)`
  color: #747474;
  font-size: 13px;
  position: relative;
  // &::after {
  //   content: "";
  //   position: absolute;
  //   border-bottom: 1px solid var(--orange);
  //   height: 1px;
  //   width: 100px;
  //   bottom: -5px;
  //   left: -5px;
  //   opacity: 0;
  // }
  &:hover {
    font-weight: 700;
    color: #000;
  }
  &:hover::after {
    opacity: 1;
  }
  @media all and (max-width: 640px) {
    font-size: 10px;
  }
  @media all and (max-width: 480px) {
    font-size: 8px;
  }
  &.setColor {
    color: #000;
    border-bottom: 1px solid #f46801;
    padding-bottom: 6px;
    font-weight: 700;
  }
`;
const Item = styled.div``;
