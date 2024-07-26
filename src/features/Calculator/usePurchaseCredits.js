import { useMutation, useQueryClient } from "@tanstack/react-query";
import { purchaseCredits } from "../../services/apiCredits";
import toast from "react-hot-toast";

export function usePurchaseCredits() {
  const queryClient = useQueryClient();
  const project = queryClient.getQueryData(["footprint"]);
  const projectId = project?.project?.project_id;

  const {
    mutate: purchase,
    isLoading,
    data,
  } = useMutation({
    mutationFn: (estimate) => purchaseCredits(estimate),
    onSuccess: (data) => {
      toast.success(`Footprint offset success!`);
      queryClient.setQueryData(["purchaseCredits", projectId], data);
    },
    onError: () => console.log("Could not purchase credits"),
  });

  return { purchase, isLoading, data };
}
