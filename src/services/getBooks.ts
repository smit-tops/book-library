import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://openlibrary.org/",
});

export async function getBookService(query: string) {
  // const sortQuery = sortBy ? `&sort=${sortBy}` : "";
  try {
    const { data } = await axiosInstance.get(`search.json?${query}`);
    return { status: true, data };
  } catch (error) {
    return { status: false, data: null };
  }
}
