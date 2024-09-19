import axios from "axios";
const REACT_APP_API_URL = "https://washingmachine-8zdc.onrender.com";
console.log(REACT_APP_API_URL);

export const getWashingMachines = async () => {
  try {
    const response = await axios.get(REACT_APP_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching washing machines:", error);
    throw error;
  }
};

export const updateWashingMachine = async (id, data) => {
  try {
    const response = await axios.put(`${REACT_APP_API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating washing machine with id ${id}:`, error);
    throw error;
  }
};

export const getWashingMachine = async (id) => {
  const response = await axios.get(`${REACT_APP_API_URL}/${id}`);
  return response.data;
};
