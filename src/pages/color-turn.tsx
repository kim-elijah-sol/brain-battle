import rootRoute from "@/route/rootRoute";
import { createRoute } from "@tanstack/react-router";

function ColorTurnPage() {
  return <h1>color-turn</h1>;
}

const colorTurnRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/color-turn",
  component: ColorTurnPage,
});

export default colorTurnRoute;
