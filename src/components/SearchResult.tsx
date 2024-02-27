import BookList from "./BookList";

interface ISearchResult {
  loading: boolean;
  response: BookApiResponse | null;
  filters: FilterState;
  bookList: IBookData[];
}

export const SearchResults: React.FC<ISearchResult> = ({ loading, response, filters, bookList }) => {
  return (
    <div className="my-4">
      {loading && (
        <p className="text-muted">Searching the library shelves.....</p>
      )}
      {response && filters.q && !loading && (
        <>
          <h4 className="mb-3 text-primary">Results for "{response?.q}"</h4>
          <BookList bookList={bookList} />
        </>
      )}
    </div>
  );
};
