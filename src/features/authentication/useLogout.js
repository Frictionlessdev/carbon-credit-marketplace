import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const isLoading = false;
  const logout = function () {
    navigate("/login", { replace: true });
  };
  return { logout, isLoading };
}
