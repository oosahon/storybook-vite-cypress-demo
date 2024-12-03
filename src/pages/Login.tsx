import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useLoginUser } from "../hooks/useLoginUser";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useLoginUser();

  const handleSubmit = () => {
    const user = mutate(email, password);

    console.log({ user });

    if (!user) {
      alert("Invalid email or password.");
      return;
    }

    login(user);
  };

  return (
    <Box mx="auto">
      <Typography variant="h2">Login</Typography>
      <Typography variant="body1">
        Log in to your account to access the full features of the office.
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Stack spacing={2} mt={5}>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
