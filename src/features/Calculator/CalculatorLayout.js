import styled from "styled-components";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import Select from "../../ui/Select";
import CheckoutButton from "../buy-sell/CheckoutButton";

const StyledCalculator = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem 48rem;
  align-content: left;
  justify-content: left;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const StyledSection = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.6rem 4rem;
  overflow: hidden;
`;

const Title = styled.h5`
  font-size: 1.8rem;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: var(--color-grey-600);
  display: flex;
  align-items: top;
  justify-content: left;
`;
const Subtitle = styled.h6`
  font-size: 1.5rem;
  padding: 0.4rem;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: #4f9478;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Travel = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: separate;
`;

function CalculatorLayout() {
  const isLoading = false;
  const email = "";
  const password = "";
  function setPassword() {
    console.log("Password");
  }
  function setEmail() {
    console.log("Email");
  }
  function handleSubmit() {
    console.log("Submit");
  }

  const travelOptions = [
    { value: "Private car", key: "private_car", label: "Private car" },
    { value: "Shared car", key: "shared_car", label: "Shared car" },
    { value: "Bus", key: "shared_car", label: "Bus" },
    { value: "Train", key: "shared_car", label: "Train" },
  ];

  return (
    <StyledCalculator>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label="Travel">
          <Select options={travelOptions} value="Select travel option" />
        </FormRowVertical>

        <FormRowVertical>
          <Travel id="travel">
            <Input
              type="number"
              placeholder="Miles driven per week"
              min="0"
              step="1"
              id="flown"
            />
            <Input
              type="number"
              placeholder="Miles flown per week"
              min="0"
              step="1"
              id="drive"
            />
          </Travel>
        </FormRowVertical>

        <FormRowVertical label="Energy">
          <Select options={travelOptions} value="Select travel option" />
        </FormRowVertical>
        <FormRowVertical>
          <Input
            type="number"
            placeholder="Kilowatt hours per month"
            min="0"
            step="1"
            id="flown"
          />
        </FormRowVertical>
        <FormRowVertical label="Consumption">
          <Input
            type="number"
            placeholder="Pounds spent on goods per month"
            min="0"
            step="50"
            id="flown"
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large" disabled={isLoading}>
            {!isLoading ? "Calculate" : <SpinnerMini />}
          </Button>
        </FormRowVertical>
      </Form>
      <StyledSection>
        <Title>Result</Title>
        <Subtitle>
          Your annual carbon footprint is 12000 kg of CO2 eqvuivalent
        </Subtitle>
        <CheckoutButton />
      </StyledSection>
    </StyledCalculator>
  );
}

export default CalculatorLayout;
