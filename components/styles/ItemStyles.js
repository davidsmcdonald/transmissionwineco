import styled from 'styled-components';

const ItemStyles = styled.div`
  background: white;
  /* border: 1px solid var(--offWhite); */
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    box-shadow: 0 12px 24px 0 rgba(0,0,0,0.09);
    width: 100%;
    height: 175px;
    object-fit: cover;
  }
  p {
    font-family: 'Courier New', Courier, monospace;
    font-style: oblique;
    line-height: 1;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 1rem;
    font-size: 1rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    /* border-top: 1px solid var(--lightGrey); */
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--lightGrey);
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default ItemStyles;
