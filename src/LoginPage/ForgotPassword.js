import React, { useState } from 'react';
import './LoginPage.css';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [forgotEmail, updateForgotEmail] = useState('');
  const forgotForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="forgot-page">
      <form onSubmit={forgotForm} className="forgot-form">
        <label htmlFor="username">
          Email
          <input
            type="email"
            name="forgot-email"
            className="form-control"
            id="forgot-email"
            placeholder="Email"
            value={forgotEmail}
            onChange={(e) => updateForgotEmail(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="btn forgot-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
