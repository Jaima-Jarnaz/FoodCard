import React from "react";
import SectionContainer from "./styledComponents/SectionContainer";
import SectionImage from "./styledComponents/SectionImage";
import SectionAbout from "./styledComponents/SectionAbout";
import SectionContent from "./styledComponents/SectionContent";
import Cheffood from "../assets/Cheffood.jpg";
import Gallary from "./Gallary";
import Flavour from "./Flavour";
import Service from "./Service";
import PartnerShip from "./PartnerShip";

export default function AboutSection() {
  return (
    <React.Fragment>
      <SectionContainer id="myNav">
        <SectionContent>
          <SectionImage>
            <img src={Cheffood} alt="food"></img>
          </SectionImage>
          <SectionAbout>
            <h1>Foodies World</h1>
            <p>
              Food, substance consisting essentially of protein, carbohydrate,
              fat, and other nutrients used in the body of an organism to
              sustain growth and vital processes and to furnish energy.Plants,
              which convert solar energy to food by photosynthesis, the primary
              food
            </p>
            <button>Foodies</button>
          </SectionAbout>
        </SectionContent>
        <Gallary />
        <Flavour />
        <Service />
        <PartnerShip />
      </SectionContainer>
    </React.Fragment>
  );
}
