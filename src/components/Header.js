import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
// import { FlashOffRounded } from "@material-ui/icons";
import { selectCars } from "../features/car/carSlice"
import { useSelector } from 'react-redux';
import carSlice from "../features/car/carSlice";
function Header() {
  const [CoustomStatus, setStatus] = useState(false);
  const cars = useSelector(selectCars)
  // const theme = useTheme()

  return (
    <Container>
      <Logo>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      </Logo>
      <SubMenu>
        <Menu>
          {cars && cars.map((car, index)=>(<a class= "hover" key={index} href="#">{car}</a>))}
          {/* <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
          <a href="#">Solar Roof </a>
          <a href="#">Solar Panels</a> */}
        </Menu>
      </SubMenu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
      </RightMenu>

      <MenuBtn onClick={() => setStatus(true)}>
        <p className="opacity">Menu</p>
      </MenuBtn>
      <SideBar show={CoustomStatus}>
        <div className="sidebar__inner">
          <div className="list__wrapper">
            <CloseWrapper>
              <CustomClose onClick={() => setStatus(false)} />
            </CloseWrapper>
            {cars && cars.map((car, index)=>(<li>
              <a href="#">{car}</a>
            </li>))}
            
            <li>
              <a href="#">Used Inventory</a>
            </li>
            <li>
              <a href="#">Trade-In</a>
            </li>
            <li>
              <a href="#">Test Drive</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
            {/* <li>
              <a href="#">Powerwall</a>
            </li>
            <li>
              <a href="#">Commercial Energy</a>
            </li>
            <li>
              <a href="#">Utilities</a>
            </li>
            <li>
              <a href="#">Charging</a>
            </li>
            <li>
              <a href="#">Find Us</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li> */}
          </div>
        </div>
      </SideBar>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  // width:100vw;
  justify-content: space-between;
  z-index: 1;
`
const Logo = styled.div`
flex-basis: 0px;
flex-growth: 1;
align-items: center;
display: flex;

`
const Menu = styled.div`
display: flex;
align-items:center;
flex: 1;
justify-content: center;
top:0;
left:0;
right:0;
// width:100vw;
// margin-left:190px;



a{
  display: flex;
  font-family: 'IBM Plex Sans';
  font-size: 0.9rem;
  
  font-weight: bold;
  
  // letter-spacing:1px;
  padding:0 20px;
  color:black;
  justify-content: center;
  align-items:center;
  padding-bottom:3px;
  
}
@media (max-width:1200px){
  display:none;
}

`
const RightMenu = styled.div`
display:flex-end;
a{
  font-family: 'IBM Plex Sans';
  font-size: 0.9rem;
  font-weight: bold;
  
  letter-spacing:1px;
  padding:0 10px;
  color:black
  align-items:center;
  
  
}
@media (max-width:1200px){
  display:none;
}

`;
const MenuBtn = styled.div`
  // we have styled "menu button" in index.css (class = opacity)
`;

const SubMenu = styled.div`
// display: flex;
// align-items:center;
// text-align:center;
// justify-content: center;


//   @media (max-width: 1200px) {
//     display: none;
//   }
`
const SideBar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;

  .sidebar__inner {
    position: relative;
    text-align: start;
    background: rgba(255, 255, 255, 0.5);
    height: 100%;
    width: 100%;
    .list__wrapper{
      position: absolute;
      width: 300px;
      top:0;
      right: 0;
      height: 100%;
      background-color: white;
      z-index: 16;
      list-style-type: none;
      padding: 20px;
      display: flex;
      flex-direction: column;
      overflow: ${(props) => (props.show ? "auto" : "none")};
      // transition: transform 0.5s ease-in;
      li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a {
          font-weight: 600;
        }
      }
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
