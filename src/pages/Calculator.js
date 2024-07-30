import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CalculatorLayout from "../features/Calculator/CalculatorLayout";

function Calculator() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h4">Calculate Carbon Footprint</Heading>
      </Row>
      <CalculatorLayout />
    </>
  );
}

export default Calculator;
