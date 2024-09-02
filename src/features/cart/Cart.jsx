import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItem, getcart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { username } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const carts = useSelector(getcart);

  return (
    <>
      {!carts.length ? (
        <EmptyCart />
      ) : (
        <div className="px-4 py-3">
          <LinkButton to="/menu">&larr; Back to menu</LinkButton>

          <h2 className="mt-7 text-xl font-semibold capitalize">
            Your cart, {username}
          </h2>
          <ul className="mt-3 divide-y divide-stone-200 border-b">
            {carts.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>
          <div className="mt-6 flex justify-between">
            <Button type="primary" to="/order/new">
              Order pizzas
            </Button>

            <Button
              type="secondary"
              onClick={() => dispatch(clearCartItem(carts))}
            >
              Clear cart
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
