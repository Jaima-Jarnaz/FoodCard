import React from "react";
import ServiceHeader from "./styledComponents/ServiceHeader";
import ServiceContent from "./styledComponents/ServiceContent";
import makefood from "../assets/makefood.jpg";
import delivery from "../assets/delivery.jpg";
import buffet from "../assets/buffet.jpg";
import ServiceImageContainer from "./styledComponents/ServiceImageContainer";

export default function Service() {
  return (
    <React.Fragment>
      <ServiceHeader>
        <h1>Services</h1>
        <p>
          If you’re migrating code from a class component, note useLayoutEffect
          fires in the same phase as componentDidMount and componentDidUpdate
        </p>
      </ServiceHeader>
      <ServiceImageContainer>
        <section>
          <img src={buffet} alt="buffet"></img>
        </section>
        <section>
          <img src={delivery} alt="delivery"></img>
        </section>
        <section>
          <img src={makefood} alt="makefood"></img>
        </section>
      </ServiceImageContainer>

      <ServiceContent>
        <section>
          <h1>Services</h1>
          <p>
            If you’re migrating code from a class component, note
            useLayoutEffect fires in the same phase as componentDidMount and
            componentDidUpdate
          </p>
        </section>
        <section>
          <h1>Services</h1>
          <p>
            If you’re migrating code from a class component, note
            useLayoutEffect fires in the same phase as componentDidMount and
            componentDidUpdate
          </p>
        </section>
        <section>
          <h1>Services</h1>
          <p>
            If you’re migrating code from a class component, note
            useLayoutEffect fires in the same phase as componentDidMount and
            componentDidUpdate
          </p>
        </section>
      </ServiceContent>
    </React.Fragment>
  );
}
