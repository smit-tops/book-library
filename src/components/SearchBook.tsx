import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { getBookService } from "../services/getBooks";
import useDebounce from "../utils/debounce";
import { objectToQueryString } from "../utils/objectToQuery";
import { SearchForm } from "./SearchForm";
import { SearchResults } from "./SearchResult";

interface FilterState {
  page: number;
  limit: number;
  sort: string;
  q: string;
}

const initialFilters: FilterState = {
  page: 1,
  limit: 10,
  sort: "",
  q: "",
};

const SearchBook: React.FC = () => {
  const [bookList, setBookList] = useState<IBookData[]>([]); // State for book list
  const [loading, setLoading] = useState<boolean>(false); // State for loading indicator
  const [filters, setFilters] = useState<FilterState>(initialFilters); // State for search filters
  const [response, setResponse] = useState<BookApiResponse | null>(null); // State for API response
  const { debounce } = useDebounce(); // Using debounce hook to delay API calls

  const clearSearch = () => {
    setResponse(null);
    setBookList([]);
    setLoading(false);
  };

  const getBooks = useCallback(async () => {
    if (!filters.q) {
      clearSearch(); // Clear search if the query is empty
      return;
    }

    setLoading(true); // Set loading indicator
    try {
      const { status, data }: { status: boolean; data: BookApiResponse } =
        await getBookService(objectToQueryString(filters)); // Fetch books based on filters
      if (status) {
        setResponse(data); // Update response if successful
      }
    } catch (error) {
      console.error("Error fetching books:", error); // Log error if fetching fails
    } finally {
      setLoading(false); // Set loading indicator back to false
    }
  }, [filters]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      clearSearch();
    }
    setFilters({ ...filters, q: event.target.value }); // Update query filter on input change
  };

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, sort: event.target.value }); // Update sort filter on change
  };

  const handlePageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, page: parseInt(event.target.value) }); // Update page filter on change
  };

  useEffect(() => {
    debounce(getBooks, 1500); // Apply debounce to getBooks function
  }, [getBooks]);

  useEffect(() => {
    if (response?.q === filters.q) {
      setBookList(response.docs); // Update book list if the query matches
    }
  }, [response]);

  return (
    <div className="container">
      <SearchForm
        filters={filters}
        onInputChange={handleInputChange}
        onSortChange={handleSortChange}
        onPageChange={handlePageChange}
      />

      <SearchResults
        loading={loading}
        response={response}
        filters={filters}
        bookList={bookList}
      />
    </div>
  );
};

export default SearchBook;
