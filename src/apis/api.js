import axios from "axios";
const REACT_APP_API_URL = "/api";

// Lấy danh sách tất cả washing machines
export const getWashingMachines = async () => {
  const url = `${REACT_APP_API_URL}`;
  console.log(url);
  try {
    const response = await axios.get(url);

    // Kiểm tra nếu response.data là một mảng
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Expected an array but received:", response.data);
      return []; // Trả về mảng rỗng nếu không phải mảng
    }
  } catch (error) {
    console.error("Error fetching washing machines:", error);
    throw error;
  }
};

// Cập nhật thông tin một washing machine dựa trên id và dữ liệu mới
export const updateWashingMachine = async (id, data) => {
  const url = `${REACT_APP_API_URL}/${id}`;
  console.log(url);
  try {
    const response = await axios.put(url, data);

    // Đảm bảo response.data là một đối tượng JSON
    if (typeof response.data === "object" && response.data !== null) {
      return response.data;
    } else {
      console.error("Expected a JSON object but received:", response.data);
      return {}; // Trả về đối tượng rỗng nếu không phải JSON hợp lệ
    }
  } catch (error) {
    console.error(`Error updating washing machine with id ${id}:`, error);
    throw error;
  }
};

// Lấy thông tin một washing machine dựa trên id
export const getWashingMachine = async (id) => {
  const url = `${REACT_APP_API_URL}/${id}`;
  console.log(url);
  try {
    const response = await axios.get(url);

    // Kiểm tra nếu response.data là một đối tượng JSON
    if (typeof response.data === "object" && response.data !== null) {
      return response.data;
    } else {
      console.error("Expected a JSON object but received:", response.data);
      return {}; // Trả về đối tượng rỗng nếu không phải JSON hợp lệ
    }
  } catch (error) {
    console.error(`Error fetching washing machine with id ${id}:`, error);
    throw error;
  }
};
