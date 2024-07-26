import {
  HiArrowDownTray,
  HiArrowUpTray,
  HiCalculator,
  HiOutlineBriefcase,
  HiOutlineRectangleStack,
} from "react-icons/hi2";
import Stat from "./Stat";

function Stats({ summary }) {
  const totalFootprint = summary.length > 0 ? summary[0].totalFootprint : 0;
  const totalOffset = summary.length > 0 ? summary[0].totalOffset : 0;
  const carbonBalance = summary.length > 0 ? summary[0].carbonBalance : 0;
  const actions = summary.length > 0 ? summary[0].actions : 0;
  return (
    <>
      <Stat
        title="Total Carbon Footprint"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={totalFootprint}
      />
      <Stat
        title="Total Carbon Offset"
        color="green"
        icon={<HiCalculator />}
        value={totalOffset}
        valueColor="green"
      />
      <Stat
        title="Carbon Balance"
        color="indigo"
        icon={<HiOutlineRectangleStack />}
        value={carbonBalance}
        valueColor="red"
      />
      <Stat
        title="Credit Certificates"
        color="yellow"
        icon={<HiArrowDownTray />}
        value={actions}
        skipUnit={true}
      />
    </>
  );
}

export default Stats;
