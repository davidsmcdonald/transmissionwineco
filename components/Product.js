import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <p>
        <Link href={`product/${product.id}`}>{product.name}</Link>
      </p>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <div className="buttonList">
        <Link 
          href={{
            pathname: 'update',
            query: {
            id: product.id,
            },
          }}
        >
          Edit ✎
        </Link>
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>
  );
}
