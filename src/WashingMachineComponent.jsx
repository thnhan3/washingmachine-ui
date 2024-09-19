import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { updateWashingMachine } from "./apis/api";

const WashingMachineComponent = ({ machine }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(machine.status);
  const [timeRemaining, setTimeRemaining] = useState(machine.time_remaining);

  // Giả sử updated_at là thời gian tương đối so với thời điểm hiện tại
  const getStartTime = () => {
    const currentTime = new Date();
    const [hours, minutes, seconds] = machine.updated_at.split(":");
    currentTime.setHours(hours);
    currentTime.setMinutes(minutes);
    currentTime.setSeconds(seconds);
    // Nếu thời gian đã qua, cộng thêm 24 giờ để chuyển sang ngày hôm sau
    if (currentTime < new Date()) {
      currentTime.setDate(currentTime.getDate() + 1);
    }
    return currentTime;
  };

  const [startTime, setStartTime] = useState(getStartTime());

  useEffect(() => {
    setStatus(machine.status);
    setTimeRemaining(machine.time_remaining);
    setStartTime(getStartTime());
  }, [machine]);

  const calculateEndTime = (start, duration) => {
    const startDate = new Date(start);
    startDate.setMinutes(startDate.getMinutes() + duration);
    return startDate.toLocaleTimeString();
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setStartTime(new Date());
  };

  const handleSaveClick = async () => {
    try {
      await updateWashingMachine(machine.id, {
        status,
        time: timeRemaining,
        updated_at: startTime.toISOString(),
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update washing machine:", error);
    }
  };

  const handleCloseClick = () => {
    setIsEditing(false);
    setStatus(machine.status);
    setTimeRemaining(machine.time_remaining);
    setStartTime(getStartTime());
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "EMPTY":
        return "text-green-500";
      case "WASHING":
        return "text-blue-500";
      case "ERROR":
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="p-4 border rounded shadow-md">
      {isEditing ? (
        <div>
          <h3 className="text-lg font-bold mb-2 text-purple-500">
            Edit {machine.name}
          </h3>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Status:
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="EMPTY">EMPTY</option>
              <option value="WASHING">WASHING</option>
              <option value="ERROR">ERROR</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Time Remaining:
            </label>
            <input
              type="number"
              value={timeRemaining}
              onChange={(e) => setTimeRemaining(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            onClick={handleSaveClick}
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            onClick={handleCloseClick}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      ) : (
        <div>
          <p className="text-lg font-bold">{machine.name}</p>
          <p>ID: {machine.id}</p>
          <p className={getStatusColor(status)}>Status: {status}</p>
          <p>Phút giặt: {timeRemaining}</p>
          <p>Bắt đầu lúc: {startTime.toLocaleTimeString()}</p>
          <p>Giờ xong dự kiến: {calculateEndTime(startTime, timeRemaining)}</p>
          <button
            onClick={handleEditClick}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

WashingMachineComponent.propTypes = {
  machine: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    time_remaining: PropTypes.number.isRequired,
    updated_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default WashingMachineComponent;
