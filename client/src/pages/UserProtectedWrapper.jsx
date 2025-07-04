import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../api';

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        navigate('/user-login');
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          setUser(response.data.user);
        } else {
          throw new Error('Invalid response');
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem('token');
        navigate('/user-login');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [token, navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;