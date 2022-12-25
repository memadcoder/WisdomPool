import { useState, ReactNode, createContext } from 'react';
type UserContext = {
  loggedInUser: object;
  setLoggedInUser: (user: object) => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserContext = createContext<UserContext>({} as UserContext);

type Props = {
  children: ReactNode;
};

export function UserProvider({ children }: Props) {
  const [loggedInUser, setUser] = useState(null);

  const setLoggedInUser = (user: object) => {
    setUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
