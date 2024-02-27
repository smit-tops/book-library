import { ChangeEvent } from "react";

interface ISearchForm {
  filters: FilterState;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSortChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onPageChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SearchForm: React.FC<ISearchForm> = ({
  filters,
  onInputChange,
  onSortChange,
  onPageChange,
}) => {
  return (
    <div className="row">
      <div className="col">
        <input
          id="book-search"
          placeholder="Search for book title"
          type="text"
          onChange={onInputChange}
          className="form-control"
        />
      </div>
      <div className="col">
        <div className="d-flex justify-content-end align-items-center">
          <label
            htmlFor="sort-by"
            className="font-weight-bold text-bold me-2 text-secondary"
          >
            Sort by
          </label>
          <select id="sort-by" className="form-select" onChange={onSortChange}>
            <option value="">Relevance</option>
            <option value="old">Publication Year (Oldest First)</option>
            <option value="new">Publication Year (Newest First)</option>
          </select>
        </div>
      </div>
      <div className="col">
        <div className="d-flex justify-content-end align-items-center">
          <label
            htmlFor="page-no"
            className="font-weight-bold text-bold me-2 text-secondary"
          >
            Page
          </label>
          <select
            id="page-no"
            className="form-select"
            onChange={onPageChange}
            value={filters.page}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};
