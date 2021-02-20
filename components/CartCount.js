import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const Dot = styled.div`
  background: var(--black, black);
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  line-height: 1rem;
  min-width: 1rem;
  margin-left: 1rem;
  font-feature-settings: 'tnum';
  font-variant-numeric: 'tabular-nums';
`;

export default function CartCount({ count }) {
  return <Dot>{count}</Dot>;
}
