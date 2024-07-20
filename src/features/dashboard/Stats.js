import {
  HiArrowUpTray,
  HiCalculator,
  HiOutlineBriefcase,
  HiOutlineRectangleStack,
} from "react-icons/hi2";
import Stat from "./Stat";

function Stats({ summary }) {
  const carbonCredits = summary.length > 0 ? summary[0].carbonCredits : 0;
  const carbonEmissions = summary.length > 0 ? summary[0].carbonEmissions : 0;
  const pendingActions = summary.length > 0 ? summary[0].pendingActions : 0;
  const todayActivity = summary.length > 0 ? summary[0].todayActivity : 0;
  return (
    <>
      <Stat
        title="Credits"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={carbonCredits}
      />
      <Stat
        title="Emissions (kgCoE)"
        color="green"
        icon={<HiCalculator />}
        value={carbonEmissions}
      />
      <Stat
        title="Actions"
        color="indigo"
        icon={<HiOutlineRectangleStack />}
        value={pendingActions}
      />
      <Stat
        title="Activity"
        color="yellow"
        icon={<HiArrowUpTray />}
        value={todayActivity}
      />
    </>
  );
}

export default Stats;
