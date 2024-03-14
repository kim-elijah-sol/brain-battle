import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import IndexPage from "./pages";
import ColorTurnPage from "./pages/color-turn";
import JungleMazePage from "./pages/jungle-maze";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

const colorTurnRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/color-turn",
  component: ColorTurnPage,
});

const jungleMazeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jungle-maze",
  component: JungleMazePage,
});

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
