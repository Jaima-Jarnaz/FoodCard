import styled from "styled-components";

const Title = styled.div`
  font-size: 58px;
  font-style: italic;
  color: white;
  z-index: 1;
  top: 42%;
  left: 28%;
  position: absolute;
  opacity: 1;
  transform: rotateY(0) scale(1);

  & span {
    color: white;
    background-color: #78808480;
    border-radius: 2px;
    box-shadow: 3px 3px 0 #af9e9e;
    font-size: 48px;
    padding: 6px 8px;
    margin-right: 6px;
  }

  & button {
    background: linear-gradient(to right, #11998e, #38ef7d);
    padding: 1.3rem;
    top: 18rem;
    left: 39%;
    position: absolute;
    font-size: 16px;
    border: none;
    box-shadow: 5px 3px 26px -2px #121a1a;
    text-transform: uppercase;
  }
`;

export default Title;
