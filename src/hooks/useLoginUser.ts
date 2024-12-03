import { usersRepo } from "../repo/users.repo";

export const useLoginUser = () => {
  return {
    mutate: (email: string, password: string) => {
      const foundUser = usersRepo.find(
        (user) => user.email === email && user.password === password
      );

      return foundUser;
    },
  };
};
