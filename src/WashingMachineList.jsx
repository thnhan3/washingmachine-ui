import WashingMachineComponent from "./WashingMachineComponent";
import PropTypes from "prop-types";

const WashingMachineList = ({ washingMachines }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {washingMachines.map((machine, index) => (
        <WashingMachineComponent key={index} machine={machine} />
      ))}
    </div>
  );
};

WashingMachineList.propTypes = {
  washingMachines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      time_remaining: PropTypes.number.isRequired,
      updated_at: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WashingMachineList;
