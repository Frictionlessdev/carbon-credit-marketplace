import { useQuery } from "@tanstack/react-query";
import { getSustainableProjects } from "../../services/apiCredits";

export function useSustainableProjects() {
  const country = "all";
  const { isLoading, data: sustainableProjects } = useQuery({
    queryFn: () => getSustainableProjects({ country }),
    queryKey: ["sustainableProjects", country],
  });

  return { isLoading, sustainableProjects };
}
