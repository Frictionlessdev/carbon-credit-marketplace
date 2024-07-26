import styled from "styled-components";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import Select from "../../ui/Select";
import CheckoutButton from "../buy-sell/CheckoutButton";
import Result from "./Result";
import { useResults } from "./useResults";
import { useState } from "react";
import { useProjectDetails } from "./useProjectDetails";

const StyledCalculator = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem 48rem;
  align-content: left;
  justify-content: left;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Travel = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: separate;
`;

function CalculatorLayout() {
  const {
    calculate,
    isGettingResults: isLoading,
    data: results,
  } = useResults();

  const { data: project, isLoading: isGettingProjectDetails } =
    useProjectDetails();

  const [milesDrivenPerWeek, setMilesDrivenPerWeek] = useState(0);
  const [milesFlownPerWeek, setMilesFlownPerWeek] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    calculate({
      inputData: {
        vehicle: {
          distance: {
            value: milesDrivenPerWeek,
            units: "km",
          },
          fuel_efficiency: {
            value: milesFlownPerWeek,
            units: "mpg",
            of: "gasoline",
          },
        },
        flight: {
          airports: ["ATL", "SFO"],
        },
        hotel: {
          hotel: {
            number_of_nights: 3,
            country: "United States",
            state_province: "Massachusetts",
            city: "Boston",
          },
        },
      },
    });
  }

  const travelOptions = [
    {
      value: "Vehicle",
      key: "vehicle",
      label: "Vehicle",
      type: "vehicle",
    },
    {
      value: "Hotel",
      key: "hotel",
      label: "Hotel",
      type: "hotel",
    },
    { value: "Flight", key: "flight", label: "Flight", type: "vehicle" },
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
              placeholder="Distance in km"
              min="0"
              step="1"
              id="flown"
              onChange={(e) => setMilesDrivenPerWeek(e.target.value)}
              disabled={isLoading}
            />
            <Input
              type="number"
              placeholder="Fuel efficiency in mpg"
              min="0"
              step="1"
              id="drive"
              onChange={(e) => setMilesFlownPerWeek(e.target.value)}
              disabled={isLoading}
            />
          </Travel>
        </FormRowVertical>

        <FormRowVertical label="Energy">
          <Input
            type="number"
            placeholder="Kilowatt hours per month"
            min="0"
            step="1"
            id="flown"
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical label="Consumption">
          <Input
            type="number"
            placeholder="Pounds spent on goods per month"
            min="0"
            step="50"
            id="flown"
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large" disabled={isLoading}>
            {!isLoading ? "Calculate" : <SpinnerMini />}
          </Button>
        </FormRowVertical>
      </Form>
      {results && project ? <Result results={results} project={project} /> : ""}
    </StyledCalculator>
  );
}

export default CalculatorLayout;
