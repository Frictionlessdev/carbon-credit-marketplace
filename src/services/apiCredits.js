export async function getSummary({ userId }) {
  const res = await fetch(`http://localhost:9000/summary?userId=${userId}`);

  if (!res.ok) {
    throw new Error("Something went wrong with fetching summary");
  }

  const data = await res.json();

  return data;
}

export async function getEmissions({ userId, numDays }) {
  const res = await fetch(`http://localhost:9000/emissions?userId=${userId}`);

  if (!res.ok) {
    throw new Error("Something went wrong with fetching emissions data");
  }

  const data = await res.json();

  return data;
}

export async function getSustainableProjects({ country }) {
  const res = await fetch(`http://localhost:9000/sustainableProjects`);

  if (!res.ok) {
    throw new Error("Something went wrong with fetching projects data");
  }

  const data = await res.json();

  return data;
}

export async function getResults({ inputData }) {
  const res = await fetch(
    `https://api-prod-no-cert.cloverly.com/2021-10/estimates/vehicle`,
    {
      method: "POST",
      body: JSON.stringify(inputData.vehicle),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer public_key:5a8ea4ebc375c6d7",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong with calculation");
  }

  const data = await res.json();
  console.log("response", data);
  return data;
}

export async function getProjectDetails({ projectId }) {
  const res = await fetch(
    `https://api-prod-no-cert.cloverly.com/2021-10/project/${projectId}`
  );

  if (!res.ok) {
    throw new Error("Something went wrong while fetching project details");
  }

  const data = await res.json();
  console.log("projectres", data);

  return data;
}

export async function purchaseCredits(estimate) {
  console.log("estimate", estimate);
  const res = await fetch(
    `https://api-prod-no-cert.cloverly.com/2021-10/purchases`,
    {
      method: "POST",
      body: JSON.stringify(estimate),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer public_key:5a8ea4ebc375c6d7",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong while purchasing credits");
  }

  const data = await res.json();

  return data;
}
