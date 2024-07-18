import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import Page404 from "./pages/Page404/Page404";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const router = createBrowserRouter([
    {
      element: <BaseLayout />,
      errorElement: <Page404 />,
      children: routes,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
