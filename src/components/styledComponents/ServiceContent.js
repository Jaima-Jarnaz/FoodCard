import styled from "styled-components";
const ServiceContent = styled.div`
  display: flex;
  text-align: center;

  & section {
    padding: 54px;
    margin-top: -9rem;
    z-index: 1;
  }

  & section h1 {
    background-color: #f3f9f6;
    font-size: 20px;
    padding: 23px;
  }

  & section p {
    background-color: #f2f2f2;
    height: 150px;
    font-size: 16px;
    padding: 23px;
    line-height: 1.6em;
    transition: all 0.3s;
    word-break: break-all;
    word-wrap: break-word;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3) -5px -5px 10px
      rgba(255, 255, 255, 1);
  }

  & section p:hover {
    background: linear-gradient(to right, #1d976c, #93f9b9);
    color: white;
  }
`;

export default ServiceContent;
