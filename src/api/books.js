import axios from "axios";

const client = axios.create({
  baseURL: "https://openlibrary.org",
});

export const searchBooks = async (title, page = 1) => {
  const response = await client.get(`/search.json?title=${encodeURIComponent(title)}&page=${page}`);
  return response.data;
};
