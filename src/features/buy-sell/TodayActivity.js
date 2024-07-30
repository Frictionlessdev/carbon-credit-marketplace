import styled from "styled-components";
import { getMonth } from "date-fns";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 6rem 8rem 9rem 8rem 2rem 12rem;
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function prepareData(emissions) {
  const aggregatedEmissions = [
    {
      month: "JAN",
      emission: 0,
      creditBalance: 0,
    },
    {
      month: "FEB",
      emission: 0,
      creditBalance: 0,
    },
    {
      month: "MAR",
      emission: 0,
      creditBalance: 0,
    },
    {
      month: "APR",
      emission: 0,
      creditBalance: 0,
    },
    {
      month: "MAY",
      emission: 0,
      creditBalance: 0,
    },
    {
      month: "JUN",
      emission: 0,
      creditBalance: 0,
    },
    {
      month: "JUL",
      emission: 0,
      creditBalance: 0,
    },
    {
      month: "AUG",
      emission: 0,
      creditBalance: 0,
    },
    {
      month: "SEP",
      emission: 0,
      creditBalance: 0,
    },
    {
      month: "OCT",
      emission: 0,
      creditBalance: 0,
    },
    {
      month: "NOV",
      emission: 0,
      creditBalance: 0,
    },
    {
      month: "DEC",
      emission: 0,
      creditBalance: 0,
    },
  ];

  const data = emissions.reduce((acc, curr) => {
    const month = getMonth(curr.created_at);
    if (month === 6 && curr.totalEmission > 25) {
      console.log("month", month, "emission", curr.totalEmission);
      console.log("before: ", acc[month].emission);
    }
    const emission = acc[month].emission + curr.totalEmission;

    acc[month].emission = Math.round(emission * 100) / 100;
    if (month === 6 && curr.totalEmission > 25) {
      console.log("after: ", emission);
      console.log("final: ", acc[month].emission);
    }
    acc[month].creditBalance += curr.creditBalance;
    return acc;
  }, aggregatedEmissions.slice());

  return data;
}

function TodayActivity({ emissions }) {
  const data = prepareData(emissions);

  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Actions</Heading>
      </Row>

      {data?.length > 0 ? (
        <TodayList>
          <ListHeader>
            <Title>Month</Title>
            <Title>Status</Title>
            <Title>Carbon (KgCo2e)</Title>
            <Title>Offset (KgCo2e)</Title>
          </ListHeader>
          {data.map((activity) =>
            activity.emission !== activity.creditBalance ? (
              <TodayItem activity={activity} key={activity.month} />
            ) : (
              ""
            )
          )}
        </TodayList>
      ) : (
        <NoActivity>No activity today...</NoActivity>
      )}
    </StyledToday>
  );
}

export default TodayActivity;
