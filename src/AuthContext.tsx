import { createContext, PropsWithChildren, useState } from "react";

type TAuthContextValue = {
  user?: Record<string, any>;
  login: (user: Record<string, any>) => void;
};

export const AuthenticationContext = createContext<TAuthContextValue>({
  login: () => {},
});

interface IAuthProviderProps extends PropsWithChildren {
  mockUser?: Record<string, any>;
}

export const AuthProvider = ({ children, mockUser }: IAuthProviderProps) => {
  const [user, setUser] = useState<Record<string, any> | undefined>(mockUser);

  const login = (authUser: Record<string, any>) => {
    setUser(authUser);
  };

  return (
    <AuthenticationContext.Provider value={{ user, login }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
