import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTravelPage from './pages/create-travel';
import TravelDetailsPage from './pages/travel-details';

const router = createBrowserRouter([
  { path: '/', element: <CreateTravelPage /> },
  { path: '/travels/:id', element: <TravelDetailsPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
