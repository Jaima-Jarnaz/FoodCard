import styled from "styled-components";
const SectionContainer = styled.div`
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 0;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 1); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
`;

export default SectionContainer;
