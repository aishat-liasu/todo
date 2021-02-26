import React from 'react';
import './LogoutPage.css';
import { useLocation } from 'react-router-dom';

const LogoutPage = () => {
  const location = useLocation();
  return (
    <div className="logout-page">
      <h1>Goodbye {location.data}</h1>
    </div>
  );
};

export default LogoutPage;
