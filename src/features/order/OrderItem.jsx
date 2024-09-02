import { PropTypes } from "prop-types";
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 px-4 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "Loading" : ingredients?.join(", ")}
      </p>
    </li>
  );
}
OrderItem.propTypes = {
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.array,
  item: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    totalPrice: PropTypes.number,
  }).isRequired,
};

export default OrderItem;
