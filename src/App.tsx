import { useContext, useState } from "react";
import "./App.css";
import { LoginPage } from "./pages/Login";
import { ColleagueStatus } from "./components/ColleagueStatus";
import { Stack, Typography } from "@mui/material";
import { usersRepo } from "./repo/users.repo";
import { AuthenticationContext } from "./AuthContext";

function App() {
  const { user } = useContext(AuthenticationContext);

  const [colleagueToShow, setColleagueToShow] = useState("");

  if (!user) {
    return <LoginPage />;
  }

  const allColleagues = usersRepo.filter((v) => v.email !== user.email);

  return (
    <>
      <Typography sx={{ mb: 10 }}>
        Hello {user.firstName} {user.lastName}
      </Typography>

      <Stack direction="row" mb={10}>
        <Typography sx={{ mr: 3 }}>
          Select a colleague to see what they are up to:
        </Typography>
        <select
          onChange={(e) => setColleagueToShow(e.target.value)}
          data-testid="select-colleague"
        >
          <option value="">--</option>
          {allColleagues.map((v) => {
            return (
              <option key={v.email} value={v.email}>
                {v.firstName}
              </option>
            );
          })}
        </select>
      </Stack>

      <ColleagueStatus email={colleagueToShow} user={user} />
    </>
  );
}

export default App;
