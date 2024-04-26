import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.post('/logout', {}, { headers: { Authorization: `Bearer ${token}` } });
      localStorage.removeItem('accessToken');
      // Redirect to login page or desired page upon successful logout
    } catch (error) {
      console.error('Logout failed', error);
      // Handle logout failure
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
