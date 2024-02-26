import React from "react";
import BookCard from "./BookCard";

export default function BookList({ bookList }: { bookList: IBookData[] }) {
  if (bookList?.length < 1) {
    return <h2>No result Found</h2>;
  }

  return (
    <div className="card-list-container">
      <div className="row">
        {bookList.map((book, index) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
