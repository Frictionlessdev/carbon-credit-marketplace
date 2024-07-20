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

export async function getMonthlyEmissions({ userId }) {
  const res = fetch(`http://localhost:9000/emissions?userId=${userId}`);

  if (!res.ok) {
    throw new Error();
  }
}
