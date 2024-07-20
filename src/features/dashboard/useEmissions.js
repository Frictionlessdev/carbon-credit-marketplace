import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getEmissions } from "../../services/apiCredits";

export function useEmissions() {
  const [searchParams] = useSearchParams();
  const userId = "shivi.bhardwaj@natwest.com";

  const numDays = searchParams.get("last") ? searchParams.get("last") : 7;

  const { isLoading, data: emissions } = useQuery({
    queryFn: () => getEmissions({ userId, numDays }),
    queryKey: ["emissions", `last${numDays}`, userId],
  });

  return { emissions, isLoading };
}
