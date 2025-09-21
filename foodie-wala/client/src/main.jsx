import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import ExplorePage from './pages/ExplorePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import TrendingPage from './pages/TrendingPage';
import FoodMap from './pages/FoodMap';
import LandingPage from './pages/LandingPage';
import TestPage from './pages/TestPage';
import RestaurantPage from './pages/RestaurantPage.jsx'
import {ClerkProvider} from '@clerk/clerk-react'
import SaveUser from './components/SaveUser.jsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<LandingPage />} />

      <Route element={<App />}>
        <Route path='home' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signUp' element={<SignupPage />} />
        <Route path='explore' element={<ExplorePage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='foodMap' element={<FoodMap />} />
        <Route path='trending' element={<TrendingPage />} />
        <Route path='test' element={<TestPage />} />
        <Route path='restaurant/:id' element={<RestaurantPage />} />
      </Route>
    </>))

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </ClerkProvider>
)
