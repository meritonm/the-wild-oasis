import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";
import PropTypes from "prop-types";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}
CheckoutButton.propTypes = {
  bookingId: PropTypes.string.isRequired, // Adjust the type according to your actual use case
};
export default CheckoutButton;
