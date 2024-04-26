import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuthenticationCheck = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (token) {
          await axios.get('/api/protectedRoute', { headers: { Authorization: `Bearer ${token}` } });
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (error) {
        console.error('Authentication check failed', error);
        setAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  return authenticated ? <p>User is authenticated</p> : <p>User is not authenticated</p>;
};

export default AuthenticationCheck;
