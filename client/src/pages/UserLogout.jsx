import React, { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../api';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate('/user-login');
        } else {
          console.error('Logout failed with status:', response.status);
        }
      } catch (error) {
        console.error('Error logging out:', error);
        localStorage.removeItem('token');
        navigate('/user-login');
      }
    };

    logout();
  }, [navigate]);

  return (
    <div>Logging you out...</div>
  );
};

export default UserLogout;