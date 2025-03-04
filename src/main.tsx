// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./routes/Home";
import CreateToDoRoute from './routes/Create';
import ToDoProvider from './context/ToDoProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <CreateToDoRoute />,
  }
]);

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ToDoProvider>
    <RouterProvider router={router} />
  </ToDoProvider>
  // </StrictMode>,
)
