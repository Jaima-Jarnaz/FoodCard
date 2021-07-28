import styled from "styled-components";
const ServiceImageContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  display: flex;

  & section {
    padding: 15px;
  }

  & img {
    width: 97%;
    margin-top: 5rem;
    transition: 0.25s ease background-color, 0.25s ease transform;
    opacity: 0.9;
    padding-left: 4px;
    height: 20rem;
  }
  & img:hover {
    //background: linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
    transform: scale(1.025);
    transition: opacity 0.3s;
    opacity: 0.5;
  }
`;

export default ServiceImageContainer;
