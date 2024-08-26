import {PropTypes} from "prop-types"
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  console.log(typeof isLoadingIngredients,ingredients );
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 px-4">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}
OrderItem.propTypes={
  isLoadingIngredients:PropTypes.string.isRequired,
  ingredients:PropTypes.string.isRequired,
  item:PropTypes.shape({
    name:PropTypes.string,
    quantity:PropTypes.number,
    totalPrice:PropTypes.number
  }).isRequired
}

export default OrderItem;
