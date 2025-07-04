import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { BASE_URL } from "../api";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { captain, setCaptain, isLoading, setIsLoading } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        navigate("/captain-login");
        return;
      }

      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/captains/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          setCaptain(response.data.captain);
        } else {
          throw new Error("Invalid response");
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem('token');
        navigate('/captain-login');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [token, navigate, setCaptain, setIsLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;