import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../../services/apiCredits";

export function useSummary() {
  const [searchParams] = useSearchParams();
  const userId = "shivi.bhardwaj@natwest.com";

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const { isLoading, data: summary } = useQuery({
    queryFn: () => getSummary({ userId }),
    queryKey: ["summary", userId],
  });

  return { isLoading, summary, numDays };
}
