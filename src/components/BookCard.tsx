import React from "react";

function truncateISBN(isbn: string): string {
  const maxLength = 20; // Adjust as needed
  if (isbn?.length > maxLength) {
    return isbn?.slice(0, maxLength) + "...";
  }
  return isbn;
}

export default function BookCard({ book }: { book: IBookData }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow h-100">
        {/* <img
        src="https://covers.openlibrary.org/b/id/OL584333W.jpg"
        className="card-img-top"
        alt={book.title}
      /> */}
        <div className="card-body">
          <h5 className="card-title text-primary">{book.title}</h5>
          <p className="card-text text-muted">
            <strong>Author(s):</strong> {book.author_name?.join(", ")}
          </p>
          <p className="card-text text-muted">
            <strong>Published Year:</strong> {book.first_publish_year}
          </p>
          <p
            className="card-text text-muted"
            style={{
              maxHeight: "3em",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <strong>ISBN:</strong>{" "}
            <span className="isbn-number">
              {truncateISBN(book.isbn?.join(","))}
            </span>
          </p>

          <p className="card-text text-muted">
            <strong>Pages:</strong> {book.number_of_pages_median || "-"}
          </p>
        </div>
      </div>
    </div>
  );
}
