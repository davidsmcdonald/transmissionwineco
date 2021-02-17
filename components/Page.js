import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  -@font-face {
    font-family: radnika_next;
    src: url('/static/radnikanext-medium-webfont.woff2');
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --saberBlue: #6BDFFF;
    --red: #ff1234;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09)
    box-sizing: border-box;
    font-size: 62.5%--black;
    *, *:before, *:after {
      box-sizing: inherit;
    } 

  }

  body {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 8rem 2rem 2rem 2rem;
`;

const Waves = styled.img`
  width: 100%;
  /* position: fixed;
  z-index: 0; */
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Waves src="/static/waves.jpg" alt="" />
    </div>
  );
}
