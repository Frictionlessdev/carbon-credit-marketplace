import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/nwglogo.png" : "/nwglogo.png";

  return (
    <StyledLogo>
      <StyledImg src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
