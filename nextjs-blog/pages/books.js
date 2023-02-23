// pages/books.js

export default function Books({ books }) {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/books");
  const books = await res.json();

  return {
    props: {
      books,
    },
  };
}
