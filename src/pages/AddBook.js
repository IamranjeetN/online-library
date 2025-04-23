import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '', author: '', category: '', description: '', rating: ''
  });
  const [error, setError] = useState('');

  const categories = [
    'Fiction',
    'Non-Fiction',
    'Biography',
    'Science',
    'Technology',
    'Fantasy',
    'Mystery',
    'History',
    'Philosophy'
  ];

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, category, description, rating } = book;
    if (!title || !author || !category || !description || !rating) {
      setError('Please fill out all fields.');
      return;
    }

    dispatch(addBook({ ...book, rating: parseFloat(rating) }));
    navigate('/books');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Add a New Book</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            placeholder="Title"
            value={book.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="author"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            name="category"
            value={book.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <textarea
            name="description"
            placeholder="Description"
            value={book.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="rating"
            placeholder="Rating (e.g. 4.5)"
            value={book.rating}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
