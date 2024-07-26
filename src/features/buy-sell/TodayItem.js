import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";
import { LuLeaf, LuLeafyGreen } from "react-icons/lu";

import { Leaf } from "../../ui/Leaf";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 5rem 4rem 6rem 12rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Emission = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { month, emission, creditBalance } = activity;
  const status = emission < creditBalance;
  return (
    <StyledTodayItem>
      {status ? (
        <Tag type="green">Surplus</Tag>
      ) : (
        <Tag type="blue">Deficit</Tag>
      )}
      <Emission>{emission}</Emission>
      <Emission>{creditBalance}</Emission>
      <Leaf src="icons8-leaf-48.png" />{" "}
      {status && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          // to={`/checkin/${id}`}
        >
          Sell
        </Button>
      )}
      {!status && <CheckoutButton />}
    </StyledTodayItem>
  );
}

export default TodayItem;
