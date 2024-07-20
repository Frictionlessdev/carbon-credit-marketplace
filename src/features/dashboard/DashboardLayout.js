import styled from "styled-components";
import { useSummary } from "./useSummary";
import { useEmissions } from "./useEmissions";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import EmissionChart from "./EmissionChart";
import TypeChart from "./TypeChart";
import TodayActivity from "../buy-sell/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { summary, isLoading, numDays } = useSummary();
  const { emissions, isLoading: isLoading1 } = useEmissions();

  if (isLoading || isLoading1) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats summary={summary}>Statistics</Stats>

      <TodayActivity emissions={emissions} />
      <TypeChart emissions={emissions} numDays={numDays}>
        Chart sales
      </TypeChart>
      <EmissionChart emissions={emissions} numDays={numDays}>
        Today's activity
      </EmissionChart>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
