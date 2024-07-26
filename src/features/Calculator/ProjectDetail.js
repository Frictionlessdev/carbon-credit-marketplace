import styled from "styled-components";

const StyledDetail = styled.div`
  padding: 0.5rem;
`;

const Label = styled.h6`
  font-size: 1.6rem;
  padding: 0.4rem;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: var(--color-grey-600);
`;

const LabelValue = styled.h6`
  font-size: 1.6rem;
  padding: 0.4rem;
  letter-spacing: 0.4px;
  font-weight: 500;
  color: #4f9478;
  display: flex;
  align-items: top;
  justify-content: left;
`;

function ProjectDetail({ label, value }) {
  return (
    <StyledDetail>
      <Label>{label}</Label>
      <LabelValue>{value}</LabelValue>
    </StyledDetail>
  );
}

export default ProjectDetail;
