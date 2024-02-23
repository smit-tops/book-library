import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://openlibrary.org/",
});

export async function getBookSercice(search: string, sortBy: string) {
  const sortQuery = sortBy ? `&sort=${sortBy}` : "";
  try {
    const { data } = await axiosInstance.get(
      `search.json?q=${search}${sortQuery}`
    );
    return { status: true, data };
  } catch (error) {
    return { status: false, data: null };
  }
}
