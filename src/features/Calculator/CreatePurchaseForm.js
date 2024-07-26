import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { DiSnapSvg } from "react-icons/di";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import ProjectDetail from "./ProjectDetail";
import Spinner from "../../ui/Spinner";
import { usePurchaseCredits } from "./usePurchaseCredits";
import { useCertificate } from "./useCertificate";
import DownloadButton from "../../ui/DownloadButton";

const StyledPurchaseForm = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: 48rem 48rem;
  align-content: left;
  justify-content: left;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Img = styled.img`
  aspect-ratio: 2;
  background-color: var(--color-grey-0);
  border: 2px solid var(--color-grey-100);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-grey-100);
`;

const Value = styled.p`
  font-size: 1.2rem;
  line-height: 1;
  font-weight: 200;
  padding: 0.8rem;
  height: 25rem;
  overflow: scroll;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 0.4rem;
  padding: 1rem;
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

function CreatePurchaseForm({ project = {}, estimateId, onCloseModal }) {
  const { purchase, data, isLoading } = usePurchaseCredits();
  const { purchaseCredits: certificate } = useCertificate();
  console.log("certificate", certificate);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">{project.name}</Heading>
      </Row>
      <Row>
        <Heading as="h4">{project.short_name}</Heading>
      </Row>
      <StyledPurchaseForm>
        <Description>
          <Img src={project.image_list[0].url} />
          <Value>
            {project.long_description === "N/A"
              ? project.short_description
              : project.long_description}
          </Value>
        </Description>
        <Description>
          <ProjectDetail
            label={"Location"}
            value={
              project.city + ", " + project.region + ", " + project.country
            }
          ></ProjectDetail>

          <ProjectDetail
            label={"Methodology Type"}
            value={project.type}
          ></ProjectDetail>
          <ProjectDetail
            label={"Registry"}
            value={project.registry_name}
          ></ProjectDetail>
          <ProjectDetail
            label={"Project ID"}
            value={project.registry_project_id}
          ></ProjectDetail>
          <StyledAnchor
            class="external-link "
            href="https://registry.verra.org/app/projectDetail/VCS/612"
            target="_blank"
            rel="noopener noreferrer"
          >
            Registry Listing
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
          <Buttons>
            <Button
              variation="secondary"
              type="reset"
              onClick={() => onCloseModal?.()}
            >
              Cancel
            </Button>
            {certificate ? (
              <DownloadButton
                url={certificate[0].certificate_url}
                label={"Download"}
              />
            ) : (
              <Button
                variation="primary"
                size="medium"
                onClick={() => purchase({ estimate_slug: estimateId })}
              >
                Buy
              </Button>
            )}
          </Buttons>
        </Description>
      </StyledPurchaseForm>
    </>
  );
}

export default CreatePurchaseForm;
