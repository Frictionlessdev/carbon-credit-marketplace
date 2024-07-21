import { HiOutlineBriefcase } from "react-icons/hi2";
import SustainableProject from "./SustainableProject";
import styled from "styled-components";

const NoSustainableProjects = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function SustainableProjects({ sustainableProjects }) {
  return sustainableProjects.length > 0 ? (
    sustainableProjects.map((s) => {
      return (
        <SustainableProject
          projectName={s.projectName}
          icon={<HiOutlineBriefcase />}
          image={s.image}
          projectType={s.projectType}
          creditBalance={s.creditBalance}
        />
      );
    })
  ) : (
    <NoSustainableProjects>No Sustainable Projects found</NoSustainableProjects>
  );
}

export default SustainableProjects;
