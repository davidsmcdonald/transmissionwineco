import { gql, useMutation } from '@apollo/client';
import styled from 'styled-components';

const RemoveButton = styled.button`
  border: none;
  height: 2rem;
  background-color: white;
  margin: auto;
  :hover {
    cursor: pointer;
    background-color: var(--lightGrey);
  }
`;

const DELETE_FROM_CART_MUTATION = gql`
  mutation DELETE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function DeleteFromCart({ id }) {
  const [deleteFromCart, { loading }] = useMutation(DELETE_FROM_CART_MUTATION, {
    variables: { id },
    update,
  });
  return (
    <RemoveButton disabled={loading} type="button" onClick={deleteFromCart}>
      Delete
    </RemoveButton>
  );
}
