import axios from "axios";

const BASE_URL = "http://localhost:3000/washingmachine";

export const getWashingMachines = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching washing machines:", error);
    throw error;
  }
};

export const updateWashingMachine = async (id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating washing machine with id ${id}:`, error);
    throw error;
  }
};

export const getWashingMachine = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};
