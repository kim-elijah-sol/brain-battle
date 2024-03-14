import rootRoute from "@/route/rootRoute";
import { createRoute } from "@tanstack/react-router";

function IndexPage() {
  return <h1>index</h1>;
}

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

export default indexRoute;
