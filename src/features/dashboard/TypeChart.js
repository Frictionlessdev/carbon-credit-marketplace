import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useDarkMode } from "../../context/DarkModeContext";
import { compareAsc, subDays } from "date-fns";

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const startDataLight = [
  {
    type: "TRANSPORTATION",
    name: "Transportation",
    value: 2,
    color: "#ef4444",
  },
  {
    type: "ENERGY_USE",
    name: "Energy use",
    value: 1,
    color: "#f97316",
  },
  {
    type: "CORPORATE_SUSTAINABILITY",
    name: "Corporate sustainability",
    value: 4,
    color: "#eab308",
  },
  {
    type: "INDUSTRIAL_CARBON",
    name: "Industrial carbon",
    value: 5,
    color: "#84cc16",
  },
  // {
  //   type: "Industrial carbon",
  //   value: 0,
  //   color: "#22c55e",
  // },
  // {
  //   type: "Industrial carbon",
  //   value: 0,
  //   color: "#14b8a6",
  // },
  // {
  //   type: "Industrial carbon",
  //   value: 0,
  //   color: "#3b82f6",
  // },
  // {
  //   type: "Industrial carbon",
  //   value: 0,
  //   color: "#a855f7",
  // },
];

const startDataDark = [
  {
    type: "TRANSPORTATION",
    name: "Transportation",
    value: 2,
    color: "#b91c1c",
  },
  {
    type: "ENERGY_USE",
    name: "Energy use",
    value: 1,
    color: "#c2410c",
  },
  {
    type: "CORPORATE_SUSTAINABILITY",
    name: "Corporate sustainability",
    value: 4,
    color: "#a16207",
  },
  {
    type: "INDUSTRIAL_CARBON",
    name: "Industrial carbon",
    value: 4,
    color: "#4d7c0f",
  },
  // {
  //   type: "Industrial carbon",
  //   value: 0,
  //   color: "#15803d",
  // },
  // {
  //   type: "Industrial carbon",
  //   value: 0,
  //   color: "#0f766e",
  // },
  // {
  //   type: "Industrial carbon",
  //   value: 0,
  //   color: "#1d4ed8",
  // },
  // {
  //   type: "Industrial carbon",
  //   value: 0,
  //   color: "#7e22ce",
  // },
];

function prepareData(emissions, startData) {
  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.type === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = emissions.reduce((acc, curr) => {
    const type = curr.type.toUpperCase();
    return incArrayValue(acc, type);
  }, startData);

  return data;
}

function TypeChart({ emissions, numDays }) {
  const { isDarkMode } = useDarkMode();
  const startData = isDarkMode ? startDataDark : startDataLight;

  const filteredData = emissions.filter((emission) => {
    const date = subDays(new Date(), numDays - 1);

    return compareAsc(date, emission.created_at) === -1;
  });

  const data = prepareData(filteredData, startData);
  // console.log("chartdata", data);

  return (
    <ChartBox>
      <Heading as="h2">Carbon Footprint Type</Heading>
      <ResponsiveContainer widht="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            nameKey="name"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="50%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell fill={entry.color} stroke={entry.color} key={entry.name} />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            align="right"
            width="35%"
            layout="vertical"
            iconSize={10}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default TypeChart;
