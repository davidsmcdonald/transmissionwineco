import styled from "styled-components";

const FooterStyles = styled.header`
  .bar {
    /* border-bottom: 4px solid var(--black, black); */
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: auto 1fr;
    /* border-bottom: 1px solid var(--black, black); */
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="foot-text">
        <p>From the central coast.</p>
        <p>
            Paso Robles is a special place. These wines honor it with transparency, delicacy, and life. 
            </p>
            Currently
            <p>
            Zinfandel Paso Robles
            Grenache Paso Robles
            Disorder Paso Robles</p>
      </div>
      <div className="contact">
        Transmission Wine Co.
        Paso Robles, CA
        805.434.8004
        david@transmissionwines.com
      </div>
      
    </FooterStyles>
  );
}