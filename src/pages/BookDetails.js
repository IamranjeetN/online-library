import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.items);
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-600 text-lg">
        Book not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{book.title}</h1>

        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Author:</span> {book.author}
        </p>

        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Category:</span>{' '}
          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {book.category}
          </span>
        </p>

        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">Rating:</span>{' '}
          <span className="text-yellow-500">{'★'.repeat(Math.floor(book.rating))}</span> ({book.rating})
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">{book.description}</p>

        <Link
          to="/books"
          className="inline-block text-blue-600 hover:text-blue-800 transition font-medium"
        >
          ← Back to Browse
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
