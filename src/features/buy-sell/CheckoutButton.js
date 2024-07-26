import Button from "../../ui/Button";

function CheckoutButton({ bookingId }) {
  // const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      variation="primary"
      size="medium"
      // onClick={() => checkout(bookingId)}
      // disabled={isCheckingOut}
    >
      Offset now
    </Button>
  );
}

export default CheckoutButton;
