import { RouterProvider, createRouter } from "@tanstack/react-router";
import indexRoute from "./pages";
import colorTurnRoute from "./pages/color-turn";
import jungleMazeRoute from "./pages/jungle-maze";
import rootRoute from "./route/rootRoute";

const routeTree = rootRoute.addChildren([
  indexRoute,
  colorTurnRoute,
  jungleMazeRoute,
]);

const router = createRouter({ routeTree, defaultPreload: "intent" });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
