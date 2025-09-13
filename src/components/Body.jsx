import React from 'react'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Main App component
const App = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },   // default page = Login
    { path: "/login", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
