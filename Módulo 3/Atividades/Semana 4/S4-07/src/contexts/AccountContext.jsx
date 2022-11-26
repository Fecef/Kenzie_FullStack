import { createContext, useEffect, useState } from "react";
import { userTokenValidation } from "../services/api";

export const AccountContext = createContext({});

export function AccountProvider({ children }) {
  const [user, setUser] = useState(null);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function validation() {
      const token = localStorage.getItem("@TOKEN");
      const res = await userTokenValidation(token);

      setUser(res);
      setLoading(false);
      setUpdate(false);
    }
    validation();
  }, [update]);

  return (
    <AccountContext.Provider value={{ loading, user, setUser, setUpdate }}>
      {children}
    </AccountContext.Provider>
  );
}
