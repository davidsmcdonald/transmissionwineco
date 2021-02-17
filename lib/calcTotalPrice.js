export default function calcTotalPrice(cart) {
  return cart.reduce((acc, cartItem) => {
    // if product is deleted while in someone's cart
    if (!cartItem.product) return acc;
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);
}
