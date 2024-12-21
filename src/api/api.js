import axios from 'axios';

const API_URL = 'https://your-api-url.com';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const addData = async (newData) => {
  try {
    const response = await axios.post(`${API_URL}/data`, newData);
    return response.data;
  } catch (error) {
    console.error('Error adding data:', error);
    return null;
  }
};

