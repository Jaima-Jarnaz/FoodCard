import React from "react";
import "../css/index.css";
import partnerimg from "../assets/partner.png";
import PartnerImage from "./styledComponents/PartnerImage";

export default function PartnerShip() {
  return (
    <React.Fragment>
      <PartnerImage id="linear">
        <section style={{ backgroundImage: `url(${partnerimg})` }}>
          <h1>Partner</h1>
        </section>
      </PartnerImage>
    </React.Fragment>
  );
}
