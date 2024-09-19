import { useEffect, useState } from "react";
import WashingMachineList from "./WashingMachineList";
import { getWashingMachines } from "./apis/api.js";

export default function App() {
  const [washingMachines, setWashingMachines] = useState([]);
  useEffect(() => {
    const fetchWashingMachines = async () => {
      try {
        const washingMachines = await getWashingMachines();
        // washingMachines.sort((a, b) => a.id - b.id);
        setWashingMachines(washingMachines);
      } catch (error) {
        console.error("Error fetching washing machines:", error);
      }
    };
    fetchWashingMachines();
  }, []);

  return (
    <>
      <WashingMachineList washingMachines={washingMachines} />
    </>
  );
}
