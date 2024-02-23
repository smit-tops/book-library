import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { getBookSercice } from "../services/getBooks";
import BookList from "./BookList";

export default function SearchBook() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [bookList, setBookList] = useState<IBookData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [sortBy, setsortBy] = useState<string>("");

  const timer = useRef<NodeJS.Timeout>();

  const getBooks = useCallback(async () => {
    setLoading(true);
    const { status, data }: { status: boolean; data: BookApiResponse } =
      await getBookSercice(searchValue, sortBy);
    setLoading(false);
    if (status && data.q === searchValue) setBookList(data.docs);
  }, [searchValue, sortBy]);

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      getBooks();
    }, 1500);
  }, [getBooks]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setsortBy(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="search for book title"
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        className="form-control"
      />

      <div className="mt-2 d-flex justify-content-end">
        <select className="form-control w-25 ml-auto" onChange={handleSort}>
          <option value="">Relevance</option>
          <option value="old">Publication Year (Oldest First)</option>
          <option value="new">Publication Year (Newest First)</option>
        </select>
      </div>

      <div className="my-4">
        {loading ? (
          <p>Searching the library shelves.....</p>
        ) : (
          <BookList bookList={bookList} />
        )}
      </div>
    </div>
  );
}
