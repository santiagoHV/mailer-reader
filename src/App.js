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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Mailer />,
        children: [
          {
            path: "/send-new",
            element: <NewMailForm />,
          },
          {
            path: "/all-mails",
            element: <Inbox />,
          },
          
        ],
      },
      {
        path: "/login",
        element: <Login />,
      }] 
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

