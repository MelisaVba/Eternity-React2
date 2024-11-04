import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/layout/Layout.jsx';


import App from './App.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:  <Layout><App /></Layout>,
  }, 
  {
    path: '/Gallery',
    element: <Layout><Gallery /></Layout>,
  },
  {
    path: '/Contact',
    element: <Layout><Contact /></Layout>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);









/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
 import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/

/*import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/Gallery',
    element: <Gallery/>,
  },
  {
    path: '/Contact',
    element: <Contact/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)*/
