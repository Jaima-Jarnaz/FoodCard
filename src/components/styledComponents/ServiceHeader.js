import styled from "styled-components";
const ServiceHeader = styled.div`
  transform: translate(0px, 170px);
  background-color: black;
  color: white;
  text-align: center;
  padding: 6rem;
  margin-top: 95px;
  height: 500px;

  & h1 {
    padding-top: 15px;
    font-size: 35px;
  }

  & p {
    font-size: 20px;
    margin: 43px;
    line-height: 2;
    text-align: center;
  }
`;

export default ServiceHeader;
