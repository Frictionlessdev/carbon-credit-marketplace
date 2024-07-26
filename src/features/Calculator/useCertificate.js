import { useQueryClient } from "@tanstack/react-query";

export function useCertificate() {
  const queryClient = useQueryClient();
  const project = queryClient.getQueryData(["footprint"]);
  const projectId = project?.project?.project_id;

  const purchaseCredits = queryClient.getQueryData([
    "purchaseCredits",
    projectId,
  ]);

  console.log("purchaseCredits", purchaseCredits);

  return { purchaseCredits };
}
