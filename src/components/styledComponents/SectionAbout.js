import styled from "styled-components";
const SectionAbout = styled.div`
  transform: translate(0px, 170px);

  & h1 {
    margin-bottom: 15px;
    font-size: 35px;
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
  }

  & button:hover {
    background: linear-gradient(to right, #00f260, #0575e6);
  }
`;

export default SectionAbout;
