import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

const StyledEmissionsChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function EmissionChart({ emissions, numDays }) {
  const isDarkMode = useDarkMode();
  //console.log(numDays);
  //console.log(emissions);
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });
  //console.log(allDates);
  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalEmissions: emissions
        .filter((emission) => isSameDay(date, new Date(emission.created_at)))
        .reduce((acc, curr) => acc + curr.totalEmission, 0),
      totalCreditBalance: emissions
        .filter((emission) => isSameDay(date, new Date(emission.created_at)))
        .reduce((acc, curr) => acc + curr.creditBalance, 0),
    };
  });

  //console.log(data);

  const colors = isDarkMode
    ? {
        totalEmissions: { stroke: "#4f46e5", fill: "#4f46e5" },
        totalCreditBalance: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalEmissions: { stroke: "#4f46e5", fill: "#c7d2fe" },
        totalCreditBalance: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledEmissionsChart>
      <Heading as="h2">
        Carbon Emissions (gCOE) from {format(allDates.at(0), "MMM dd yyyy")}{" "}
        &mdash; {format(allDates.at(-1), "MMM dd yyyy")}{" "}
      </Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data} height={300} width={700}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="g"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalEmissions"
            type="monotone"
            stroke={colors.totalEmissions.stroke}
            fill={colors.totalEmissions.fill}
            strokeWidth={2}
            name="Total emissions (gCoE)"
            unit="g"
          />
          <Area
            dataKey="totalCreditBalance"
            type="monotone"
            stroke={colors.totalCreditBalance.stroke}
            fill={colors.totalCreditBalance.fill}
            strokeWidth={2}
            name="Total Credit Balance"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledEmissionsChart>
  );
}

export default EmissionChart;
