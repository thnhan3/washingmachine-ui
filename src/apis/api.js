import axios from "axios";
const REACT_APP_API_URL = "/api";

export const getWashingMachines = async () => {
  const url = `${REACT_APP_API_URL}`;
  console.log(url);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching washing machines:", error);
    throw error;
  }
};

export const updateWashingMachine = async (id, data) => {
  const url = `${REACT_APP_API_URL}/${id}`;
  console.log(url);
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating washing machine with id ${id}:`, error);
    throw error;
  }
};

export const getWashingMachine = async (id) => {
  const url = `${REACT_APP_API_URL}/${id}`;
  console.log(url);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching washing machine with id ${id}:`, error);
    throw error;
  }
};
