import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { PropTypes } from "prop-types";
import { updateOrder } from "../../services/apiRestaurant";

export default function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  console.log(data);
  return null;
}

UpdateOrder.propTypes = {
  order: PropTypes.object,
};
