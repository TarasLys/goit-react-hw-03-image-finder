import axios from 'axios';


const API_KEY = '40175066-fc06551b58f265feccdc9509e';
const BASE_URL = 'https://pixabay.com/api/';
const api = axios.create({ baseURL: BASE_URL, params: { key: API_KEY } });
export async function fetchPosts(searchPost, page) {
  try {
    const response = await api.get(
      `?q=${searchPost}&page=${page}&image_type=photo&per_page=${12}&orientation=horizontal&per_page=12&safesearch=true`
    );

    const json = response.data;
    let data = json.hits;

    return data;
  } catch (error) {
    throw new Error(`HTTP error! status: ${error.response.status}`);
  }
}
