import axios from 'axios';

interface ApiResponse {
  data: string;
}

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data as T;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

const url = 'https://api.example.com/data';

fetchData<ApiResponse>(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
