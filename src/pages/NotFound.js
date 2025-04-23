import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default NotFound;
// // This is the NotFound page of the online library application. It displays a 404 error message indicating that the requested page does not exist. The page includes a link to go back to the home page for better navigation.
// // The page is styled with a container for better readability.