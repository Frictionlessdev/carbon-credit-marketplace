import styled from "styled-components";
import { Leaf } from "../../ui/Leaf";
import CheckoutButton from "../buy-sell/CheckoutButton";

const StyledStat = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: grid;
  grid-template-columns: 25rem;
  grid-template-rows: 13rem 5rem 5rem 3rem;
  row-gap: 0.4rem;
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }
`;

const Img = styled.img`
  aspect-ratio: 2;
  background-color: var(--color-grey-0);
  border: 2px solid var(--color-grey-100);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-grey-100);
`;

const Title = styled.h5`
  font-size: 1.8rem;
  letter-spacing: 0.4px;
  font-weight: 700;
  color: var(--color-grey-600);
  display: flex;
  align-items: top;
  justify-content: left;
`;

const Subtitle = styled.h6`
  font-size: 1.5rem;

  letter-spacing: 0.4px;
  font-weight: 600;
  color: #4f9478;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;
`;

function SustainableProject({
  image,
  projectName,
  creditBalance,
  projectType,
}) {
  return (
    <StyledStat>
      <Img src={image} />
      <Title>{projectName}</Title>
      <Subtitle>{projectType}</Subtitle>
      <Info>
        <Value>
          {creditBalance} <Leaf src="icons8-leaf-48.png" />
        </Value>
        <CheckoutButton />
      </Info>
    </StyledStat>
  );
}

export default SustainableProject;
