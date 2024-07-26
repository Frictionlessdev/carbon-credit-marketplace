import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getResults } from "../../services/apiCredits";
import { toast } from "react-hot-toast";

export function useResults() {
  const queryClient = useQueryClient();
  const { mutate: calculate, data } = useMutation({
    mutationFn: ({ inputData }) => getResults({ inputData }),
    onSuccess: (data) => {
      toast.success(`Footprint calculation success`);
      queryClient.setQueryData(["footprint"], data);
    },
    onError: (err) => toast.error("There was an error while calculating"),
  });
  console.log("final", data);
  const isLoading = false;
  return { calculate, isLoading, data };
}
