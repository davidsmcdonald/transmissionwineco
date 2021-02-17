import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const ProductStyles = styled.div`
  color: var(--black, black);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'img des'
    'det det';
  max-width: var(--maxWidth);
  text-align: right;
  gap: 2rem;
  .description {
    grid-area: des;
  }
  img {
    grid-area: img;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    grid-area: det;
    font-size: 80%;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      details
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <DisplayError error={error} />;
  }
  const { Product } = data;
  return (
    <ProductStyles>
      {/* <Head>
        <h2>Transmission Wine Co. | {Product.name}</h2>
      </Head> */}
      <img
        src={Product.photo.image.publicUrlTransformed}
        alt={Product.photo.altText}
      />
      <div className="description">
        <h2>{Product.name}</h2>
        <p>{Product.description}</p>
      </div>
      <div className="details">
        <p>{Product.details}</p>
      </div>
    </ProductStyles>
  );
}
