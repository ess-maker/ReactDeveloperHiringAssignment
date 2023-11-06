import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useParams,
  } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Boxcar from './components/carbox/Boxcar';
import Scroolpages from './components/pages/Scroolpages';
import { Provider} from 'react-redux';
import store from './store/store';

const AppLayout = () => {
  const { pageNumber } = useParams();

  return (
    <div className="App">
      <Navbar />
      {pageNumber ? <Outlet /> : <Boxcar />}
      <Scroolpages />
    </div>
  );
};

const router = createBrowserRouter([
  {path:"/",element:<AppLayout />,
children:[
  {path:`:pageNumber` , element:<Boxcar />}
]},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}  >
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>,
)
