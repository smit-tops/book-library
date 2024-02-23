import React from "react";
import BookCard from "./BookCard";

export default function BookList({ bookList }: { bookList: IBookData[] }) {
  if (bookList?.length < 1) {
    return <h2>No result Found</h2>;
  }

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author(s) Name</th>
              <th>Published Year</th>
              <th>ISBN Number(s)</th>
              <th>Number of Pages</th>
            </tr>
          </thead>
          <tbody>
            {bookList?.map((book: IBookData) => {
              return <BookCard key={book.id} book={book} />;
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="row gap-2">
        {bookList?.map((book: IBookData) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div> */}
    </div>
  );
}
