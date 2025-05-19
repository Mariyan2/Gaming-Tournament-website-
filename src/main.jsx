import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import ProfilePage from './components/ProflePage';
import TournamentsList from './components/TournamentsList'
import TournamentSearchBar from './components/TournamentSearchBar';
import TournamentRegister from './components/TournamentRegistration';
import CreateTournament from './components/CreateTournament';
import CancelTournament from './components/CancelTournament';
import TournamentHistory from './components/TournamentHistory';
import EditTournament from './components/EditTournament';
import IndividualTournament from './components/IndividualTournament';
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <UserLogin /> },
  { path: "/register", element : <UserRegister /> },
  { path: "/profilePage", element : <ProfilePage />},
  { path: "/listTournaments", element : <TournamentsList />},
  { path: "/tournamentSearchBar", element : <TournamentSearchBar />},
  { path: "/createTournament", element : <CreateTournament />},
  { path: "/tournamentRegister", element : <TournamentRegister />},
  { path: "/cancelTournament", element : <CancelTournament />},
  { path: "/tournamentHistory", element : <TournamentHistory />},
  { path: "/editTournament", element : <EditTournament />},
  { path: "/individualTournament", element : <IndividualTournament />}






])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)