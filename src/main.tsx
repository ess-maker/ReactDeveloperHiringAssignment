import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useParams,
  } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Courses_List from './components/Courses_List/Courseslist';
import Scroolpages from './components/pages/Scroolpages';
import { Provider} from 'react-redux';
import store from './store/store';
import Errpage from './components/shered/Errpage';

const AppLayout = () => {
  const { pageNumber } = useParams();

  return (
    <div className="App">
      <Navbar />
      {pageNumber ? <Outlet /> : <Courses_List />}
      <Scroolpages />
    </div>
  );
};

const router = createBrowserRouter([
  {path:"/",element:<AppLayout />,
  errorElement:<Errpage />,
children:[
  {path:`:pageNumber` , element:<Courses_List />}
]},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}  >
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>,
)
