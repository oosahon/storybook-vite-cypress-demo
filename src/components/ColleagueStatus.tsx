import { FC } from "react";
import { usersRepo } from "../repo/users.repo";
import { Box, Typography } from "@mui/material";

export const ColleagueStatus: FC<{
  email: string;
  user: Record<string, any>;
}> = ({ email, user }) => {
  const colleague = usersRepo.find((u) => u.email === email);

  if (!colleague) return <></>;

  if (colleague.blockedUsers.includes(user.email)) {
    return (
      <Box textAlign="center">
        {colleague.firstName} blocked you
        <Typography variant="h1">😢</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box display="flex">
        <Box maxWidth={300} sx={{ mr: 3 }} alignItems="center">
          <img
            style={{ width: "100%", height: "100%" }}
            src={colleague.status.image}
          />
        </Box>

        <Typography>{colleague.status.update}</Typography>
      </Box>
    </>
  );
};
