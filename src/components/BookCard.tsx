import React from "react";

export default function BookCard({ book }: { book: IBookData }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book?.author_name?.join(", ") ?? "-"}</td>
      <td>{book.first_publish_year}</td>
      <td>{book?.isbn?.join(", ") ?? "-"}</td>
      <td>{book.number_of_pages_median || "-"}</td>
    </tr>
  );
}
