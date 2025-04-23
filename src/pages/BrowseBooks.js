import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.items);
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchCategory = category ? book.category === category : true;
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">📚 Browse Books</h1>

        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-8 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {filteredBooks.length > 0 ? (
          <ul className="space-y-6">
            {filteredBooks.map((book) => (
              <li
                key={book.id}
                className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-900">{book.title}</h2>
                <p className="text-gray-600">by {book.author}</p>
                <Link
                  to={`/book/${book.id}`}
                  className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Details →
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-lg">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
