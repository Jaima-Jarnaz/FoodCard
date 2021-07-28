import styled from "styled-components";
const SectionImage = styled.div`
  background: linear-gradient(to right, #11998e, #38ef7d);
  padding: 30px;

  & img {
    margin-top: 5rem;
    opacity: 0.9;
    transition: 0.25s ease box-shadow, 0.25s ease transform;
    box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.8);
  }
  & img:hover {
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.4);
    transform: scale(1.025);
  }
`;

export default SectionImage;
