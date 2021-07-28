import React from "react";
import GallaryImage from "./styledComponents/GallaryImage";
import SectionAbout from "./styledComponents/SectionAbout";
import SectionContent from "./styledComponents/SectionContent";
import gallary from "../assets/gallary.jpg";

export default function Gallary() {
  return (
    <React.Fragment>
      <SectionContent>
        <SectionAbout>
          <h1>Foodies Gallary</h1>
          <p>
            Food, substance consisting essentially of protein, carbohydrate,
            fat, and other nutrients used in the body of an organism to sustain
            growth and vital processes and to furnish energy.Plants, which
            convert solar energy to food by photosynthesis, the primary food
          </p>
          <button>See more</button>
        </SectionAbout>
        <GallaryImage>
          <img src={gallary} alt="gallary"></img>
        </GallaryImage>
      </SectionContent>
    </React.Fragment>
  );
}
