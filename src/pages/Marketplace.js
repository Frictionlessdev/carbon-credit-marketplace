import MarketplaceLayout from "../features/marketplace/MarketplaceLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import BookingTable from "../features/bookings/BookingTable";
// import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Sustainable projects</Heading>
        {/* <BookingTableOperations /> */}
      </Row>

      <MarketplaceLayout />
    </>
  );
}

export default Bookings;
