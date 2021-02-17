import Link from 'next/link';
import styled from 'styled-components';
import Cart from './Cart';
import Nav from './Nav';

const Logo = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
  font-size: 1.8rem;
  font-style: oblique;
  letter-spacing: .4rem;
  text-transform: uppercase;
  margin-left: 4rem;
  position: relative;
  line-height: 100%;
  /* z-index: 2; */
  /* transform: skew(-7deg); */
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  width: 100%;
  background-color: white;
  position: fixed;
  z-index: 10;
  .bar {
    /* border-bottom: 4px solid var(--black, black); */
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    margin-right: 2rem;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: auto 1fr;
    /* border-bottom: 1px solid var(--black, black); */
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">
            <div>
              Transmission
              <br />
              Wine Co.
            </div>
          </Link>
        </Logo>
        <Nav />
      </div>
      {/* <div className="sub-bar">
        <p>Search</p>
      </div> */}
      <Cart />
    </HeaderStyles>
  );
}
