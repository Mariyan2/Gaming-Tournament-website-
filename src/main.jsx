import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import ProfilePage from './components/ProflePage';
import TournamentsList from './components/TournamentsList';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <UserLogin /> },
  { path: "/register", element : <UserRegister /> },
  { path: "/profilePage", element : <ProfilePage />},
  { path: "/listTournaments", element : <TournamentsList />}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)