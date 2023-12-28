import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";
import React, { createContext, useCallback, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLogin(false);
    setLoading(false);

    window.localStorage.removeItem("token");
  }, []);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);

    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });
      const tokenResponse = await fetch(url, options);

      if (!tokenResponse.ok) {
        throw new Error(`Error: Usuário inválido!`);
      }

      const { token } = await tokenResponse.json();

      window.localStorage.setItem("token", token);

      await getUser(token);
      navigate("/conta");
    } catch (e) {
      setError(e.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) {
            throw new Error("Token inválido");
          }

          await getUser(token);
        } catch (e) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);
  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
