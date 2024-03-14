import rootRoute from "@/route/rootRoute";
import { createRoute } from "@tanstack/react-router";

function JungleMazePage() {
  return <h1>jungle-maze</h1>;
}

const jungleMazeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/jungle-maze",
  component: JungleMazePage,
});

export default jungleMazeRoute;
