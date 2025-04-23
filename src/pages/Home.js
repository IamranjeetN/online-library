import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2 flex items-center gap-2">
          Welcome to the Online Library <span role="img" aria-label="books">📚</span>
        </h1>
        <p className="text-gray-700 mb-8 text-lg">Explore thousands of books across categories.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Book Categories */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">📂 Book Categories</h2>
            <ul className="list-disc list-inside space-y-1 text-blue-600">
              <li><Link to="/books?category=fiction" className="hover:underline">Fiction</Link></li>
              <li><Link to="/books?category=non-fiction" className="hover:underline">Non-Fiction</Link></li>
              <li><Link to="/books?category=sci-fi" className="hover:underline">Sci-Fi</Link></li>
            </ul>
          </div>

          {/* Popular Books */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">🔥 Popular Books</h2>
            <ul className="list-disc list-inside space-y-1 text-blue-600">
              <li><Link to="/book/1" className="hover:underline">The Great Gatsby</Link></li>
              <li><Link to="/book/2" className="hover:underline">1984</Link></li>
              <li><Link to="/book/3" className="hover:underline">A Brief History of Time</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
