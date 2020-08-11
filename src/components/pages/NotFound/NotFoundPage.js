import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <h3>if you think this is an error please contact your administrator</h3>
      <Link to="/">
        <button>Back To Home</button>
      </Link>
      <h3>if you have an admin account click login below</h3>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
