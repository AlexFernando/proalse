import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";

import Image from "@frontity/components/image";
import logoProalse from '../../images/logo_proalse.jpg';

const Header = ({ state }) => {
  return (
    <AllNavbar>
      <BrandContainer>
        <StyledLink link="/">
{/*           <Title><span>PRO</span> ALSE</Title> */}
          <ImageBrand src={logoProalse} width="160px" height="100px"/>
        </StyledLink>
        <MobileMenu />
      </BrandContainer>
      <Nav />
    </AllNavbar>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const AllNavbar = styled.div`
    

  @media (min-width: 768px) {
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    z-index: 10;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 12vh;
    border-bottom: 1px solid #AEB6BF;
  }
`

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--brand);
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #a8a8a8;
  height: 18vh;

  @media (min-width: 768px) {
    display: flex;
    width: auto;
    border-bottom: none;
    height: 11vh;
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 20px;
  span {
    font-weight:800;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color:var(--brand);
  transition: all 0.3s ease;
  &:hover {
    color:var(--black);
  }
`;

const ImageBrand = styled(Image)`

    max-width: 140px;
    max-height: 80px;
    margin-top: 1rem;

    @media (min-width: 768px) {
      max-width: 160px;
      max-height: 100px;
      margin-top: 0rem;
    }
`
