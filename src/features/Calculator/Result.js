import styled from "styled-components";
import CheckoutButton from "../buy-sell/CheckoutButton";
import ProjectSummary from "./ProjectSummary";
import { useCertificate } from "./useCertificate";

const StyledSection = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.6rem 4rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 3rem 1rem 2rem 3rem 1rem 7rem 1rem 5rem;
`;
const Title = styled.h5`
  grid-column: 1 / -1;
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
  font-weight: 700;
  color: #4f9478;
  display: flex;
  align-items: top;
  justify-content: left;
`;
const Value = styled.h6`
  font-size: 1.5rem;
  padding: 0.4rem;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: var(--color-grey-600);
  display: flex;
  align-items: top;
  justify-content: left;
`;
const Line = styled.div`
  grid-column: 1 / -1;
  height: 1px;
  background: var(--color-grey-300);
`;

const StyledAnchor = styled.a`
  color: var(--link-primary);
  text-decoration: underline;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  padding: 0.7rem;
`;

function Result({ results, project }) {
  return (
    <StyledSection>
      <Title>Result</Title>
      <Line />
      <Subtitle>Total CO2e</Subtitle>
      <Subtitle>Cost to offset</Subtitle>
      <Value>{results?.total_co2e_in_kg} kg</Value>
      <Value>
        {"¢"}
        {results?.cost.in_usd_cents.total_cost}
      </Value>
      <Line />
      <ProjectSummary project={project} estimateId={results.transaction_id} />
    </StyledSection>
  );
}

export default Result;
