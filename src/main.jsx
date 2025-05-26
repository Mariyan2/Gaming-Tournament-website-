import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import HomePage from './pages/HomePage';
import UserAuthentification from './pages/UserAuthentification';
import TournamentPage from './pages/TournamentPage';
import ProfilePage from './pages/UserProfile';

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/auth", element: <UserAuthentification /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/tournament", element: <TournamentPage /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)