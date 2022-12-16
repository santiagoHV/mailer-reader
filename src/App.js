import logo from './logo.svg';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Mailer from './pages/mailer/mailer';
import Login from './pages/login/login';
import Layout from './components/layout/layout';
import NewMailForm from './components/NewMailForm/NewMailForm';
import Inbox from './components/inbox/inbox';
import React, {useEffect} from 'react';



function App() {
  const [data, setData] = React.useState({
      email: '',
      password: '',
  });

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/mails",
          element: <Mailer />,
          children: [
            {
              path: "send-new",
              element: <NewMailForm loginData={data} setLoginData={setData} />,
            },
            {
              path: "all-mails",
              element: <Inbox loginData={data} setLoginData={setData} />,
            },
            
          ],
        },
        {
          path: "/",
          element: <Login loginData={data} setLoginData={setData} />,
        }] 
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

