import MiniCMS from './components/MiniCMS/MiniCMS';
import Blog from './components/Blog/Blog';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MiniCMS />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ])

  return (
 (
    <RouterProvider router={router} />
  )
  );
}

export default App;
