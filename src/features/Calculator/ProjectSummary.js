import styled from "styled-components";
import OffsetNow from "./OffsetNow";
import { useCertificate } from "./useCertificate";

const StyledDiv = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  padding: 0.4rem;
  display: flex;
  align-items: top;
  justify-content: space-between;
`;

const Name = styled.h6`
  font-size: 1.5rem;
  padding: 0.4rem;
  letter-spacing: 0.4px;
  font-weight: 700;
  color: #4f9478;
`;
const Value = styled.h6`
  font-size: 1.2rem;

  letter-spacing: 0.4px;
  font-weight: 500;
  color: #4f9478;
  display: flex;
  align-items: top;
  justify-content: left;
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
  font-size: 1.5rem;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: var(--color-grey-600);
`;

const Description = styled.h6`
  font-size: 1.2rem;

  letter-spacing: 0.4px;
  font-weight: 500;

  color: var(--color-grey-600);
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

function ProjectSummary({ project, estimateId }) {
  const { purchaseCredits } = useCertificate();
  console.log("estimate", estimateId);
  return (
    <StyledDiv>
      <Heading>
        <Name>Project Summary</Name>
        <OffsetNow project={project} estimateId={estimateId} />
      </Heading>
      <Img src={project.image_list[0].url} />
      <Title>{project.name}</Title>
      <Value>{project.type}</Value>
      <Description>{project.short_description}</Description>
      {purchaseCredits ? (
        <StyledAnchor
          class="external-link "
          href="https://registry.verra.org/app/projectDetail/VCS/612"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Certificate
          <svg
            fill="none"
            height="14"
            viewBox="0 0 14 14"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m12.25 12.25h-10.5v-10.5h5.25v-1.5h-5.25c-.82875 0-1.5.67125-1.5 1.5v10.5c0 .8287.67125 1.5 1.5 1.5h10.5c.8287 0 1.5-.6713 1.5-1.5v-5.25h-1.5zm-3.75-12v1.5h2.6887l-7.37245 7.3725 1.06125 1.0613 7.3725-7.37255v2.68875h1.5v-5.25z"></path>
          </svg>
        </StyledAnchor>
      ) : (
        ""
      )}
    </StyledDiv>
  );
}

export default ProjectSummary;
