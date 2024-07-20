import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
