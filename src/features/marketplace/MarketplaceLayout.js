import styled from "styled-components";
import SustainableProjects from "./SustainableProjects";
import { useSustainableProjects } from "./useSustainableProjects";
import Spinner from "../../ui/Spinner";

const StyledMarketplaceLayout = styled.div`
  width: 890px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 30rem 30rem 30rem;
  gap: 0.5rem;
`;

function MarketplaceLayout() {
  const { isLoading, sustainableProjects } = useSustainableProjects();

  if (isLoading) return <Spinner />;

  return (
    <StyledMarketplaceLayout>
      <SustainableProjects sustainableProjects={sustainableProjects} />
    </StyledMarketplaceLayout>
  );
}

export default MarketplaceLayout;
