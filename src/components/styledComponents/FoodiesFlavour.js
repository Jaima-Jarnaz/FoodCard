import styled from "styled-components";
const FoodiesFlavour = styled.div`
  transform: translate(0px, 150px);
  height: 600px;
  text-align: center;
  width: 52%;
  margin: auto;
  transition: 0.25s ease box-shadow, 0.25s ease transform;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.8);

  & hover {
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.4);
    transform: scale(1.025);
  }

  & h1 {
    padding-top: 80px;
    font-size: 42px;
  }

  & p {
    font-size: 20px;
    margin: 43px;
    line-height: 2;
    text-align: center;
  }

  & button {
    padding: 18px 7rem;
    font-size: 24px;
    background: linear-gradient(to right, #00b09b, #96c93d);
    border: none;
    color: white;
    margin-top: 70px;
  }

  & button:hover {
    background: linear-gradient(to right, #00f260, #0575e6);
  }
`;

export default FoodiesFlavour;
