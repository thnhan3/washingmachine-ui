import axios from "axios";

// Đặt base URL cho API, sử dụng proxy đã cấu hình trong Vite
const REACT_APP_API_URL = "/api";

// Lấy danh sách tất cả các washing machines
export const getWashingMachines = async () => {
  try {
    const response = await axios.get(REACT_APP_API_URL);

    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Expected an array but received:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching washing machines:", error);
    throw error;
  }
};

// Cập nhật thông tin một washing machine dựa trên id
export const updateWashingMachine = async (id, data) => {
  const url = `${REACT_APP_API_URL}/${id}`;
  try {
    const response = await axios.put(url, data);

    if (typeof response.data === "object" && response.data !== null) {
      return response.data;
    } else {
      console.error("Expected a JSON object but received:", response.data);
      return {};
    }
  } catch (error) {
    console.error(`Error updating washing machine with id ${id}:`, error);
    throw error;
  }
};

// Lấy thông tin một washing machine dựa trên id
export const getWashingMachine = async (id) => {
  const url = `${REACT_APP_API_URL}/${id}`;
  try {
    const response = await axios.get(url);

    if (typeof response.data === "object" && response.data !== null) {
      return response.data;
    } else {
      console.error("Expected a JSON object but received:", response.data);
      return {};
    }
  } catch (error) {
    console.error(`Error fetching washing machine with id ${id}:`, error);
    throw error;
  }
};
