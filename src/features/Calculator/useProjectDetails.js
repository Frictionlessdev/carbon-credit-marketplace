import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProjectDetails } from "../../services/apiCredits";

export function useProjectDetails() {
  const queryClient = useQueryClient();

  const data1 = queryClient.getQueryData(["footprint"]);
  const projectId = data1?.project?.project_id;

  console.log("projecid", projectId);

  const { data, isLoading } = useQuery({
    queryFn: () => getProjectDetails({ projectId }),
    queryKey: ["projectDetails", `${projectId}`],
  });

  console.log("projectdetails", data);

  return { data, isLoading };
}
