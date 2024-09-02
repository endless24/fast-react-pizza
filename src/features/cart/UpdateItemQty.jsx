import { useDispatch } from "react-redux";
import { decreaseItemQty, increaseItemQty } from "./cartSlice";
import { PropTypes } from "prop-types";
import Button from "../../ui/Button";

export default function UpdateItemQty({ pizzaId, currentQty }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQty(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-semibold"> {currentQty}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQty(pizzaId))}>
        +
      </Button>
    </div>
  );
}

UpdateItemQty.propTypes = {
  pizzaId: PropTypes.number,
  currentQty: PropTypes.number,
};
