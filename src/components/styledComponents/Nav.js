import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  margin: 0 auto;

  & ul {
    text-align: center;
  }
  & li {
    display: inline-block;
    margin: 42px;
    font-size: 22px;
    color: #ececf1;
    text-transform: uppercase;
    font-weight: 600;
    transition: 1s all;
    cursor: pointer;
  }
  & li:hover {
    background: linear-gradient(to right, #11998e, #38ef7d);
    padding: 14px;
  }
`;

export default Nav;
